import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, query, orderBy, doc, getDoc, getDocs, where, updateDoc, writeBatch, increment } from 'firebase/firestore';
import { Button, Line } from '../components';
import Swal from 'sweetalert2';
import "./Eventservicehour.css";
import { Link } from 'react-router-dom';

const Eventservicehour = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [records, setRecords] = useState([]);
    const [volunteers, setVolunteers] = useState([]);
    const [activities, setActivities] = useState([]);
    const [durations, setDurations] = useState([]);     // to save duration info for each volunteer in each activity
    const [plusPosition, setPlusPosition] = useState([]);   // to save the activity# in which new volunteer is added
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
    ]
    const servicehourTextStyle = [
        "servicehour-text-style-1",
        "servicehour-text-style-2",
    ]

    const handleServiceHour = (key) => {
        console.log("handleServiceHour: ", records[key]);
        setEventKey(key);
        setActivities([]);
        setDurations([]);
        setPlusPosition([]);

        for (let i = 0; i < records[key].activities; i++) {
            setActivities(prevActivities => { return [...prevActivities, records[key][i + 101]] });
            let tempDurations = [];
            if(records[key][i + 101].type === "Volunteer" || records[key][i + 101].type === "All") {    // this is an activity for volunteer or for all
                for (let j = 0; j < records[key][i + 101].signup.length; j++) {
                    tempDurations[j] = 0;
                    for (let k = 0; k < volunteers.length; k++) {
                        if(volunteers[k].id === records[key][i + 101].signup[j].email) {    // only copy duration when this person is volunteer
                            tempDurations[j] = records[key].duration;
                            break;
                        }
                    };
                }  
            } else {    // this is NOT an activity for volunteer, set default duration to zero
                for (let j = 0; j < records[key][i + 101].signup.length; j++) 
                    tempDurations[j] = 0;
            }
            setDurations(prevDurations => { return [...prevDurations, tempDurations] });
        }
    }

    const saveServiceHour = (key) => {
        Swal.fire({
            title: 'Confirm to Save',
            text: 'The service hours of this activity/event CANNOT be modified after being saved.',
            showCancelButton: true,
            confirmButtonText: 'Save',
            confirmButtonColor: '#005D8B',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return saveSubmit(key)
            },
        })
    }

    const saveSubmit = async (key) => {

        activities.map((activity, akey) => {
            activity.signup.map((signupItem, vkey) => {
                console.log("saveSubmit: ", signupItem.email, ":", key, "-", akey, "-", vkey);  // "email" is not the real email, it's the ID of user's document (format: xxx@xxx.xxx_x)
                if(durations[akey][vkey] > 0) saveOneRecord(key, akey, durations[akey][vkey], signupItem.email);    // only update service hour if it's not zero
            });
            (plusPosition[akey] && plusPosition[akey].map((plusOne, pkey) => {
                console.log("saveSubmit: plus: ", plusOne.email, ":", key, "-", akey, "-", pkey);
                if(plusPosition[akey][pkey].duration > 0) saveOneRecord(key, akey, plusPosition[akey][pkey].duration, plusOne.email);   // only update service hour if it's not zero
            }));
        });

        const ref = doc(db, "event_upcomings", records[key].id);
        try {
            await updateDoc(ref, { servicehour: true });  // set to true means that the service hours of this activity/event has been processed
            Swal.fire({
                title: 'Success',
                text: `Service hours for event ${records[key].id} processed`,
                icon: 'success',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Update servicehour error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        } finally {
            setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
        }
    }

    const saveOneRecord = async (key, akey, durationValue, email) => {
        const random10000 = Math.floor(Math.random() * 10000);  // get a random integer from 0 to 9999
        const serviceId = records[key].id + "_" + activities[akey].id + "_" + random10000;  // add a random number to avoid firebase error in case two or more service hour entries are added for the same event and same activity
        const serviceValues = {
            eventname: records[key].name,
            eventtime: new Date(records[key].starttime),
            eventlocation: records[key].location,
            activityname: activities[akey].name,
            duration: durationValue,
        };
        const currentTime = new Date().getTime();

        const batch = writeBatch(db);   // use batch write to do 2 updates in a batch, to avoid mis-aligned numbers between total servicehour and individual servicehours
        const serviceRef = doc(db, "users", email, "services", serviceId);
        batch.set(serviceRef, serviceValues);   // add one document to services collection under the user
        const totalRef = doc(db, "users", email);
        batch.update(totalRef, 
            {
                servicehour: increment(durationValue),  // increase the total servicehour under the user
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

    const onDurationChange = (e, akey, vkey) => {
        let tempDurations = [...durations];
        tempDurations[akey][vkey] = e.target.value;
        setDurations(tempDurations);
    }

    const onPlusClick = (akey) => {
        let tempPlusPosition = [...plusPosition];
        if (!tempPlusPosition[akey]) tempPlusPosition[akey] = [{ email: "", duration: 0 }];
        else tempPlusPosition[akey].push({ email: "", duration: 0 });
        setPlusPosition(tempPlusPosition);
    }

    const onMinusClick = (akey) => {
        let tempPlusPosition = [...plusPosition];
        if (tempPlusPosition[akey] && tempPlusPosition[akey].length > 0) tempPlusPosition[akey].pop();
        setPlusPosition(tempPlusPosition);
    }

    const onPlusSelectChange = (e, akey, pkey) => {
        let tempPlusPosition = [...plusPosition];
        tempPlusPosition[akey][pkey].email = e.target.value;
        setPlusPosition(tempPlusPosition);
    }

    const onPlusDurationChange = (e, akey, pkey) => {
        let tempPlusPosition = [...plusPosition];
        tempPlusPosition[akey][pkey].duration = e.target.value;
        setPlusPosition(tempPlusPosition);
    }

    useEffect(() => {
        const getRecords = async () => {
            const q = query(collection(db, "event_upcomings"), where("servicehour", "==", false), orderBy("starttime"));
            try {
                const data = await getDocs(q);

                setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                data.docs.map((doc, key) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log("Eventservicehour: getRecords: ", key, " | ", doc.id, " => ", doc.data());
                })

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

        const getVolunteers = async () => {
            const q = query(collection(db, "users"), where("role", "==", "Volunteer"), orderBy("name"));
            try {
                const data = await getDocs(q);

                setVolunteers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                data.docs.map((doc, key) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log("Eventservicehour: getUsers: ", key, " | ", doc.id, " => ", doc.data());
                })

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
                console.log("event_signup: getUserData: userData: ", docSnap.data());
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

        setActivities([]);      // cleanup the useStates, as they might store the data for the previously processed event
        setDurations([]);
        setPlusPosition([]);
        setEventKey();

        if (user && user.email) {
            getUserData();
            getRecords();
            getVolunteers();
        }
        else setUserData(null); // not login yet

    }, [user, forceGetDocs])

    if (!user || !(user.email)) {
        return (
            <div className="servicehour">
                <div className="servicehour-title">
                    Validate service hours
                </div>
                <div className="servicehour-text-container">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") {
        return (
            <div className="servicehour">
                <div className="servicehour-title">
                    Validate service hours
                </div>
                <div className="servicehour-text-container">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    console.log("Eventservicehour: activities: ", activities);
    console.log("Eventservicehour: durations:  ", durations);
    console.log("Eventservicehour: volunteers: ", volunteers);
    console.log("Eventservicehour: plusPosition: ", plusPosition);

    if (userData.role === "admin") {  // this user has right to update records
        return (
            <div className="servicehour">
                <div className="servicehour-title">
                    Validate service hours
                </div>
                <div className="servicehour-text-container">
                    {records.map((record, key) => {

                        const startDateTimeValue = record.starttime.split("T");
                        const startDateValue = startDateTimeValue[0].split("-");
                        const endDateTimeValue = record.endtime.split("T");
                        const endDateValue = endDateTimeValue[0].split("-");


                        return (
                            <div className={(key % 2 === 0) ? servicehourTextStyle[0] : servicehourTextStyle[1]} key={key}>
                                <div className="servicehour-event">
                                    <div className="servicehour-text">
                                        <div className="servicehour-text-title">
                                            {key + 1}. {record.name} <br />
                                        </div>
                                        <p><b>
                                            {(monthConversion[Number(startDateValue[1])] + " " + startDateValue[2] + ", " + startDateValue[0] + " " + startDateTimeValue[1] + " - ")}
                                            {((endDateValue[1] !== startDateValue[1]) || (endDateValue[2] !== startDateValue[2])) ? (monthConversion[Number(endDateValue[1])] + " " + endDateValue[2] + ", " + endDateValue[0] + " " + endDateTimeValue[1]) : (endDateTimeValue[1])} <br />
                                            {record.location} <br />
                                        </b></p>
                                    </div>
                                    <div className="servicehour-button">
                                        {(key !== eventKey) &&  // don't show this button if currently handling this activity/event
                                            <Button type="button blueButton" text="Handle" onClick={() => handleServiceHour(key)} />
                                        }
                                    </div>
                                </div>

                                {(key === eventKey) && activities && activities.map((activity, akey) => {
                                    return (
                                        <div key={akey}>
                                            <Line color="--lightgrey-color" width="100%" />
                                            <div className="servicehour-record">
                                                <div className="servicehour-record-text">
                                                    <b>{activity.name}<br/>(For {activity.type})</b>
                                                </div>
                                                <div className="servicehour-button">
                                                    {(plusPosition[akey] && plusPosition[akey].length > 0) &&
                                                        <Button type="button whiteButton" text="&nbsp;&nbsp;-&nbsp;&nbsp;" onClick={() => onMinusClick(akey)} />
                                                    }
                                                    <Button type="button whiteButton" text="&nbsp;&nbsp;+&nbsp;&nbsp;" onClick={() => onPlusClick(akey)} />
                                                </div>
                                            </div>
                                            {activity.signup && activity.signup.map((signupitem, vkey) => {
                                                return (
                                                    <div className="servicehour-record" key={vkey}>
                                                        <div className="servicehour-record-text">
                                                            {signupitem.name} ({signupitem.email})
                                                        </div>
                                                        <div className="servicehour-button">
                                                            <input type="number" value={durations[akey][vkey]} onChange={(e) => onDurationChange(e, akey, vkey)} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            {plusPosition[akey] && plusPosition[akey].map((plusOne, pkey) => {
                                                return (
                                                    <div className="servicehour-record" key={pkey}>
                                                        <div className="servicehour-record-text">
                                                            <select value={plusOne.email} onChange={(e) => onPlusSelectChange(e, akey, pkey)}>
                                                                <option value=""></option>
                                                                {volunteers && volunteers.map((volunteer, vkey) => {
                                                                    return (
                                                                        <option value={volunteer.id} key={vkey}>{volunteer.name} ({volunteer.id})</option>
                                                                    )
                                                                })}
                                                            </select>
                                                        </div>
                                                        <div className="servicehour-button">
                                                            <input type="number" value={plusOne.duration} onChange={(e) => onPlusDurationChange(e, akey, pkey)} />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                                {(key === eventKey) && activities &&
                                    <div className="servicehour-button">
                                        <Button type="button blueButton" text="&nbsp;&nbsp;Save&nbsp;&nbsp;" onClick={() => saveServiceHour(key)} />
                                    </div>
                                }


                            </div>
                        )

                    })}
                </div>
                <div className="servicehour-record-text">
                    <p><Link to="/ibadmin">Cancel</Link></p>
                </div>
            </div>
        )
    }
}

export default Eventservicehour