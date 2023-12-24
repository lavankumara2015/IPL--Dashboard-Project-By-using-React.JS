import { Link, useNavigate } from "react-router-dom"
import "./Nav.css";
import { useContext, useState } from "react";
import { LoginInfo } from "../Navigation/navigation";


const Navbarr = () => {
  const navigate=useNavigate()

  const DataSing =useContext(LoginInfo)

  // const [isLoggedIn, setIsLoggedIn] = useState(false);


//   const handleLogin=()=>{

// navigate("/LoginScreen")



//   }

  const handleLogout=()=>{

    DataSing.singOut();
    navigate("/LoginScreen")
  }

  return (
    <>
      <nav className="navbar navbar-light " id="navbarr">

        <Link to={"/"}><img src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png
" width={"120px"} className="img" /></Link>

        <form className="form-inline">

          <input
            className="form-control mr-sm-5"
            id="input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button id="btn" className="btn" type="submit">
            Search
          </button>

          {
            DataSing.login ?  <button id="btn" className="btn" type="submit" onClick={handleLogout}>
            Logout
          </button> : null
          }
           
          
        </form>
      </nav>

    </>
  )

}

export default Navbarr