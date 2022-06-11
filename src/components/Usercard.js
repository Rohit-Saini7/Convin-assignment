import "./Usercard.css";

import { useSelector } from "react-redux";

function Usercard() {
  const users = useSelector((state) => state);

  return (
    <div className="userCardWrapper">
      {users.usersList.loading ? (
        <div> laoding...</div>
      ) : (
        <div>
          {!users.usersList.isThereUser ? (
            <div className="noUserSelected">
              Click on any button to fetch data related to that User.
            </div>
          ) : (
            <div className="userSelected">
              <img
                src={users.usersList.singleUser.avatar}
                alt={users.usersList.singleUser.first_name}
                className="userAvatar"
              />
              <div className="userName">
                {users.usersList.singleUser.first_name}{" "}
                {users.usersList.singleUser.last_name}
              </div>
              <div className="userEmail">
                {users.usersList.singleUser.email}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Usercard;
