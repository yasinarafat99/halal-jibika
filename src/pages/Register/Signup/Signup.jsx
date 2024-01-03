import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firbase/firbase.config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);


  // const handleChange
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // formData Pass //
  const email = formData.email;
  const password = formData.password;
  const confirmpassword = formData.confirmpassword;
  // formData Pass //

  if(googleuser){
    navigate("/");
    return Swal.fire({
      title: "Successfully signed in",
      icon: "success"
    });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast.error("pls input 6 digit");
    }
    if (password !== confirmpassword) {
      return toast.error("Password doesn't match!");
    } else {
      createUserWithEmailAndPassword(email, password);
      navigate("/");
      return toast.success("Signup Succesfull");
    }

  };

  const handleGoogleSignUp = ()=>{
    signInWithGoogle();
  }
  return (
    <>
      <section>
        <div className="signup_fullWith ">
          <div className="signup_container">
            <div className="">
              <h2 className="signup_text">Sign up</h2>
              <p className="route_page">
                Already have an account? <Link to={"/signin"}>Sign In</Link>
              </p>
              <form className="form_container" onSubmit={handleSignUp}>
                <div>
                  <div>
                    <label> Full Name </label>
                    <div>
                      <input
                        onChange={handleChange}
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label className=""> Email address </label>
                    <div>
                      <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        id="email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div>
                      <label>Password</label>
                    </div>
                    <div>
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        placeholder="Password"
                        id="password"
                      ></input>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <div>
                      <label>Confirm Password</label>
                    </div>
                    <div>
                      <input
                        onChange={handleChange}
                        name="confirmpassword"
                        type="password"
                        placeholder="Confirm Password"
                        id="confirmpassword"
                      ></input>
                    </div>
                  </div>

                  {/*  */}
                  <div>
                    <button type="submit" className="create_account signUpBtn">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
              <div>
                <button onClick={handleGoogleSignUp} type="button" className="Signup_Google signUpBtn">
                  Sign up with Google
                </button>
                <button type="button" className="Signup_Facebook signUpBtn">
                  Sign up with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
