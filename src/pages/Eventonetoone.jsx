import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, writeBatch, increment } from 'firebase/firestore';
import Swal from 'sweetalert2';
import "./Eventonetoone.css";
import { Link } from 'react-router-dom';

const Eventonetoone = () => {
    const { user, memberIndex } = UserAuth();
    const [userData, setUserData] = useState();

    const initFormValues = {
        childname: "",          // name of the child who joined this one to one session 
        servicehour: 0,         // the service hour of this one to one session
        date: "",
        location: "",
        activity: "",
    };
    const [formValues, setFormValues] = useState(initFormValues);
    // const [children, setChildren] = useState([]);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("formValues: ", formValues);
        let databaseValues = formValues;    // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh

        let docID = "";
        (memberIndex === 0) ?
            docID = user.email
            :
            docID = user.email + "_" + memberIndex;

        try {
            await saveOneRecord(databaseValues, docID);
            Swal.fire({
                title: 'Success',
                text: 'Service record added',
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
    };

    const saveOneRecord = async (databaseValues, email) => {
        const random10000 = Math.floor(Math.random() * 10000);  // get a random integer from 0 to 9999
        const serviceId = databaseValues.date + "_OneToOne_" + random10000;  // add a random number to avoid firebase error in case two or more service hour entries are added for the date
        const serviceValues = {
            eventname: "1 on 1",
            eventtime: new Date(databaseValues.date),
            eventlocation: databaseValues.location,
            activityname: databaseValues.activity + " : " + databaseValues.childname,
            duration: databaseValues.servicehour,
        };
        const currentTime = new Date().getTime();

        const batch = writeBatch(db);   // use batch write to do 2 updates in a batch, to avoid mis-aligned numbers between total servicehour and individual servicehours
        const serviceRef = doc(db, "users", email, "services", serviceId);
        batch.set(serviceRef, serviceValues);   // add one document to services collection under the user
        const totalRef = doc(db, "users", email);
        batch.update(totalRef,
            {
                servicehour: increment(databaseValues.servicehour),  // increase the total servicehour under the user
                updatetime: currentTime,                        // set updatetime to current time
            });

        try {
            await batch.commit();
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Set user service hour error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            setUserData(null);

            let docID = "";
            (memberIndex === 0) ?
                docID = user.email
                :
                docID = user.email + "_" + memberIndex;

            const ref = doc(db, "users", docID);
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

        // const getChildren = async () => {
        //     const q = query(collection(db, "users"), where("role", "==", "Autistic Child"), orderBy("name"));
        //     try {
        //         const data = await getDocs(q);
        //         setChildren(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        //     } catch (error) {
        //         console.log(error);
        //         Swal.fire({
        //             title: 'Error',
        //             text: `Get doc error: ${error}`,
        //             icon: 'error',
        //             iconColor: '#A5C727',
        //             confirmButtonText: 'OK',
        //             confirmButtonColor: '#A5C727'
        //         });
        //     }
        // }

        if (user && user.email) {
            getUserData();
            // getChildren();
        } else {
            setUserData(null);
        }

    }, [user, memberIndex])


    if (!user || !(user.email)) {
        return (
            <div className="event_onetoone">
                <div className="event_onetoone-title">
                    Record 1 on 1 Service Hours
                </div>
                <div className="event_onetoone-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "Volunteer") {
        return (
            <div className="event_onetoone">
                <div className="event_onetoone-title">
                    Record 1 on 1 Service Hours
                </div>
                <div className="event_onetoone-content">
                    <p>Only registered volunteer can use this page!</p>
                </div>
            </div>
        )
    }


    if (userData.role === "Volunteer") {  // this user has right to input an one to one record
        return (
            <div className="event_onetoone">
                <div className="event_onetoone-title">
                    Record 1 on 1 Service Hours
                </div>
                <div className="event_onetoone-content-left">
                    This page is intended <b>for volunteers to record their 1 on 1 activities</b>.<br/>
                    Please note that this page <b>is NOT for scheduling 1 on 1 activities</b>. <br/>
                    If you are a volunteer looking to pair with a child or a child looking to set up a 1 on 1 with a volunteer, please <Link to="/contact"><b>contact</b></Link> us. <br/>
                    We will do our best to facilitate your request.
                </div>
                <div className="event_onetoone-content">
                    <form onSubmit={handleSubmit}>
                        <div className="event_onetoone-formInput">
                            <label htmlFor="activity">Activity*</label>
                            <input type="text" name="activity" id="activity" maxLength='50' value={formValues.activity} pattern="[A-Za-z0-9,_\-\s]{5,50}" required onChange={onChange} />
                            <span>Brief description of this 1 on 1 activity.<br />Shall be 5-50 characters with limited special characters</span>
                        </div>
                        <div className="event_onetoone-formInput">
                            <label htmlFor="date">Date*</label>
                            <input type="date" name="date" id="date" value={formValues.date} required onChange={onChange} />
                            <span>The date of this 1 on 1 activity</span>
                        </div>
                        <div className="event_onetoone-formInput">
                            <label htmlFor="location">Location*</label>
                            <input type="text" name="location" id="location" pattern="[A-Za-z0-9,_\-\s]{5,50}" value={formValues.location} required onChange={onChange} />
                            <span>The location of this 1 on 1 activity. <br />If it was an online session, then input "Virtual". <br />Shall be 5-50 characters with limited special characters</span>
                        </div>
                        <div className="event_onetoone-formInput">
                            <label htmlFor="childname">Child Name*</label>
                            {/* <select value={formValues.childname} name="childname" id="childname" required onChange={onChange}>
                                <option value=""></option>
                                {children && children.map((child, ckey) => {
                                    return (
                                        <option value={child.name + " : " + child.email} key={ckey}>{child.name + " : " + child.email}</option>
                                    )
                                })}
                            </select> */}
                            <input type="text" name="childname" id="childname" pattern="[A-Za-z0-9\s]{5,50}" value={formValues.childname} required onChange={onChange} />
                            <span>The name of the child in this 1 on 1 activity. <br />Shall be 5-50 characters without special character</span>
                        </div>
                        <div className="event_onetoone-formInput">
                            <label htmlFor="servicehour">Service Hour*</label>
                            <select value={formValues.servicehour} name="servicehour" id="servicehour" required onChange={onChange}>
                                <option value=""></option>
                                <option value="30">0.5</option>
                                <option value="45">0.75</option>
                                <option value="60">1.0</option>
                                <option value="75">1.25</option>
                                <option value="90">1.5</option>
                                <option value="105">1.75</option>
                                <option value="120">2</option>
                                <option value="150">2.5</option>
                                <option value="180">3</option>
                                <option value="210">3.5</option>
                                <option value="240">4</option>
                                <option value="270">4.5</option>
                                <option value="300">5</option>
                                <option value="360">6</option>
                                <option value="420">7</option>
                                <option value="480">8</option>
                            </select>
                            <span>The service hours of this 1 on 1 activity. <br/>Minimum: 0.5 hours; Maximum: 8 hours.</span>
                        </div>

                        <button>Submit</button>&nbsp;&nbsp;<Link to="/">Cancel</Link>
                    </form>
                </div>
            </div>

        )
    }
}

export default Eventonetoone