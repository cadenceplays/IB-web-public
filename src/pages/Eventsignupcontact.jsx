import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, getDocs, addDoc, collection, query, orderBy, limit } from "firebase/firestore";
import "./Eventsignupmod.css";
import "./Eventsignupcontact.css";
import Swal from 'sweetalert2';
import { Button, Line } from '../components';
import { Link } from 'react-router-dom';

const Eventsignupcontact = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [records, setRecords] = useState([]);
    const [eventKey, setEventKey] = useState();     // to save the event# currently is working on
    const [forceGetDocs, setForceGetDocs] = useState(0);

    const monthConversion = [
        "", // this is [0], no use
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];

    const upcomingeventsTextStyle = [
        "upcomingevents_mod-text-style-1",
        "upcomingevents_mod-text-style-2",
    ];

    const handleEvent = (key) => {
        setEventKey(key);
    }

    const cancelHandle = () => {
        setEventKey();
    }


    useEffect(() => {

        const getUserData = async () => {
            cancelHandle(); // another user signed in, update the useState to initial values
            setUserData(null);
            const ref = doc(db, "app_admin", user.email);   // get user's info from "app_admin" collection

            try {
                const docSnap = await getDoc(ref);
                docSnap.exists && setUserData(docSnap.data());
                console.log("event_signup_mod: getUserData: userData: ", docSnap.data());
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

        const getUpcomings = async () => {
            const q = query(collection(db, "event_upcomings"), orderBy("starttime", "desc"), limit(200));
            try {
                const data = await getDocs(q);
                setRecords(data.docs.toReversed().map((doc) => ({ ...doc.data(), id: doc.id })));   // reverse the array to sort asc of starttime
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
        }

        if (user && user.email) {
            getUserData();
            getUpcomings();
        }
        else setUserData(null); // not login yet
    }, [user, forceGetDocs])



    if (!user || !(user.email)) {
        return (
            <div className="event_signup_mod">
                <div className="event_signup_mod-title">
                    Modify or Cancel an upcoming activity/event
                </div>
                <div className="event_signup_mod-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") {
        return (
            <div className="event_signup_mod">
                <div className="event_signup_mod-title">
                    Modify or Cancel an upcoming activity/event
                </div>
                <div className="event_signup_mod-content">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }


    if (userData.role === "admin") {
        let eventIndex = 0;     // the index number of each showing event, starts from 1; The key of records array cannot be used as index, as the past events in records won't be shown

        return (
            <div className="event_signup_mod">
                <div className="event_signup_mod-title">
                    Get the contact list of an upcoming activity/event
                </div>
                <div className="event_signup_mod-content">
                    Please select the activity/event to view the contact list
                </div>
                <div>

                    {records.map((record, key) => {

                        const startDateTimeValue = record.starttime.split("T");
                        const startDateValue = startDateTimeValue[0].split("-");
                        const endDateTimeValue = record.endtime.split("T");
                        const endDateValue = endDateTimeValue[0].split("-");

                        const endDate = new Date(record.endtime);
                        const planedDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);     // shift start time to 24 hours later to make the sign up open 1 day longer
                        const nowDate = new Date();
                        
                        let activities = [];
                        for (let i = 0; i < record.activities; i++) {
                            activities[i] = record[i + 101];
                        }

                        if (planedDate >= nowDate) {   // only show events with planedDate no earlier than today
                            eventIndex++;
                            return (
                                <>
                                    {(key !== eventKey) &&  // eventKey indicate the event which is currently handled by admin
                                        <div className={(eventIndex % 2 === 0) ? upcomingeventsTextStyle[0] : upcomingeventsTextStyle[1]} key={key} id={record.id}>
                                            <div className="upcomingevents_mod-text">
                                                <div className="upcomingevents_mod-text-title">
                                                    {eventIndex}. {record.name}<br />
                                                </div>
                                                <p><b>
                                                    Type: {record.type} <br />
                                                    {(monthConversion[Number(startDateValue[1])] + " " + startDateValue[2] + ", " + startDateValue[0] + " " + startDateTimeValue[1] + " - ")}
                                                    {((endDateValue[1] !== startDateValue[1]) || (endDateValue[2] !== startDateValue[2])) ? (monthConversion[Number(endDateValue[1])] + " " + endDateValue[2] + ", " + endDateValue[0] + " " + endDateTimeValue[1]) : (endDateTimeValue[1])} <br />
                                                    {record.location} <br />
                                                </b></p>
                                                <p>
                                                    {record.description}
                                                </p>
                                            </div>
                                            <div className="upcomingevents_mod-text">
                                                {activities.map((activity, akey) => {
                                                    return (
                                                        <div key={akey}>
                                                            <Line color="--blue-color" width="100%" />
                                                            <div className="upcomingevents_mod-activity-container">
                                                                <div className="upcomingevents_mod-activity">
                                                                    <div className="upcomingevents_mod-activity-info">
                                                                        <b>{activity.name}</b> <br />
                                                                        {(activity.type==="Autistic Child")? <Button type="button smallButton" text="Child" /> : <Button type="button smallButton" text={activity.type} />}
                                                                        
                                                                        {activity.signup.length} of {activity.maxs} slots used<br />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="upcomingevents_mod-slider">
                                                <Button type="button blueButton" text="View" onClick={() => handleEvent(key)} />
                                            </div>
                                            <div className="upcomingevents_mod-blank">  {/*this is a spacer (for better display) on mobile screen*/}
                                                <p></p>
                                            </div>
                                        </div>
                                    }
                                    {(key === eventKey) &&  // this is the event is currently handled by admin

                                        <div className={(eventIndex % 2 === 0) ? upcomingeventsTextStyle[0] : upcomingeventsTextStyle[1]} key={key} id={record.id}>
                                            <div className="upcomingevents_mod-text">
                                                <div className="upcomingevents_mod-text-title">
                                                    {eventIndex}. {record.name}<br />
                                                </div>
                                                <p><b>
                                                    Type: {record.type} <br />
                                                    {(monthConversion[Number(startDateValue[1])] + " " + startDateValue[2] + ", " + startDateValue[0] + " " + startDateTimeValue[1] + " - ")}
                                                    {((endDateValue[1] !== startDateValue[1]) || (endDateValue[2] !== startDateValue[2])) ? (monthConversion[Number(endDateValue[1])] + " " + endDateValue[2] + ", " + endDateValue[0] + " " + endDateTimeValue[1]) : (endDateTimeValue[1])} <br />
                                                    {record.location} <br />
                                                </b></p>
                                                <p>
                                                    {record.description}
                                                </p>
                                            </div>
                                            <div className="upcomingevents_mod-text">
                                                {activities.map((activity, akey) => {
                                                    return (
                                                        <div key={akey}>
                                                            <Line color="--blue-color" width="100%" />
                                                            <div className="upcomingevents_contact-container">
                                                                <table className="upcomingevents_contact-activity">
                                                                        <b>{activity.name}</b> <br />
                                                                        {(activity.type==="Autistic Child")? <Button type="button smallButton" text="Child" /> : <Button type="button smallButton" text={activity.type} />}
                                                                        
                                                                        {activity.signup.map((signupinfo, skey) => {
                                                                            return(
                                                                                <tr className="upcomingevents_contact-list" key={skey}>
                                                                                    <td>{signupinfo.name}</td>
                                                                                    <td>{(signupinfo.email.slice(-2,-1) === "_")? signupinfo.email.slice(0, -2) : signupinfo.email}</td>
                                                                                    <td>{signupinfo.phone? signupinfo.phone : "N/A"}</td>
                                                                                </tr>
                                                                            )
                                                                        })}
                                                                    
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="upcomingevents_mod-slider">
                                                <Button type="button blueButton" text="Return" onClick={() => cancelHandle()} />
                                            </div>
                                            <div className="upcomingevents_mod-blank">  {/*this is a spacer (for better display) on mobile screen*/}
                                                <p></p>
                                            </div>
                                        </div>

                                    }
                                </>
                            )
                        }
                    })}

                </div>
            </div>
        )
    }
}

export default Eventsignupcontact