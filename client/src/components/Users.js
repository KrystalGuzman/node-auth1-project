import React, {useState} from "react";
import UserList from "./UserList";

import "../App.css";

const Users = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2>All Users</h2>
      <UserList isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );

}

export default Users;