import "./Buttons.css";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getSingleUser } from "../redux/userSlice";
import $ from "jquery";

function Buttons() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  $("button").on("click", (event) => {
    event.stopImmediatePropagation();
    dispatch(getSingleUser(event.target.value));
  });
  return (
    <div className="buttonsWrapper">
      {users.usersList.list.map((user) => (
        <button value={user.id} key={user.id}>
          {user.id}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
