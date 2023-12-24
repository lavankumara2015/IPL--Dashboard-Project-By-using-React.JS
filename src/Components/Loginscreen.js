import { useContext, useState } from "react";
import { LoginInfo } from "./Navigation/navigation";
import { useNavigate } from "react-router-dom";
import TeamDetails from "./teamdetailes/teamdetailes";
import "./Loginscreen.css";

const LoginScreen = () => {


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
    <form className="input" onSubmit={handleLoginSubmit}>
      <div className="form-group">
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
        /><br/>
        <small className="error-message" style={{color:"red"}}>{errorUser}</small>
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </form>
  );
};

export default LoginScreen;
