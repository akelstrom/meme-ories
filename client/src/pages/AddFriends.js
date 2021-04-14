import React from "react";
import UserList from "../components/UserList";
import Auth from "../utils/auth";
import { Redirect } from "react-router-dom";

const AddFriends = () => {
  if (!Auth.loggedIn()) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <UserList />
    </div>
  );
};

export default AddFriends;
