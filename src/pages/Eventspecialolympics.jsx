import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, query, orderBy, doc, getDoc, getDocs } from 'firebase/firestore';
import { Button } from '../components';
import Swal from 'sweetalert2';
import "./Eventspecialolympics.css";
import { Link } from 'react-router-dom';

const Eventspecialolympics = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [registrations, setRegistrations] = useState([]);
    const [profileRecord, setProfileRecord] = useState({});       // save the detailed service hour records
    const [plusKey, setPlusKey] = useState();       // save the #key of the plus button been clicked

    const eventspecialolympicsTextStyle = [
        "eventspecialolympics-text-style-1",
        "eventspecialolympics-text-style-2",
    ]

    const onPlusClick = (key) => {
        setPlusKey(key);
        getProfileRecord(registrations[key].id);
    }

    const onMinusClick = () => {
        setPlusKey();
        setProfileRecord({});
    }

    const getProfileRecord = async (email) => {    // actually not "email", but the document id of this user, format "xxx@xxx.xxx_x" 
        try {
            const docSnap = await getDoc(doc(db, "users", email));
            docSnap && setProfileRecord(docSnap.data());
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
        const getRegistrations = async () => {
            const q = query(collection(db, "specialolympics_team"), orderBy("lastname"));
            try {
                const data = await getDocs(q);
                data.docs && setRegistrations(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            getRegistrations();
        }
        else setUserData(null); // not login yet

    }, [user])


    if (!user || !(user.email)) {
        return (
            <div className="eventspecialolympics">
                <div className="eventspecialolympics-title">
                    Registrations of Special Olympics Team
                </div>
                <div className="eventspecialolympics-text-container">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") {
        return (
            <div className="eventspecialolympics">
                <div className="eventspecialolympics-title">
                    Registrations of Special Olympics Team
                </div>
                <div className="eventspecialolympics-text-container">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    if (userData.role === "admin") {  // this user has right to update records
        return (
            <div className="eventspecialolympics">
                <div className="eventspecialolympics-title">
                    Registrations of Special Olympics Team
                </div>
                <div className="eventspecialolympics-text-container">
                    <div className={eventspecialolympicsTextStyle[1]}>
                        <div className="eventspecialolympics-user">
                            <div className="eventspecialolympics-text-title">
                                #
                            </div>
                            <div></div>
                            <div className="eventspecialolympics-text-title">
                                Last Name
                            </div>
                            <div className="eventspecialolympics-text-title">
                                First Name
                            </div>
                            <div className="eventspecialolympics-text-title">
                                Preferred Name
                            </div>
                            <div className="eventspecialolympics-text-title">
                                Gender
                            </div>
                            <div className="eventspecialolympics-text-title">
                                Birthday
                            </div>
                            <div className="eventspecialolympics-text-title">
                                Medical Form
                            </div>
                        </div>
                    </div>
                    {registrations.map((reg, key) => {
                        return (
                            <div className={(key % 2 === 0) ? eventspecialolympicsTextStyle[0] : eventspecialolympicsTextStyle[1]} key={key}>
                                <div className="eventspecialolympics-user">
                                    <div className="eventspecialolympics-text">
                                        {key + 1}
                                    </div>
                                    <div className="eventspecialolympics-text">
                                        {(plusKey === key) ?
                                            <Button type="button whiteButton" text="&nbsp;-&nbsp;" onClick={onMinusClick} />      // clear plusKey (to undefined) once "-" button clicked
                                            :
                                            <Button type="button whiteButton" text="&nbsp;+&nbsp;" onClick={() => onPlusClick(key)} />  // set plusKey to key if "+" button clicked
                                        }
                                    </div>                                
                                    <div className="eventspecialolympics-text">
                                        {reg.lastname}
                                    </div>
                                    <div className="eventspecialolympics-text">
                                        {reg.firstname}
                                    </div>
                                    <div className="eventspecialolympics-text">
                                        {reg.preferredname}
                                    </div>                                    
                                    <div className="eventspecialolympics-text">
                                        {reg.gender}
                                    </div>
                                    <div className="eventspecialolympics-text">
                                        {reg.birthday}
                                    </div>
                                    <div className="eventspecialolympics-text">
                                        <a href={reg.medicalfileurl} target="_blank" rel="noopener">Open</a>
                                    </div>
                                </div>
                                {(plusKey === key) &&       // showing profile of this user
                                    <div className="eventspecialolympics-detail-text">
                                        <div></div>
                                        <div>
                                            <b>Name</b>
                                        </div>
                                        <div>{profileRecord.name}</div>
                                        <div></div>
                                        <div>
                                            <b>Grade</b>
                                        </div>
                                        <div>{profileRecord.grade}</div>
                                        <div></div>
                                        <div>
                                            <b>School</b>
                                        </div>
                                        <div>{profileRecord.school}</div>
                                        <div></div>
                                        <div>
                                            <b>Phone</b>
                                        </div>
                                        <div>{profileRecord.phone}</div>
                                        <div></div>
                                        <div>
                                            <b>Email</b>
                                        </div>
                                        <div>{profileRecord.email}</div>
                                        <div></div>
                                        <div>
                                            <b>Interest</b>
                                        </div>
                                        <div>{profileRecord.interest}</div>
                                        <div></div>
                                        <div>
                                            <b>Availability</b>
                                        </div>
                                        <div>{profileRecord.availability}</div>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>

                <div className="eventspecialolympics-record-text">
                    <p><Link to="/ibadmin">Return</Link></p>
                </div>
            </div>
        )
    }
}

export default Eventspecialolympics