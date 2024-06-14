import React, { useRef, useState } from "react";
import { UserAuth } from "../context/Authcontext";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import './Forgotpassword.css';

const Forgotpassword = () => {
    const emailRef = useRef();
    const { resetPassword } = UserAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (emailRef.current.value.match(/gmail.com/gi)) {

            Swal.fire({
                title: 'Warning',
                text: `If you want to reset password for your Gmail account, please use respective service provided by Google.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } else {
            try {
                setLoading(true);
                await resetPassword(emailRef.current.value);

                Swal.fire({
                    title: 'Check your inbox',
                    text: `Please check the inbox of your email for further instructions.`,
                    icon: 'success',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
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

    return (
        <div className="forgotpassword">
            <div className="forgotpassword-title">Reset password</div>
            <form onSubmit={handleSubmit}>

            <div className="forgotpassword-content">
                    <div className="forgotpassword-form">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" ref={emailRef} required />
                    </div>
                    <div>
                        <button disabled={loading} type="submit">Reset Password</button>
                    </div>
                    <div >
                        <p>Remember your password? <Link to="/login">Sign in</Link><br />
                        Need an account? <Link to="/signup">Sign up</Link></p>
                    </div>
            </div>
            </form>
        </div>
    )
}

export default Forgotpassword