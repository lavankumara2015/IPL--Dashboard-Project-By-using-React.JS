import { createContext, useContext, useState } from "react";
import { LoginInfo } from "./Navigation/navigation";
import { Link, useNavigate } from "react-router-dom";
import TeamDetails from "./teamdetailes/teamdetailes";
import "./Loginscreen.css";
// import firebase from 'firebase';


// const auth =firebase.auth();



export const username1=createContext()

const LoginScreen = () => {

  // const auth =firebase.auth()




  const singIn=useContext(LoginInfo)
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [errorUser, setErrorUser] = useState("");

  const [password, setPassword] = useState("");
  const [errorPass, setErrorPass] = useState("");




  const handleLoginSubmit = (e) => {
    e.preventDefault();
  
 
    const user=JSON.parse(localStorage.getItem("Details"))

     const user1=user.username===username && user.password ===password

    if (user1) {

      alert("Login Successful");
      
      singIn.SingInn();
      navigate("/");



    } else {
      setErrorUser("Invalid username or password");
      
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setErrorUser(""); 
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrorPass(""); 
  };

  const handleRegister = () => {
    navigate("/Register");
  };

  const checkCredentials = (enteredUsername, enteredPassword) => {
   
    const registeredUsername = "your_registered_username";
    const registeredPassword = "your_registered_password";

    return (
      enteredUsername === registeredUsername && enteredPassword === registeredPassword
    );
  };

  return (
    <center id="main">
   
    <form className="input" onSubmit={handleLoginSubmit} id="form1">
      <div className="form-group">
      <h1 id="h1"> Login </h1><br/>
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter username"
          value={username}
          onChange={handleUsername}
        /><br/>
        {/* <small className="error-message" style={{color:"red"}}>{errorUser}</small> */}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <small className="error-message" style={{color:"red"}}>{errorUser}</small>
      </div>

      <p>You Don't have any account <b onClick={handleRegister} id="bb"> Register</b></p>
      <br />
      <div id="btnall">
      <button type="submit" className="btn btn-primary" id="btn1">
        Login
      </button>
      {/* <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button> */}
      </div>
      {/* <button>Sing in with Google</button> */}
    </form>
    </center>
  );
};

export default LoginScreen;
