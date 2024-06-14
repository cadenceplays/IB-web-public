import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, query, orderBy, doc, getDoc, getDocs, where } from 'firebase/firestore';
import { Button, Line } from '../components';
import Swal from 'sweetalert2';
import "./Eventstats.css";
import { Link } from 'react-router-dom';

const Eventstats = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [volunteers, setVolunteers] = useState([]);
    const [serviceRecords, setServiceRecords] = useState([]);       // save the detailed service hour records
    const [plusKey, setPlusKey] = useState();       // save the #key of the plus button been clicked

    const eventstatsTextStyle = [
        "eventstats-text-style-1",
        "eventstats-text-style-2",
    ]

    const onPlusClick = (key) => {
        setPlusKey(key);
        getServiceRecords(volunteers[key].id);
    }

    const onMinusClick = () => {
        setPlusKey();
        setServiceRecords([]);
    }

    const getServiceRecords = async (email) => {    // actually not "email", but the document id of this user, format "xxx@xxx.xxx_x" 
        try {
            const data = await getDocs(collection(db, "users", email, "services"));
            data.docs && setServiceRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

    useEffect(() => {
        const getVolunteers = async () => {
            const q = query(collection(db, "users"), where("role", "==", "Volunteer"), orderBy("name"));
            try {
                const data = await getDocs(q);
                data.docs && setVolunteers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            getVolunteers();
        }
        else setUserData(null); // not login yet

    }, [user])

    // console.log("Eventstats: volunteers: ", volunteers);
    // console.log("Eventstats: plusKey: ", plusKey);
    // console.log("Eventstats: serviceRecords: ", serviceRecords);

    if (!user || !(user.email)) {
        return (
            <div className="eventstats">
                <div className="eventstats-title">
                    Statistics of Volunteers
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
                    Statistics of Volunteers
                </div>
                <div className="eventstats-text-container">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    if (userData.role === "admin") {  // this user has right to update records
        return (
            <div className="eventstats">
                <div className="eventstats-title">
                    Statistics of Volunteers
                </div>
                <div className="eventstats-text-container">
                    <div className={eventstatsTextStyle[1]}>
                        <div className="eventstats-user">
                            <div className="eventstats-text-title">
                                #
                            </div>
                            <div className="eventstats-text-title">
                                Name
                            </div>
                            <div className="eventstats-text-title">
                                Service Hours
                            </div>
                            <div></div>
                            <div className="eventstats-text-title">
                                Last Update<br/>YYYY-MM-DD
                            </div>
                            <div className="eventstats-text-title">
                                Email
                            </div>
                        </div>
                    </div>
                    {volunteers.map((volunteer, key) => {

                        return (
                            <div className={(key % 2 === 0) ? eventstatsTextStyle[0] : eventstatsTextStyle[1]} key={key}>
                                <div className="eventstats-user">
                                    <div className="eventstats-text">
                                        {key + 1}
                                    </div>
                                    <div className="eventstats-text">
                                        {volunteer.name}
                                    </div>
                                    <div className="eventstats-text">
                                        {(Math.round(volunteer.servicehour / 60 * 100) / 100).toFixed(2)}
                                    </div>
                                    <div className="eventstats-text">
                                        {(plusKey === key) ?
                                            <Button type="button whiteButton" text="&nbsp;-&nbsp;" onClick={onMinusClick} />      // clear plusKey (to undefined) once "-" button clicked
                                            :
                                            <Button type="button whiteButton" text="&nbsp;+&nbsp;" onClick={() => onPlusClick(key)} />  // set plusKey to key if "+" button clicked
                                        }
                                    </div>
                                    <div className="eventstats-text">
                                        {new Date(volunteer.updatetime).toISOString().slice(0,10)}
                                    </div>
                                    <div className="eventstats-text">
                                        {volunteer.email}
                                    </div>
                                </div>
                                {(plusKey === key) &&       // showing details for this user
                                    <div className="eventstats-detail-text">
                                        <div></div>
                                        <div>
                                            <b>Event (Activity)</b>
                                        </div>
                                        <div title="Service Hours">
                                            <b>S/H</b>
                                        </div>
                                        <div>
                                            <b>Date</b>
                                        </div>
                                        <div>
                                            <b>Location</b>
                                        </div>
                                    </div>
                                }
                                {(plusKey === key) &&       // showing details for this user
                                    serviceRecords.map((record, rkey) => {
                                        // totalHours = totalHours + record.duration / 60;
                                        let activityName = record.eventname + " (" + record.activityname + ")";
                                        if (activityName.length > 25) activityName = activityName.slice(0, 23) + "...";
                                        return (
                                            <>
                                                <Line color="--lightgrey-color" />
                                                <div className="eventstats-detail-text" key={rkey}>
                                                    <div></div>
                                                    <div title={record.eventname + " (" + record.activityname + ")"}>
                                                        {activityName}
                                                    </div>
                                                    <div>
                                                        {(Math.round(record.duration / 60 * 100) / 100).toFixed(2)}
                                                    </div>
                                                    <div>
                                                        {new Date(record.eventtime.seconds * 1000).toISOString().slice(0,10)}
                                                    </div>
                                                    <div title={record.eventlocation}>
                                                        {(record.eventlocation).length > 30 ? (record.eventlocation).slice(0, 28) + "..." : record.eventlocation}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        )

                    })}
                </div>

                <div className="eventstats-record-text">
                    <p><Link to="/ibadmin">Return</Link></p>
                </div>
            </div>


        )
    }
}

export default Eventstats