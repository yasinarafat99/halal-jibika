import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../../Firbase/firbase.config';
import Swal from 'sweetalert2';

function SignIn() {
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  console.log(error)


 const signInHandle = ((e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  signInWithEmailAndPassword(email, password);
 })

 if(user){
  navigate('/');
  return Swal.fire({
    title: "succesfully signin",
    icon:"success"
  })
 } 
 if(error){
  var err = "Pls Enter Valid Input";
 }
//  console.log(err)
 
  return (
    <>
      <section>
        <div className="signin_fullWith">
          <div className="signin_container">
              <h2 className="signin_text">Sign in</h2>
                <h1 className='errorMsg'>{err}</h1>
              <form onSubmit={signInHandle} className="signin_form_container">
                <div>
                  <div>
                    <label> Email address </label>
                    <div>
                      <input
                      
                      name='email'
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
               
                      name='password'
                        type="password"
                        placeholder="Password"
                        id="password"
                      
                      ></input>
                    </div>
                  </div>

                  <div className="signin">
                    <button type="submit" className="signin_create_account">
                      Sign in
                    </button>
                  </div>

                  <div className="signup_link">
                    <span>Not a Member ?</span>{" "}
                    <Link to={"/signup"}>Signup</Link>
                  </div>
                </div>
              </form>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
