import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from "../context/Authcontext";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import './IBAdmin.css';

const IBAdmin = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();

    useEffect(() => {
        const getUserData = async () => {
            setUserData(null);
            const ref = doc(db, "app_admin", user.email);   // get user's info from "app_admin" collection
            try {
                const docSnap = await getDoc(ref);
                docSnap.exists&& setUserData(docSnap.data());
                console.log("Event_records: getUserData: userData: ", docSnap.data());
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
    
        if(user && user.email) getUserData();
    }, [user])

    if(!user || !(user.email)) {
        return (
            <div className="ibadmin">
                <div className="ibadmin-title">
                    Add event records
                </div>
                <div className="ibadmin-content">
                    Please <Link to="/login">sign in</Link> first!
                </div>
            </div>            
        )
    } else if(!userData || userData.role !== "admin") {
        return (
            <div className="ibadmin">
                <div className="ibadmin-title">
                    Add event records
                </div>
                <div className="ibadmin-content">
                    You have no right to use this page!
                </div>
            </div>            
        )
    }   

    return (
        <div className="ibadmin">
            <div className="ibadmin-title"> 
                Administration links
            </div>
            <div className="ibadmin-content">
                <li><Link to="/eventsignup">Create an upcoming activity/event (for sign up)</Link></li>
                <li><Link to="/eventsignupmod">Modify or cancel an upcoming activity/event</Link></li>
                <li><Link to="/eventsignupcontact">Show contact list of an upcoming activity/event</Link></li>
                <li><Link to="/eventrecords">Add an activity/event news</Link></li>
                <li><Link to="/eventservicehour">Validate service hours of volunteers for past activities/events</Link></li>
                <li><Link to="/eventstats">Show statistics of volunteers' service hours</Link></li>
                <li><Link to="/eventprofile">Show statistics of users' profile info</Link></li>
                <li><Link to="/eventspecialolympics">Show registrations of special olympics team</Link></li>
                <li><Link to="/eventfcm">Send notification to users</Link></li>
            </div>
        </div>
    )
}

export default IBAdmin