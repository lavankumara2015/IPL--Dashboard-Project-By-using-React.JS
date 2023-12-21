import { Link } from "react-router-dom"
import "./Nav.css"
const Navbarr =()=>{

return(
    <>
 <nav className="navbar navbar-light  " id="navbarr">
  <Link ><img src="https://www.iplt20.com/assets/images/ipl-logo-new-old.png
" width={"120px"} className="img"/></Link>
  <form className="form-inline">
    <input
      className="form-control mr-sm-5"
      
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <button id="btn" className="btn btn-outline-success my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
</nav>

    </>
)

}

export default Navbarr