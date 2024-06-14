import React, { useRef, useState } from "react";
import { UserAuth } from "../context/Authcontext";
import { useNavigate, Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import { Line } from '../components';
import Swal from 'sweetalert2';
import "./Signup.css";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { googleSignIn, signup } = UserAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {

      Swal.fire({
        title: 'Error',
        text: `Passwords do not match`,
        icon: 'error',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      });

    } else if (emailRef.current.value.match(/gmail.com/gi)) {

      Swal.fire({
        title: 'Warning',
        text: `You don't need to sign up with Gmail account. Please use "Sign in with Google" at "Sign in" page`,
        icon: 'warning',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      });

    } else {
      try {
        setLoading(true);
        console.log("Signup: ", emailRef.current.value);
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate("/profile");
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: `${error}`,
          icon: 'error',
          iconColor: '#A5C727',
          confirmButtonText: 'OK',
          confirmButtonColor: '#A5C727'
        });
      }
      setLoading(false)

    }

  }

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleSignIn();
      navigate("/profile");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error',
        text: `${error}`,
        icon: 'error',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      });
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="signup-title">Sign up</div>

      <div className="signup-content">
        <p>We provide 2 options for sign up.<br />You can use email and password to sign up or use your Google account to sign in directly.</p>
      </div>

      <Line width="100%" color="--darkgrey-color" />

      <div className="signup-content">
        <form onSubmit={handleSubmit} >
          <div className="signup-form">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" ref={emailRef} required />
          </div>
          <div className="signup-form">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" ref={passwordRef} required />
          </div>
          <div className="signup-form">
            <label htmlFor="password-confirm">Password confirmation</label>
            <input type="password" name="password-confirm" id="password-confirm" ref={passwordConfirmRef} required />
          </div>
          <div>
            <button disabled={loading} type="submit">Sign up</button>
          </div>
          <div>
            <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </div>
        </form>
      </div>

      <Line width="100%" color="--darkgrey-color" />

      <div className="signup-google-button">
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default Signup