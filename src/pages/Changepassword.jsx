import React, { useRef, useState } from "react";
import { UserAuth } from "../context/Authcontext";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Changepassword.css';

const Changepassword = () => {
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { changePassword, user } = UserAuth();
    const [loading, setLoading] = useState(false);

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
        } else {
            try {
                setLoading(true);
                if (passwordRef.current.value) {
                    await changePassword(passwordRef.current.value);
                    Swal.fire({
                        title: 'Updated',
                        text: `Your password has been updated.`,
                        icon: 'success',
                        iconColor: '#A5C727',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#A5C727'
                    });
                }

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


    if (!user || !(user.email)) {
        return (
            <div className="changepassword">
                <div className="changepassword-title">
                    Change password
                </div>
                <div className="changepassword-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    }

    if (user.email.match(/gmail.com/gi)) {
        return (
            <div className="changepassword">
                <div className="changepassword-title">
                    Change password
                </div>
                <div className="changepassword-content">
                    <p>If you want to change password for your Gmail account, please use respective service provided by Google.</p>
                </div>
            </div>
        )
    }

    return (
        <div className="changepassword">
            <div className="changepassword-title">Change password</div>
            <form onSubmit={handleSubmit}>
                <div className="changepassword-content">
                    <p>
                        <label>Email</label>{user.email}
                    </p>
                    <div className="changepassword-form">
                        <label htmlFor="password">New password</label>
                        <input type="password" name="password" id="password" ref={passwordRef} required />
                    </div>
                    <div className="changepassword-form">
                        <label htmlFor="password-confirm">New password confirmation</label>
                        <input type="password" name="password-confirm" id="password-confirm" ref={passwordConfirmRef} required />
                    </div>
                    <div>
                        <button disabled={loading} type="submit">Update password</button>
                    </div>
                    <div >
                        <p><Link to="/">Cancel</Link></p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Changepassword