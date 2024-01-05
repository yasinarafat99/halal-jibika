import { Link, NavLink } from "react-router-dom"; 
import { FaBars } from "react-icons/fa"; 
import logo from "../../assets/images/halalaJibikaLogo.png";
import "./Hed.css"; 
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firbase/firbase.config";

function Head() {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);

  const handleCheckboxClick = () => {
    const checkbox = document.getElementById("check");
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
  return (
    <>
      <nav>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>
        <label className="logo">
          <NavLink to={"/"} onClick={handleCheckboxClick}>
            {" "}
            <img src={logo} alt="Halal Jibika" />{" "}
          </NavLink>
        </label>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/home"} onClick={handleCheckboxClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/jobs"} onClick={handleCheckboxClick}>Jobs</NavLink>
            </li>
            <li>
              <NavLink to={
                
                "/favorite"} onClick={handleCheckboxClick}>Favorite</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={handleCheckboxClick}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={handleCheckboxClick}>Contact</NavLink>
            </li>
            {
              !user ? (
                <li>
                  <NavLink className="signup" to={"/signup"} onClick={handleCheckboxClick}>
                    Sign up
                  </NavLink>
                </li>
              ) : (
                <img
                  onClick={() => signOut()}
                  src={user?.photoURL}
                  alt="user"
                />
              )
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Head;
