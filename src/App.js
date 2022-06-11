import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList, getSingleUser } from "./redux/userSlice";
import $ from "jquery";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  $("button").one("click", (event) => {
    let target = event.target;
    console.log(target.value);
    dispatch(getSingleUser(target.value));
  });

  return (
    <div>
      <div>
        {!users.usersList.isThereUser ? (
          <p>Click on any button to fetch data related to that User.</p>
        ) : (
          <div>
            <p>{users.usersList.singleUser.email}</p>
            <p>
              {users.usersList.singleUser.first_name}{" "}
              {users.usersList.singleUser.last_name}
            </p>
            <img
              src={users.usersList.singleUser.avatar}
              alt={users.usersList.singleUser.first_name}
            />
          </div>
        )}
      </div>

      {users.usersList.list.map((user) => (
        <button value={user.id} key={user.id}>
          {user.id}
        </button>
      ))}
    </div>
  );
}

export default App;
