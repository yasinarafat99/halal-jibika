import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firbase/firbase.config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Signup() {
  const navigate = useNavigate();

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

    if(error || googleerror){
      console.log(error)
      console.log(googleerror)
    }

  if (googleuser || user) {
    navigate("/");
    return Swal.fire({
      title: "Successfully signed up",
      icon: "success",
    });
  }

  const handleSignUp = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmpassword = e.target.confirmpassword.value;
    console.log(name, email, password, confirmpassword);

    if (password.length < 6) {
      return toast.error("pls input 6 digit");
    }
    if (password !== confirmpassword) {
      return toast.error("Password doesn't match!");
    } else {
      await createUserWithEmailAndPassword(email, password);
      return toast.success("Signup Succesfull");
    }
  };

  //****** Sign In With Google **********//
  const handleGoogleSignUp = () => {
    signInWithGoogle();
  };
  //****** Sign In With Google **********//

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
                <button
                  onClick={handleGoogleSignUp}
                  type="button"
                  className="Signup_Google signUpBtn"
                >
                  Sign up with Google
                </button>
                <button type="button" className="Signup_Facebook signUpBtn">
                  Sign up with github
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
