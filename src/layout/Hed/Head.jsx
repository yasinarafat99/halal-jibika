import { Link, NavLink } from "react-router-dom"; //  Import NavLink
import { FaBars } from "react-icons/fa"; // Import Icon from react
import logo from "../../assets/images/halalaJibikaLogo.png"; // iogo-img import
import "./Hed.css"; // css import
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firbase/firbase.config";
import { useState } from "react";

function Head() {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  return (
    <>
      <nav>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>
        <label className="logo">
          <NavLink to={"/"}>
            {" "}
            <img src={logo} alt="Halal Jibika" />{" "}
          </NavLink>
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
              <NavLink to={"/favorite"}>Favorite</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            {
              !user ? (
                <li>
                  <NavLink className="signup" to={"/signup"}>
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

              // <NavLink className="userProfile">
              //     <img onClick={() => signOut()} className="userImage" src={user?.photoURL} alt="" />
              //   </NavLink>
            }
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Head;
