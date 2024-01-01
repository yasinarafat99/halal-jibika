import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-no-background.png";

function Header() {
  return (
    <>
      <div className="full_width">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="nav_list">
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/jobs"}>Jobs</NavLink>
          <NavLink to={'/about'}>About</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
          <NavLink to={'/favorite'}>Favorite</NavLink>
          <NavLink className="signup" to={'/signup'}>Sign up</NavLink>
          {/* <NavLink></NavLink> */}
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Header;
