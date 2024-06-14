import React, { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from "../context/Authcontext";
import { Line } from '../components';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
    const { googleSignIn, login } = UserAuth();
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (emailRef.current.value.match(/gmail.com/gi)) {

            Swal.fire({
                title: 'Warning',
                text: `If you want to sign in with your Gmail account, please use "Sign in with Google" button.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } else {
            try {
                setLoading(true);
                console.log("login: ", emailRef.current.value);
                await login(emailRef.current.value, passwordRef.current.value);
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
        <div className="login">
            <div className="login-title">Sign in</div>
            <div className="login-content">
                <p>We provide 2 options for sign in.<br />You can use email and password or use your Google account.</p>
            </div>
                <Line width="100%" color="--darkgrey-color" />
                <div className="login-content">
                <form onSubmit={handleSubmit}>

                    <div className="login-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} required />
                    </div>
                    <div className="login-form">
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={passwordRef} required />
                    </div>
                    <div>
                        <button disabled={loading} type="submit">Sign in</button>
                    </div>
                    <div>
                        <p>Forgot password? <Link to="/forgotpassword">Reset password</Link><br />
                            Need an account? <Link to="/signup">Sign up</Link></p>
                    </div>
                </form>
                </div>
                <Line width="100%" color="--darkgrey-color" />

                <div className="login-google-button">
                    <GoogleButton onClick={handleGoogleSignIn} />
                </div>


        </div>
    )
}

export default Login