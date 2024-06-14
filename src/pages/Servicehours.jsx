import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import "./Servicehours.css";
import { RiArrowLeftLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Servicehours = () => {
    const { user, memberIndex } = UserAuth();
    const [records, setRecords] = useState([]);

    const serviceTextStyle = [
        "service-text-style-1",
        "service-text-style-2",
    ]

    useEffect(() => {
        const getRecords = async () => {
            let docID = "";
            (memberIndex === 0)? 
                docID = user.email 
                :
                docID = user.email + "_" + memberIndex;
             
            const ref = collection(db, "users", docID, "services");
            try {
                const data = await getDocs(ref);

                setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                data.docs.map((doc, key) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log("Servicehours: getRecords: ", key, " | ", doc.id, " => ", doc.data());
                })

            } catch (error) {
                console.log(error);
                Swal.fire({
                    title: 'Error',
                    text: `Get docs error: ${error}`,
                    icon: 'error',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
            }
        }

        if (user && user.email) {
            getRecords();
        } else {
            setRecords([]);
        }

    }, [user, memberIndex])

    if (!user || !(user.email)) {
        return (
            <div className="service">
                <div className="service-title">
                    Service hours
                </div>
                <div className="service-text-container">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    }

    console.log("Servicehours: records: ", records);
    let totalHours = 0;

    if (records && records.length > 0) {
        return (
            <div className="service">
                <div className="service-title">
                    Service hours
                </div>
                <div className="service-text-container">
                    <div className={serviceTextStyle[1]}>
                        <div className="service-text">
                            <div><b>Hours</b></div>
                            <div><b>Date<br/>YYYY-MM-DD</b></div>
                            <div><b>Location</b></div>
                            <div><b>Event (Activity)</b></div>
                        </div>
                    </div>
                    {records.map((record, key) => {
                        totalHours = totalHours + record.duration / 60;
                        return (
                            <div className={(key % 2 === 0) ? serviceTextStyle[0] : serviceTextStyle[1]} key={key}>
                                <div className="service-text">
                                    <div>
                                        {(Math.round(record.duration / 60 * 100) / 100).toFixed(2)}
                                    </div>
                                    <div>
                                        {new Date(record.eventtime.seconds * 1000).toISOString().slice(0,10)}
                                    </div>
                                    <div>
                                        {record.eventlocation}
                                    </div>
                                    <div>
                                        {record.eventname} ({record.activityname})
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={(records.length % 2 === 0) ? serviceTextStyle[0] : serviceTextStyle[1]}>
                        <div className="service-text">
                            <div>
                                <b>{(Math.round(totalHours * 100) / 100).toFixed(2)}</b>
                            </div>
                            <div> <RiArrowLeftLine /> <b>Total hours</b></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="service">
                <div className="service-title">
                    Service hours
                </div>
                <div className="service-text-container">
                    No service hour yet!
                </div>
            </div>
        )
    }
}

export default Servicehours