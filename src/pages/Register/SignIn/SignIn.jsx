import "./Signin.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <section>
        <div className="signin_fullWith">
          <div className="signin_container">
            <div className="">
              <h2 className="signin_text">Sign in</h2>
              <form className="signin_form_container">
                <div>
                  <div>
                    <label> Email address </label>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="password">
                      <label>Password</label>
                      <div className="forget_pass">
                        <a href="">Forget Password?</a>
                      </div>
                    </div>
                    <div>
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                      ></input>
                    </div>
                  </div>

                  <div className="signin">
                    <button type="button" className="signin_create_account">
                      Sign in
                    </button>
                  </div>

                  <div class="signup_link">
                    <span>Not a Member ?</span>{" "}
                    <Link to={"/signup"}>Signup</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
