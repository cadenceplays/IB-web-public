import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, query, orderBy, doc, getDoc, getDocs, where } from 'firebase/firestore';
import Swal from 'sweetalert2';
import "./Eventprofile.css";
import { Link } from 'react-router-dom';
import logo from '../assets/email_logo.png';

const Eventprofile = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [profiles, setProfiles] = useState([]);

    const eventprofileTextStyle = [
        "eventprofile-text-style-1",
        "eventprofile-text-style-2",
    ]

    const showEmail = (email) => {
        Swal.fire({
            text: email,
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5C727'
        });
    }

    useEffect(() => {
        const getProfiles = async () => {
            const q = query(collection(db, "users"), where("role", "in", ["Volunteer", "Autistic Child"]), orderBy("name"));
            try {
                const data = await getDocs(q);
                data.docs && setProfiles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            getProfiles();
        }
        else setUserData(null); // not login yet

    }, [user])



    if (!user || !(user.email)) {
        return (
            <div className="eventprofile">
                <div className="eventprofile-title">
                    Statistics of Users' Profile
                </div>
                <div className="eventprofile-text-container">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") {
        return (
            <div className="eventprofile">
                <div className="eventprofile-title">
                    Statistics of Users' Profile
                </div>
                <div className="eventprofile-text-container">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    if (userData.role === "admin") {  // this user has right to update records
        return (
            <div className="eventprofile">
                <div className="eventprofile-title">
                    Statistics of Users' Profile
                </div>
                <div className="eventprofile-text-container">
                    <div className={eventprofileTextStyle[1]}>
                        <div className="eventprofile-user">
                            <div className="eventprofile-text-title">
                                #
                            </div>
                            <div className="eventprofile-text-title">
                                Name
                            </div>
                            <div className="eventprofile-text-title">
                                Gender
                            </div>
                            <div className="eventprofile-text-title">
                                Grade
                            </div>
                            <div className="eventprofile-text-title">
                                School
                            </div>
                            <div className="eventprofile-text-title">
                                Role
                            </div>
                            <div className="eventprofile-text-title">
                                Phone
                            </div>                            
                            <div className="eventprofile-text-title">
                                Email
                            </div>
                            <div className="eventprofile-text-title">
                                Waiver Signed
                            </div>
                            <div className="eventprofile-text-title">
                                Training Signed
                            </div>
                            <div className="eventprofile-text-title">
                                Interest
                            </div>
                            <div className="eventprofile-text-title">
                                Availability
                            </div>
                        </div>
                    </div>
                    {profiles.map((profile, key) => {
                        return (
                            <div className={(key % 2 === 0) ? eventprofileTextStyle[0] : eventprofileTextStyle[1]} key={key}>
                                <div className="eventprofile-user">
                                    <div className="eventprofile-text">
                                        {key + 1}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.name}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.gender}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.grade}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.school}
                                    </div>
                                    <div className="eventprofile-text">
                                        {(profile.role === "Volunteer")? "V" : "C"}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.phone}
                                    </div>
                                    <div className="eventprofile-text">
                                        <img src={logo} alt={profile.email} title={profile.email} onClick={() => showEmail(profile.email)} />
                                    </div>
                                    <div className="eventprofile-text">
                                        {(profile.waivercheck) ? "Y" : "N"}
                                    </div>
                                    <div className="eventprofile-text">
                                        {(profile.role === "Volunteer")? ((profile.trainingcheck) ? "Y" : "N") : "-"}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.interest}
                                    </div>
                                    <div className="eventprofile-text">
                                        {profile.availability}
                                    </div>
                                </div>
                            </div>
                        )

                    })}
                </div>

                <div className="eventprofile-record-text">
                    <p><Link to="/ibadmin">Return</Link></p>
                </div>
            </div>


        )
    }
}

export default Eventprofile