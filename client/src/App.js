import React, {useState} from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

import UserList from "./components/UserList";

import "./App.css";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h2>Sign Up</h2>
      <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <h2>Log In</h2>
      <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <h2>Log Out</h2>
      <Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <h2>All Users</h2>
      <UserList isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    </>
  );

}

export default App;