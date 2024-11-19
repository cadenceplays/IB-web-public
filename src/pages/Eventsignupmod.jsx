import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, getDocs, addDoc, collection, query, writeBatch, orderBy, limit } from "firebase/firestore";
import "./Eventsignupmod.css";
import Swal from 'sweetalert2';
import { Button, Line } from '../components';
import { Link } from 'react-router-dom';
import { getFunctions, httpsCallable } from "firebase/functions";

const Eventsignupmod = () => {
    const EMAIL_TO = "internationalbuddyweb@gmail.com";
    const BCC_TO = "conniehuang@msn.com";  //email of Cadence Liao
    const EMAIL_SUBJECT_PREFIX = "InternationalBuddy Activity Update: ";

    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [currentTime, setCurrentTime] = useState(new Date().toISOString());
    const [records, setRecords] = useState([]);
    const [eventKey, setEventKey] = useState();     // to save the event# currently is working on
    const [forceGetDocs, setForceGetDocs] = useState(0);

    const functions = getFunctions();
    const serverFCM = httpsCallable(functions, 'sendFCM');

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

    let databaseValues = {}; // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh

    const initFormValues = {
        name: "",
        starttime: "",
        endtime: "",
        location: "",
        duration: 0,
        description: "",
        id: "",     // this is the document id of this record
        reason: "", // the reason of this modification/cancellation
        sendemail: false,   // if send out email to users signed up this event/activity
        priority: 10,
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const initActivityValues = {
        name: "",   // name
        maxs: 1,    // max slots
        type: "",   // type
        id: 0,
        signup: [], // array of signup info {email: xxx, name: xxx, comment: xxx}
    }
    const [formActivities, setFormActivities] = useState([]);



    const handleEvent = (key) => {
        setEventKey(key);
        const selectedFormValues = {
            name: records[key].name,
            starttime: records[key].starttime,
            endtime: records[key].endtime,
            location: records[key].location,
            duration: records[key].duration,
            description: records[key].description,
            id: records[key].id,
            reason: "",
            sendemail: false,
            priority: records[key].priority,
        };
        setFormValues({ ...selectedFormValues });

        let tempFormActivities = [];
        for (let i = 101; i < 101 + records[key].activities; i++) {
            tempFormActivities.push(records[key][i]);
        }
        setFormActivities(tempFormActivities);
    }

    const cancelHandle = () => {
        setEventKey();
        setFormValues({ ...initFormValues });
        setFormActivities([]);
    }

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onChangeCheckbox = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    }

    const onActivityChange = (e, key) => {
        console.log("onActivityChange: ", key, "|", e.target.name, "|", e.target.value);
        const newActivities = formActivities.map((activity, index) => {
            if (index === key) {
                const targetProperty = e.target.name.substring(0, 4);  // the properties in activities only contain 4 characters (except "id" property). e.target.name is "name"+"key" format 
                return ({ ...activity, [targetProperty]: e.target.value });
            } else {
                return activity;
            }
        });
        setFormActivities(newActivities);
    }

    const handlePlusActivity = () => {
        const random100M = Math.floor(Math.random() * 100000000);  // get a random integer from 0 to 99,999,999
        let activityValues = initActivityValues;
        activityValues.id = random100M;
        setFormActivities([...formActivities, activityValues]);
    }

    const handleRemoveActivity = (id) => {
        setFormActivities(formActivities.filter(activity => activity.id !== id));
    }

    const handleSubmit = () => {
        // e.preventDefault();
        if(formValues.sendemail === false)
            Swal.fire({
                title: 'Confirm to Submit',
                text: 'The modification(s) you made will be saved.',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                confirmButtonColor: '#005D8B',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return saveSubmit()
                },
            })
        else 
            Swal.fire({
                title: 'Confirm to Submit',
                text: 'The modification(s) you made will be saved and an email will be sent to all users signed up this event/activity.',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                confirmButtonColor: '#005D8B',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return saveSubmit()
                },
            })
    }

    const saveSubmit =() => {
        databaseValues.name = formValues.name;
        databaseValues.starttime = formValues.starttime;
        databaseValues.endtime = formValues.endtime;
        databaseValues.location = formValues.location;
        databaseValues.duration = formValues.duration;
        databaseValues.description = formValues.description;
        databaseValues.email = user.email;
        databaseValues.uid = user.uid;
        databaseValues.createtime = currentTime;
        databaseValues.activities = formActivities.length;  // store the number of activities
        databaseValues.priority = Number(formValues.priority);
        // databaseValues.servicehour = false; // check if the service hours of this activity/event has been processed, default = false 
        // databaseValues.type = formValues.type;
        formActivities.map((activity, key) => {
            let akey = key + 101    // akey start from 101, 102, ...
            databaseValues[akey] = activity;
        });

        console.log("handleSubmit: databaseValues: ", databaseValues);
        updateRecord(databaseValues, formValues.id);

        cancelHandle(); // clear several state variables to initial values
        setCurrentTime(new Date().toISOString());
    };

    const updateRecord = async (databaseValues, documentID) => {
        const batch = writeBatch(db);

        try {
            const ref1 = doc(db, "event_upcomings", documentID);
            // batch.set(ref1, databaseValues);
            // if (databaseValues.type !== "special") { // Not "special" means that it is a weekly activity
            //     const ref2 = doc(db, "weekly_template", databaseValues.type);
            //     batch.update(ref2, {
            //         "link": documentID,
            //         "nextdate": databaseValues.starttime
            //     });
            // }
            batch.update(ref1, databaseValues);
            await batch.commit();

            if(formValues.sendemail) sendUpdateEmail();

            Swal.fire({
                title: 'Success',
                text: `Event ${documentID} updated`,
                icon: 'success',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Update upcoming activity/event error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        } finally {
            setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
        }
    }

    const sendUpdateEmail = () => {
        let msgContent = "";
        let fcmContent = "";
    
        if(formValues.reason) {
            msgContent = 
                "Dear IB family: <br/><br/><b>For the following reason: </b><br/>" + formValues.reason.replace(/(\r\n|\r|\n)/g, '<br/>') + 
                "<br/><br/><b>Below activity has been updated:</b><br/><br/>";
            fcmContent = 
                "Hi, the activity is updated because: " + formValues.reason + " Please check out details through IB website/app.";
        } else {
            msgContent = 
                "Dear IB family: <br/><br/><b>Below activity has been updated:</b><br/><br/>";
            fcmContent = 
                "Hi, the activity is updated. Please check out details through IB website/app";
        }

        if(formValues.name === records[eventKey].name) 
            msgContent += "<b>Name:</b> " + formValues.name + "<br/>";
        else
            msgContent += "<b>Name:</b> <s>" + records[eventKey].name + "</s> >>> <b>" + formValues.name + "</b><br/>";

        if(formValues.starttime === records[eventKey].starttime) 
            msgContent += "<b>Start time:</b> " + formValues.starttime + "<br/>";
        else
            msgContent += "<b>Start time:</b> <s>" + records[eventKey].starttime + "</s> >>> <b>" + formValues.starttime + "</b><br/>";
            
        if(formValues.endtime === records[eventKey].endtime) 
            msgContent += "<b>End time:</b> " + formValues.endtime + "<br/>";
        else
            msgContent += "<b>End time:</b> <s>" + records[eventKey].endtime + "</s> >>> <b>" + formValues.endtime + "</b><br/>";

        if(formValues.location === records[eventKey].location) 
            msgContent += "<b>Location:</b> " + formValues.location + "<br/>";
        else
            msgContent += "<b>Location:</b> <s>" + records[eventKey].location + "</s> >>> <b>" + formValues.location + "</b><br/>";
    
        if(formValues.description === records[eventKey].description) 
            msgContent += "<b>Description:</b> <br/>" + formValues.description.replace(/(\r\n|\r|\n)/g, '<br/>') + "<br/>";
        else
            msgContent += "<b>Description:</b> <br/><s>" + records[eventKey].description.replace(/(\r\n|\r|\n)/g, '<br/>') + "</s> <br/> >>> <br/> <b>" + formValues.description.replace(/(\r\n|\r|\n)/g, '<br/>') + "</b><br/>";

        for(let i=1; i<=formActivities.length || i<=records[eventKey].activities; i++) {    // we don't know whether the new or the old activity list is longer
            let activityID = 100 + i;
            if(i > records[eventKey].activities) { // new list go beyond the number of activities in database
                msgContent += "<b>Activity " + i + ": " + formActivities[i-1].name + " (" + formActivities[i-1].maxs + " slots)</b><br/>";
            } else if(i > formActivities.length) { // new list is shorter than the old list in database
                msgContent += "<s><b>Activity " + i + ":</b> " + records[eventKey][activityID].name + " (" + records[eventKey][activityID].maxs + " slots)</s><br/>"; 
            } else {  // within the range of both the new and the old, compare one by one
                if(formActivities[i-1] === records[eventKey][activityID]) 
                    msgContent += "<b>Activity " + i + ":</b> " + formActivities[i-1].name + " (" + formActivities[i-1].maxs + " slots)<br/>";
                else
                    msgContent += "<b>Activity " + i + ":</b> <s>" + records[eventKey][activityID].name + " (" + records[eventKey][activityID].maxs + " slots)</s> >>> <b>" + formActivities[i-1].name + " (" + formActivities[i-1].maxs + " slots)</b><br/>";
            }
        }

        msgContent += "<br/><a href=\"https://www.internationalbuddy.org/upcomingevents#" + records[eventKey].id + "\">Link to this activity</a>.";
        msgContent += "<br/><br/>Thanks,<br/>IB Web Admin";

        sendEmail(msgContent, fcmContent);
    };

    const sendEmail = async (msgContent, fcmContent) => {
        let emailValues = {
            to: "",
            bcc: [],
            message: {
                subject: "",
                html: "",
            },
        };

        // get the emails of the users who signed up this activity/event
        let emailList = [];
        emailList.push(BCC_TO);
        for (let i = 1; i <= records[eventKey].activities; i++) {
            let activityID = 100 + i;
            let numberSignedup = records[eventKey][activityID].signup.length;
            for (let j = 0; j < numberSignedup; j++) {
                let rawEmail = records[eventKey][activityID].signup[j].email;
                console.log("emailList, raw: ", rawEmail.slice(-2, -1));
                if (rawEmail.slice(-2, -1) === "_") emailList.push(rawEmail.slice(0, -2)); // if the user is not the first member of his/her family, the rawEmail has "_1" to "_4" at the end, need to remove these two characters
                else emailList.push(rawEmail);
            }
        }
        let uniqEmailList = [...new Set(emailList)];    // remove duplicated emails from the list
        console.log("emailList: ", uniqEmailList);

        emailValues.to = EMAIL_TO;
        emailValues.bcc = uniqEmailList;
        emailValues.message.subject = EMAIL_SUBJECT_PREFIX + formValues.name;
        emailValues.message.html = msgContent;

        try {
            await addDoc(collection(db, "mail"), emailValues);
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

        sendFcm(emailValues.message.subject, fcmContent, uniqEmailList);

    }

    const sendFcm = async (fcmTitle, fcmBody, emailList) => {
        const fcmList = [];

        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
                if(emailList.includes(doc.id) && doc.data().fcmtokens) {
                    for(let i=0; i<doc.data().fcmtokens.length; i++) {
                        if(doc.data().fcmtokens[i]) fcmList.push(doc.data().fcmtokens[i]);  // push to list as long as the token is not empty.
                    }
                }
            });
            console.log("Eventsignupmod: sendFcm: ", fcmList);

            serverFCM({tokenlist: fcmList, fcmtitle: fcmTitle, fcmbody: fcmBody})
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
    }

    const deleteEvent = () => {
        if(formValues.sendemail === false)
            Swal.fire({
                title: 'Confirm to Delete',
                text: 'This event/activity will be removed.',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#005D8B',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return deleteSubmit()
                },
            })
        else 
            Swal.fire({
                title: 'Confirm to Delete',
                text: 'This event/activity will be removed and an email will be sent to all users signed up this event/activity.',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#005D8B',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    return deleteSubmit()
                },
            })
    }

    const deleteSubmit = () => {
        deleteRecord(formValues.id, records[eventKey].type);

        cancelHandle(); // clear several state variables to initial values
        setCurrentTime(new Date().toISOString());
    }

    const deleteRecord = async(documentID, eventType) => {
        const batch = writeBatch(db);

        try {
            const ref1 = doc(db, "event_upcomings", documentID);
            batch.delete(ref1, databaseValues);

            if (eventType !== "special") { // Not "special" means that it is a weekly activity
                const ref2 = doc(db, "weekly_template", eventType);
                batch.update(ref2, {    // Clear the related items in weekly_template collection
                    "link": "",
                    "nextdate": "",
                });
            }

            await batch.commit();

            if(formValues.sendemail) sendDeleteEmail();

            Swal.fire({
                title: 'Success',
                text: `Event ${documentID} deleted`,
                icon: 'success',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Delete upcoming activity/event error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        } finally {
            setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
        }
    }

    const sendDeleteEmail = () => {
        let msgContent = "";
        let fcmContent = "";

        if(formValues.reason) {
            msgContent = 
                "Dear IB family: <br/><br/><b>For the following reason: </b><br/>" + formValues.reason.replace(/(\r\n|\r|\n)/g, '<br/>') + 
                "<br/><br/><b>Below activity has been CANCELLED:</b><br/><br/>";
            fcmContent = 
                "Hi, this activity @ " + records[eventKey].starttime + " is CANCELLED because: " + formValues.reason;
        } else {
            msgContent = 
                "Dear IB family: <br/><br/><b>Below activity has been CANCELLED:</b><br/><br/>";
            fcmContent = 
                "Hi, this activity @ " + records[eventKey].starttime + " is CANCELLED.";
        }

        msgContent += "<b>Name:</b> " + records[eventKey].name +"<br/>";
        msgContent += "<b>Start time:</b> " + records[eventKey].starttime + "<br/>";
        msgContent += "<b>End time:</b> " + records[eventKey].endtime + "<br/>";
        msgContent += "<b>Location:</b> " + records[eventKey].location + "<br/>";
        msgContent += "<b>Description:</b> <br/>" + records[eventKey].description.replace(/(\r\n|\r|\n)/g, '<br/>') + "<br/>";

        msgContent += "<br/><br/>Thanks,<br/>IB Web Admin"

        sendEmail(msgContent, fcmContent);
    }

    useEffect(() => {

        const getUserData = async () => {
            cancelHandle(); // another user signed in, update the useState to initial values
            setCurrentTime(new Date().toISOString());
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



    // console.log("event_signupmod: records: ", records);
    // console.log("event_signupmod: formValues: ", formValues);
    // console.log("event_signupmod: formActivities: ", formActivities);



    if (userData.role === "admin") {
        let eventIndex = 0;     // the index number of each showing event, starts from 1; The key of records array cannot be used as index, as the past events in records won't be shown

        return (
            <div className="event_signup_mod">
                <div className="event_signup_mod-title">
                    Modify or Cancel an upcoming activity/event
                </div>
                <div className="event_signup_mod-content">
                    Please select the activity/event to modify or cancel
                </div>
                <div>

                    {records.map((record, key) => {

                        const startDateTimeValue = record.starttime.split("T");
                        const startDateValue = startDateTimeValue[0].split("-");
                        const endDateTimeValue = record.endtime.split("T");
                        const endDateValue = endDateTimeValue[0].split("-");

                        const endDate = new Date(record.endtime);
                        const planedDate = new Date(endDate.getTime() + 24 * 60 * 60 * 1000);     // shift end time to 24 hours later to make the sign up open 1 day longer
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
                                                    const availableSlots = activity.maxs - activity.signup.length;
                                                    return (
                                                        <div key={akey}>
                                                            <Line color="--blue-color" width="100%" />
                                                            <div className="upcomingevents_mod-activity-container">
                                                                <div className="upcomingevents_mod-activity">
                                                                    <div className="upcomingevents_mod-activity-info">
                                                                        <b>{activity.name}</b> <br />
                                                                        {(activity.type==="Autistic Child")? <Button type="button smallButton" text="Child" /> : <Button type="button smallButton" text={activity.type} />}
                                                                        
                                                                        {availableSlots} of {activity.maxs} slots available<br />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <div className="upcomingevents_mod-slider">
                                                <Button type="button blueButton" text="Handle" onClick={() => handleEvent(key)} />
                                            </div>
                                            <div className="upcomingevents_mod-blank">  {/*this is a spacer (for better display) on mobile screen*/}
                                                <p></p>
                                            </div>
                                        </div>
                                    }
                                    {(key === eventKey) &&  // this is the event is currently handled by admin
                                        <div className={(eventIndex % 2 === 0) ? upcomingeventsTextStyle[0] : upcomingeventsTextStyle[1]} key={key} id={record.id}>
                                            {/* <form onSubmit={handleSubmit}> */}
                                            <form>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="reason">Reason</label>
                                                    <textarea name="reason" id="reason" rows="5" maxLength="1024" value={formValues.reason} onChange={onChange} />
                                                    <span>The reason of this modification/cancellation. (Optional) <br />Max length 1024 characters</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="ifemail">Send email</label>
                                                    <input type="checkbox" name="sendemail" id="sendemail" checked={formValues.sendemail} onChange={onChangeCheckbox} />
                                                    <span>Send out email to all users signed up this event/activity to notifiy them about this modification/cancellation? (Optional)</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label>Type</label>
                                                    <div>{record.type}</div>
                                                    <span></span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="name">Name*</label>
                                                    <input type="text" name="name" id="name" maxLength='100' pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.name} required onChange={onChange} />
                                                    <span>The name/title of this activity/event. <br />Shall be 5-100 characters without any special character</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="starttime">Start Time*</label>
                                                    <input type="datetime-local" name="starttime" id="starttime" value={formValues.starttime} required onChange={onChange} />
                                                    <span>The start time of this activity/event</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="endtime">End Time*</label>
                                                    <input type="datetime-local" name="endtime" id="endtime" value={formValues.endtime} required onChange={onChange} />
                                                    <span>The end time of this activity/event</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="duration">Duration</label>
                                                    <input type="number" name="duration" id="duration" min="0" max="9999" value={formValues.duration} required onChange={onChange} />
                                                    <span>(Optional) The duration of this activity/event in MINUTES. <br />Shall be a number between 0 to 9999</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="location">Location*</label>
                                                    <input type="text" name="location" id="location" pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.location} required onChange={onChange} />
                                                    <span>The location of this activity/event. <br />Shall be 5-100 characters without any special character</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="description">Description*</label>
                                                    <textarea name="description" id="description" rows="5" maxLength="1024" value={formValues.description} required onChange={onChange} />
                                                    <span>The description of this activity/event. <br />Max length 1024 characters</span>
                                                </div>
                                                <div className="event_signup_mod-formInput">
                                                    <label htmlFor="priority">Priority</label>
                                                    <input type="number" name="priority" id="priority" min="0" max="9999" value={formValues.priority} required onChange={onChange} />
                                                    <span>(Optional) The priority of this activity/event. Default is 10.<br />The activity/event with higher priority will be listed first.</span>
                                                </div>

                                                {formActivities.map((activity, key) => {
                                                    return (
                                                        <div key={key}>
                                                            <Line color="--lightgrey-color" width="100%" />
                                                            <div className="activityInput" >
                                                                <Button type="button greenButton" text="-" onClick={() => handleRemoveActivity(activity.id)} />
                                                                <div>
                                                                    <div className="event_signup_mod-formInput" >
                                                                        <label htmlFor={"nameactivity" + key}>Activity Name*</label>
                                                                        <input type="text" name={"nameactivity" + key} id={"nameactivity" + key} maxLength='100' pattern="[A-Za-z0-9\s,:\-\(\)]{5,100}" value={activity.name} required onChange={e => onActivityChange(e, key)} />
                                                                        <span>The name/title of this activity. <br />Shall be 5-100 characters with limited special characters <br />Only ,:-() are allowed</span>
                                                                    </div>
                                                                    <div className="event_signup_mod-formInput" >
                                                                        <label htmlFor={"maxslots" + key}>Max Slots*</label>
                                                                        <input type="number" name={"maxslots" + key} id={"maxslots" + key} min="1" value={activity.maxs} required onChange={e => onActivityChange(e, key)} />
                                                                        <span>The max available slots of this activity. <br />Shall be an integer no smaller than 1 <br /><b>{activity.signup.length} slots have been signed up.</b></span>
                                                                    </div>
                                                                    <div className="event_signup_mod-formInput" >
                                                                        <label htmlFor={"type" + key}>Type*</label>
                                                                        <div className="radioInput">
                                                                            <label><input type="radio" name={"type" + key} id={"type" + key} value="Volunteer" checked={activity.type === "Volunteer"} onChange={e => onActivityChange(e, key)} required /> Volunteer</label>
                                                                            <label><input type="radio" name={"type" + key} id={"type" + key} value="Autistic Child" checked={activity.type === "Autistic Child"} onChange={e => onActivityChange(e, key)} required /> Child</label>
                                                                            <label><input type="radio" name={"type" + key} id={"type" + key} value="All" checked={activity.type === "All"} onChange={e => onActivityChange(e, key)} required /> All</label>
                                                                        </div>
                                                                        <span>The sign up of this activity is targeted to which group, volunteers or children or both</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <div>
                                                    <Button type="button greenButton" text="+Activity" onClick={handlePlusActivity} />
                                                    <br/>
                                                </div>
                                                <Line color="--lightgrey-color" width="100%" />
                                                {/* <button>Submit</button> */}
                                                <div className="upcomingevents_mod-more">
                                                        <Button type="button greenButton" text="Submit" onClick={() => handleSubmit()} /> {/* Submit the modification(s) */}
                                                        <Button type="button greenButton" text="Delete" onClick={() => deleteEvent()} /> {/* Delete this event */}
                                                        <Button type="button blueButton" text="Return" onClick={() => cancelHandle()} /> {/* Set eventKey to blank to cancel the "handle" of this event*/}
                                                </div>
                                            {/* </form> */}
                                            </form>
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

export default Eventsignupmod