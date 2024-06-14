import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';
import { Button } from '../components';
import Swal from 'sweetalert2';
import "./Eventfcm.css";
import { Link } from 'react-router-dom';
import { getFunctions, httpsCallable } from "firebase/functions";

const Eventfcm = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();

    const functions = getFunctions();
    const serverFCM = httpsCallable(functions, 'sendFCM');

    const initFormValues = {
        title: "",
        content: "",
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fcmList = [];
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                if(doc.data().fcmtokens) {
                    for(let i=0; i<doc.data().fcmtokens.length; i++) {
                        fcmList.push(doc.data().fcmtokens[i]);
                    }
                }
            });
            console.log("Eventsignupmod: sendFcm: ", fcmList);

            serverFCM({tokenlist: fcmList, fcmtitle: formValues.title, fcmbody: formValues.content})
            .then(result => {
                console.log("serverFCM success: ", result);
            })
            .catch(error => {
                console.log("serverFCM error: ", error);
            })

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
       
        setFormValues({ ...initFormValues }); // clear formValues to initial values
    }

    useEffect(() => {
        const getUserData = async () => {
            setUserData(null);
            const ref = doc(db, "app_admin", user.email);   // get user's info from "app_admin" collection

            try {
                const docSnap = await getDoc(ref);
                docSnap.exists && setUserData(docSnap.data());
            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: `Get doc error: ${error}`,
                    icon: 'error',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
            }
        }

        if (user && user.email) {
            getUserData();
        }
        else setUserData(null); // not login yet

    }, [user])

    if (!user || !(user.email)) {
        return (
            <div className="eventstats">
                <div className="eventstats-title">
                    Send FCM
                </div>
                <div className="eventstats-text-container">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") {
        return (
            <div className="eventstats">
                <div className="eventstats-title">
                    Send FCM
                </div>
                <div className="eventstats-text-container">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    if (userData.role === "admin") {  // this user has right to update records
        return (
            <div className="event_fcm">
                <div className="event_fcm-title">
                    Send Notification
                </div>
                <div className="event_fcm-content">
                    This function can send push notification to all registered users who do not block notifications. <br />
                    All items with * are required.
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="event_fcm-formInput">
                            <label htmlFor="title">Title*</label>
                            <input type="text" name="title" id="title" maxLength='100' pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.title} required onChange={onChange} />
                            <span>The title of this notification. <br />Shall be 5-100 characters without any special character</span>
                        </div>
                        <div className="event_fcm-formInput">
                            <label htmlFor="content">Content*</label>
                            <textarea name="content" id="content" rows="5" maxLength="1024" value={formValues.content} onChange={onChange} />
                            <span>The content of this notification. <br />Max length 1024 characters</span>
                        </div>
                        <button>Send</button>
                        <Link to="/ibadmin">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Eventfcm