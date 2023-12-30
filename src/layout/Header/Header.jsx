import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-no-background.png";

function Header() {
  return (
    <>
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
          <NavLink to={'/signup'}>Sign up</NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Header;
