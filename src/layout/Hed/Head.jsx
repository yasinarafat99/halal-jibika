import { NavLink } from "react-router-dom"; //  Import NavLink
import { FaBars } from "react-icons/fa"; // Import Icon from react
import logo from "../../assets/images/halalaJibikaLogo.png"; // iogo-img import
import "./Hed.css"; // css import

function Head() {
  return (
    <>
      <nav>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>
        <label className="logo">
          <img src={logo} alt="Halal Jibika" />
        </label>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/jobs"}>Jobs</NavLink>
            </li>
            <li>
              <NavLink className="favorite" to={"/favorite"}>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>{" "}
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink className="signup" to={"/signup"}>
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Head;
