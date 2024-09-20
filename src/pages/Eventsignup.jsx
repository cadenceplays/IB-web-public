import React, { useState, useEffect, useRef } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, getDocs, collection, where, query, writeBatch } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Eventsignup.css";
import Swal from 'sweetalert2';
import { Button, Line } from '../components';
import { Link } from 'react-router-dom';

const Eventsignup = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoNames, setPhotoNames] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date().toISOString());
    const inputFileRef = useRef(null);  // use to reset the <input file> field after uploading
    const [weeklyTemplate, setWeeklyTemplate] = useState([]);
    const [forceGetDocs, setForceGetDocs] = useState(0);

    const weekdayConversion = [
        "", // this is [0], no use
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "Ad Hoc",
    ];

    let databaseValues = {}; // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh
    databaseValues.photourls = []; // to store the urls of photos after uploading
    databaseValues.photonames = []; // to store the original filenames of photos after uploading

    const initFormValues = {
        name: "",
        starttime: "",
        endtime: "",
        location: "",
        duration: 0,
        description: "",
        photos: "",
        type: "-1",     // -1 means special (ad hoc) event; all weekly activities are put into "weeklyTemplate" array with index starting from zero
        priority: 10,
        uniquesignup: false,
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const initActivityValues = {
        name: "",   // name
        maxs: 1,    // max slots
        type: "",   // type
        id: 0,
        signup: [], // array of signup info {email: xxx, name: xxx, comment: xxx}
    }
    const [activities, setActivities] = useState([]);

    const initTemplateFormValues = {
        templatename: "",
        templatetime: "",
        templatelocation: "",
    }
    const [templateFormValues, setTemplateFormValues] = useState(initTemplateFormValues);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onChangeCheckbox = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    }

    const onTemplateChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value});
        if(e.target.value >= 0) {
            // console.log("Eventsignup: onTemplateChange: ", e.target.value, ": ", weeklyTemplate[e.target.value].id);
            setTemplateFormValues({
                templatename: weeklyTemplate[e.target.value].name, 
                templatetime: weeklyTemplate[e.target.value].time, 
                templatelocation: weeklyTemplate[e.target.value].location
            });
        } else {
            setTemplateFormValues({ ...initTemplateFormValues });
        }
    }

    const onTemplateModify = (e) => {
        setTemplateFormValues({...templateFormValues, [e.target.name]: e.target.value });
    }

    const onFileChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.files });
    };

    const onActivityChange = (e, key) => {
        console.log("onActivityChange: ", key, "|", e.target.name, "|", e.target.value);
        const newActivities = activities.map((activity, index) => {
            if(index === key) {
                const targetProperty = e.target.name.substring(0,4);  // the properties in activities only contain 4 characters (except "id" property). e.target.name is "name"+"key" format 
                return ({...activity, [targetProperty]: e.target.value });
            } else {
                return activity;
            }
        });
        setActivities(newActivities);
    }

    const handleUpload = (e) => {
        e.preventDefault();
        setPhotoUrls([]);   // clear array of photo URLs and Names before uploading
        setPhotoNames([]);

        if (formValues.photos.length > 1) {    // only allow uploading 1 image for each event
            Swal.fire({
                title: 'Warning',
                html: `You have chosen <b>${formValues.photos.length}</b> files. <br />Please select only <b>1</b> file.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }
        for (let i = 0; i < formValues.photos.length; i++) {    // check the size of files
            if (formValues.photos[i].size / 1024 > 1024) {
                Swal.fire({
                    title: 'Warning',
                    html: `File size cannot be larger than <b>1MB</b>. <br />Please reduce the size of file: <br /><b>${formValues.photos[i].name}</b>`,
                    icon: 'warning',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
                return;
            }
        }

        for (let i = 0; i < formValues.photos.length; i++) {
            const random10000 = Math.floor(Math.random() * 10000);  // get a random integer from 0 to 9999
            const filename = currentTime + "_" + i + "_" + random10000;
            uploadPhoto(formValues.photos[i], filename);
        }

    };

    const uploadPhoto = (file, filename) => {
        const storage = getStorage();

        const storageRef = ref(storage, 'event_upcomings/' + filename);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        Swal.fire({
                            title: 'Info',
                            text: 'Upload is paused',
                            icon: 'info',
                            iconColor: '#A5C727',
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#A5C727'
                        });
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                console.log("uploadPhoto: error: ", error.code);
                Swal.fire({
                    title: 'Error',
                    text: `Upload photo error: ${error.code}`,
                    icon: 'error',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });

            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    databaseValues.photourls = [...databaseValues.photourls, downloadURL];
                    databaseValues.photonames = [...databaseValues.photonames, file.name]; // file.name is the original file name in user's computer
                    setPhotoUrls(databaseValues.photourls);
                    setPhotoNames(databaseValues.photonames);
                    console.log('uploadPhoto: urls: ', databaseValues.photourls);
                });
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        databaseValues.name = formValues.name;
        databaseValues.starttime = formValues.starttime;
        databaseValues.endtime = formValues.endtime;
        databaseValues.location = formValues.location;
        databaseValues.duration = formValues.duration;
        databaseValues.description = formValues.description;
        databaseValues.email = user.email
        databaseValues.uid = user.uid
        databaseValues.createtime = currentTime
        databaseValues.photourls = photoUrls;  // after re-render, databaseValues has lost all the values
        databaseValues.photonames = photoNames;
        databaseValues.activities = activities.length;  // store the number of activities
        databaseValues.servicehour = false; // check if the service hours of this activity/event has been processed, default = false 
        databaseValues.type = (formValues.type === "-1")? "special" : weeklyTemplate[formValues.type].id;
        databaseValues.priority = Number(formValues.priority);   // default value of priority is 10; If an event has higher priority, it will be displayed at the beginning of upcoming event list
        databaseValues.uniquesignup = formValues.uniquesignup;
        activities.map((activity, key) => {
            let akey = key + 101    // akey start from 101, 102, ...
            databaseValues[akey] = activity;
        });

        console.log("handleSubmit: databaseValues: ", databaseValues);
        updateRecord(databaseValues);

        setFormValues({ ...initFormValues }); // clear formValues to initial values
        setTemplateFormValues({ ...initTemplateFormValues });
        setPhotoUrls([]);
        setPhotoNames([]);
        setActivities([]);
        setCurrentTime(new Date().toISOString());
        inputFileRef.current.value = null;  // clear the <input file> 
    };

    const updateRecord = async (databaseValues) => {
        const random10000 = Math.floor(Math.random() * 10000);  // get a random integer from 0 to 9999
        let eventName = databaseValues.name.replace(/[^a-zA-Z0-9]/g, '_');
        eventName = eventName.substring(0, 10);    // only use the first 10 characters
        const documentID = currentTime + "_" + eventName + "_" + random10000;
        const batch = writeBatch(db);

        try {
            const ref1 = doc(db, "event_upcomings", documentID);
            batch.set(ref1, databaseValues);
            if(databaseValues.type !== "special") { // Not "special" means that it is a weekly activity
                const ref2 = doc(db, "weekly_template", databaseValues.type);
                batch.update(ref2, {
                    "link": documentID,
                    "nextdate": databaseValues.starttime,
                    "name": templateFormValues.templatename,
                    "time": templateFormValues.templatetime,
                    "location": templateFormValues.templatelocation,
                });
            }
            await batch.commit();

            Swal.fire({
                title: 'Success',
                text: `Event ${documentID} created`,
                icon: 'success',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Create upcoming activity/event error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });

        } finally {
            setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
        }
    }

    const handlePlusActivity = () => {
        const random100000000 = Math.floor(Math.random() * 100000000);  // get a random integer from 0 to 99999999
        let activityValues = initActivityValues;
        activityValues.id = random100000000;
        setActivities([...activities, activityValues]);
    }

    const handleRemoveActivity = (id) => {
        console.log("Remove: ", id);
        setActivities(activities.filter(activity => activity.id !== id));
    }

    useEffect(() => {
        const getUserData = async () => {
            setFormValues({ ...initFormValues }); // another user signed in, update the useState to initial values
            setTemplateFormValues({ ...initTemplateFormValues });
            setPhotoUrls([]);
            setPhotoNames([]);
            setCurrentTime(new Date().toISOString());
            setUserData(null);
            // const ref = doc(db, "app_admin", user.email);   // since we don't check if user is admin anymore, replace this line with line below
            const ref = doc(db, "app_admin", user.email);   // one email may associate multiple members, but we only want to make sure it at least associates one, aka has at least one profile...

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

        const getWeeklyTemplate = async () => {
            const q = query(collection(db, "weekly_template"), where("active", "==", true));
            try {
                const data = await getDocs(q);
                setWeeklyTemplate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
            getWeeklyTemplate();
        }
        else setUserData(null); // not login yet
    }, [user, forceGetDocs])


    if (!user || !(user.email)) {
        return (
            <div className="event_signup">
                <div className="event_signup-title">
                    Create an activity/event sign up
                </div>
                <div className="event_signup-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (!userData || userData.role !== "admin") { 
        return (
            <div className="event_signup">
                <div className="event_signup-title">
                    Create an activity/event sign up
                </div>
                <div className="event_signup-content">
                    <p>You have no right to use this page!</p>
                </div>
            </div>
        )
    }

    // console.log("event_signup: formValues: ", formValues);
    // console.log("photoUrls: ", photoUrls);
    // console.log("Eventsignup: templateFormValues: ", templateFormValues);

    if (userData.role === "admin") {  

        return (
            <div className="event_signup">
                <div className="event_signup-title">
                    Create an activity/event sign up
                </div>
                <div className="event_signup-content">
                    Please provide activity/event information <br />
                    All items with * are required.
                </div>
                <div>
                    <form onSubmit={handleUpload}>
                        <div className="event_signup-formInput">
                            <label htmlFor="photos">Image</label>
                            <input ref={inputFileRef} type="file" name="photos" id="photos" accept="image/png, image/jpg, image/jpeg" onChange={onFileChange} />
                            <span>(Optional) Advertisement image of this activity/event. <br />Need to upload the image first before submit.<br />You can upload 1 image with 1MB max size</span>
                        </div>
                        <button>Upload</button>
                    </form>
                    {
                        photoUrls && photoUrls.map((photo, index) =>
                            <div key={index}><img src={photo} width="150" alt="uploaded" />{photoNames[index]}</div>
                        )
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="event_signup-formInput">
                            <label htmlFor="type">Type*</label>
                            <select name="type" id="type" value={formValues.type} required onChange={onTemplateChange}>
                                <option value="-1">Ad Hoc Event</option>
                                {weeklyTemplate.map((weeklyActivity, key) => (
                                    <option value={key} key={key}>Weekly: {weekdayConversion[weeklyActivity.weekday]}-{weeklyActivity.name}</option>
                                ))}
                            </select>
                            <span>The type this activity/event.</span>
                        </div>

                        {(formValues.type !== "-1") && (   // show template time/location info if this is a weekly activity
                            <div className="event_signup-formInput">
                                <label>Weekly Template</label>
                                <div className="event_signup-templateFormInput">
                                    <label>Name</label>
                                    <input type="text" name="templatename" id="templatename" maxLength='100' value={templateFormValues.templatename} required onChange={onTemplateModify} />
                                    <span>The name (string) in template</span>

                                    <label>Time</label>
                                    <input type="text" name="templatetime" id="templatetime" maxLength='50' value={templateFormValues.templatetime} required onChange={onTemplateModify} />
                                    <span>The time (string) in template</span>

                                    <label>Location</label>
                                    <input type="text" name="templatelocation" id="templatelocation" maxLength='100' value={templateFormValues.templatelocation} required onChange={onTemplateModify} />
                                    <span>The location (string) in template</span>
                                </div>
                            </div>
                        )}

                        <div className="event_signup-formInput">
                            <label htmlFor="name">Name*</label>
                            <input type="text" name="name" id="name" maxLength='100' pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.name} required onChange={onChange} />
                            <span>The name/title of this activity/event. <br />Shall be 5-100 characters without any special character</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="starttime">Start Time*</label>
                            <input type="datetime-local" name="starttime" id="starttime" value={formValues.starttime} required onChange={onChange} />
                            <span>The start time of this activity/event</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="endtime">End Time*</label>
                            <input type="datetime-local" name="endtime" id="endtime" value={formValues.endtime} required onChange={onChange} />
                            <span>The end time of this activity/event</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="duration">Duration</label>
                            <input type="number" name="duration" id="duration" min="0" max="9999" value={formValues.duration} required onChange={onChange} />
                            <span>(Optional) The duration of this activity/event in MINUTES. <br />Shall be a number between 0 to 9999</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="location">Location*</label>
                            <input type="text" name="location" id="location" pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.location} required onChange={onChange} />
                            <span>The location of this activity/event. <br />Shall be 5-100 characters without any special character</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="description">Description*</label>
                            <textarea name="description" id="description" rows="5" maxLength="1024" value={formValues.description} required onChange={onChange} />
                            <span>The description of this activity/event. <br />Max length 1024 characters</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="priority">Priority</label>
                            <input type="number" name="priority" id="priority" min="0" max="9999" value={formValues.priority} required onChange={onChange} />
                            <span>(Optional) The priority of this activity/event. Default is 10.<br />The activity/event with higher priority will be listed first.</span>
                        </div>
                        <div className="event_signup-formInput">
                            <label htmlFor="uniquesignup">Unique Signup</label>
                            <input type="checkbox" name="uniquesignup" id="uniquesignup" checked={formValues.uniquesignup} onChange={onChangeCheckbox} />
                            <span>(Optional) If this event allows a user to sign up more than one activity. Default is No.</span>
                        </div>
                        {activities.map((activity, key) => {
                            return (
                                <div key={key}>
                                    <Line color="--lightgrey-color" width="100%" />
                                    <div className="activityInput" >
                                        <Button type="button greenButton" text="-" onClick={() => handleRemoveActivity(activity.id)} />
                                        <div>
                                            <div className="event_signup-formInput" >
                                                <label htmlFor={"nameactivity" + key}>Activity Name*</label>
                                                <input type="text" name={"nameactivity" + key} id={"nameactivity" + key} maxLength='100' pattern="[A-Za-z0-9\s,:\-\(\)]{5,100}" value={activities[key].name} required onChange={e => onActivityChange(e, key)} />
                                                <span>The name/title of this activity. <br />Shall be 5-100 characters with limited special characters <br />Only ,:-() are allowed</span>
                                            </div>
                                            <div className="event_signup-formInput" >
                                                <label htmlFor={"maxslots" + key}>Max Slots*</label>
                                                <input type="number" name={"maxslots" + key} id={"maxslots" + key} min="1" value={activities[key].maxs} required onChange={e => onActivityChange(e, key)} />
                                                <span>The max available slots of this activity. <br />Shall be an integer no smaller than 1</span>
                                            </div>
                                            <div className="event_signup-formInput" >
                                                <label htmlFor={"type" + key}>Type*</label>   {/* the values of these radios need to match the "roles" in user profile collection */}
                                                <div className="radioInput">
                                                    <label><input type="radio" name={"type" + key} id={"type" + key} value="Volunteer" checked={activities[key].type === "Volunteer"} onChange={e => onActivityChange(e, key)} required /> Volunteer</label>
                                                    <label><input type="radio" name={"type" + key} id={"type" + key} value="Autistic Child" checked={activities[key].type === "Autistic Child"} onChange={e => onActivityChange(e, key)} required /> Child</label>
                                                    <label><input type="radio" name={"type" + key} id={"type" + key} value="All" checked={activities[key].type === "All"} onChange={e => onActivityChange(e, key)} required /> All</label>
                                                </div>
                                                <span>The sign up of this activity is targeted to which group, volunteers or children or both</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div>
                            {console.log("activities: ", activities)}
                            <Button type="button greenButton" text="+Activity" onClick={handlePlusActivity} />
                        </div>
                        <button>Submit</button>
                        <Link to="/ibadmin">Cancel</Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default Eventsignup