import './Signup.css'
import { Link } from "react-router-dom";

function Signup() {
  const handleSignUp = (() => {

  })
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
                <button type="button" className="Signup_Google signUpBtn">
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
