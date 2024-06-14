import React, { useState, useEffect, useRef } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./Eventrecords.css";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Eventrecords = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState();
    const [photoUrls, setPhotoUrls] = useState([]);
    const [photoNames, setPhotoNames] = useState([]);
    const [photoPrivacy, setPhotoPrivacy] = useState([0]);
    const [currentTime, setCurrentTime] = useState(new Date().toISOString());
    const inputFileRef = useRef(null);  // use to reset the <input file> field after uploading

    let databaseValues = {}; // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh
    databaseValues.photourls = []; // to store the urls of photos after uploading
    databaseValues.photonames = []; // to store the original filenames of photos after uploading
    databaseValues.photoprivacy = []; // to store the privacy value of photos, 0 is public photo, 1 is private photo only for registered users to view 

    const initFormValues = {
        name: "",
        time: "",
        location: "",
        duration: 0,
        description: "",
        photos: "",
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onFileChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.files });
    };

    const changePrivacy = (e) => {
        // console.log("changePrivacy: ", e.target.id, ": ", e.target.checked);
        let tempPrivacy = photoPrivacy;
        if(e.target.checked) {
            tempPrivacy[e.target.id] = 1;
        } else {
            tempPrivacy[e.target.id] = 0;
        }
        setPhotoPrivacy(tempPrivacy);  
    }

    const handleUpload = (e) => {
        e.preventDefault();
        setPhotoUrls([]);   // clear array of photo URLs and Names before uploading
        setPhotoNames([]);
        setPhotoPrivacy([0]);
    
        if(formValues.photos.length > 10) {
            Swal.fire({
                title: 'Warning',
                html: `You have chosen <b>${formValues.photos.length}</b> files. <br />Please select no more than <b>10</b> files.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }
        for (let i=0; i<formValues.photos.length; i++) {    // check the size of files
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

        for (let i=0; i<formValues.photos.length; i++) {
            const random10000 = Math.floor(Math.random()*10000);  // get a random integer from 0 to 9999
            const filename = currentTime + "_" + i + "_" + random10000;
            uploadPhoto(formValues.photos[i], filename);
        }

    };

    const uploadPhoto = (file, filename) => {
        const storage = getStorage();

        const storageRef = ref(storage, 'event_records/' + filename);
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
                    databaseValues.photoprivacy = [...databaseValues.photoprivacy, 0];  // default is public photo
                    setPhotoUrls(databaseValues.photourls);
                    setPhotoNames(databaseValues.photonames);
                    setPhotoPrivacy(databaseValues.photoprivacy);
                    // console.log('uploadPhoto: urls: ', databaseValues.photourls);
                });
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(photoUrls.length === 0) {
            Swal.fire({
                title: 'Warning',
                html: `Please upload photos first! <br />Need to upload at least <b>1</b> photo.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }

        databaseValues.name = formValues.name;
        databaseValues.time = formValues.time;
        databaseValues.location = formValues.location;
        databaseValues.duration = formValues.duration;
        databaseValues.description = formValues.description; 
        databaseValues.email = user.email
        databaseValues.uid = user.uid
        databaseValues.createtime = currentTime
        databaseValues.photourls = photoUrls;  // after re-render, databaseValues has lost all the values
        databaseValues.photonames = photoNames;
        databaseValues.photoprivacy = photoPrivacy;

        console.log("handleSubmit: databaseValues: ", databaseValues);
        updateRecord(databaseValues);

        setFormValues({...initFormValues}); // clear formValues to initial values
        setPhotoUrls([]);
        setPhotoNames([]);
        setPhotoPrivacy([]);
        setCurrentTime(new Date().toISOString());
        inputFileRef.current.value = null;  // clear the <input file> 
    };

    const updateRecord = async (databaseValues) => {
        const random10000 = Math.floor(Math.random()*10000);  // get a random integer from 0 to 9999
        const documentID = currentTime + "_" + random10000;
        const ref = doc(db, "event_records", documentID);
        try {
            await setDoc(ref, databaseValues);
            Swal.fire({
                title: 'Success',
                text: `Event record ${documentID} created`,
                icon: 'success',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                title: 'Error',
                text: `Update record error: ${error}`,
                icon: 'error',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            setFormValues({...initFormValues}); // another user signed in, update the useState to initial values
            setPhotoUrls([]);
            setPhotoNames([]);
            setPhotoPrivacy([]);
            setCurrentTime(new Date().toISOString());
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
            <div className="event_records">
                <div className="event_records-title">
                    Add an activity/event record
                </div>
                <div className="event_records-content">
                    Please <Link to="/login">sign in</Link> first!
                </div>
            </div>            
        )
    } else if(!userData || userData.role !== "admin") {
        return (
            <div className="event_records">
                <div className="event_records-title">
                    Add an activity/event record
                </div>
                <div className="event_records-content">
                    You have no right to use this page!
                </div>
            </div>            
        )
    }   

    // console.log("Event_records: formValues: ", formValues);
    // console.log("photoUrls: ", photoUrls);
    // console.log("photoPrivacy: ", photoPrivacy);

    if(userData.role === "admin") {  // this user has right to update records

        return (
            <div className="event_records">
                <div className="event_records-title">
                    Add an activity/event record
                </div>
                <div className="event_records-content">
                    Please provide activity/event information <br />
                    All items with * are required.
                </div>
                <div>
                    <form onSubmit={handleUpload}>
                        <div className="formInput">
                            <label htmlFor="photos">Photos*</label>
                            <input ref={inputFileRef} type="file" name="photos" id="photos" multiple accept="image/png, image/jpg, image/jpeg" required onChange={onFileChange} />
                            <span>Photos of this activity/event. <br />Need to upload photos first before submit.<br />You can upload 1 to 10 photos, with 1MB max size of each photo</span>
                        </div>
                        <button>Upload</button>
                    </form>
                    <br></br>
                    {
                        (photoUrls.length>0)&&(
                            <div className="event_records-photolist">
                                <div><b>Photo</b></div>
                                <div><b>File name</b></div>
                                <div><b>Private?</b></div>
                            </div>
                        )
                    }
                    {
                        photoUrls&&photoUrls.map((photo, index) => 
                        <div className="event_records-photolist" key={index}>
                            <div><img src={photo} width="150" alt="uploaded" /></div>
                            <div>{photoNames[index]}</div>
                            <div><input type="checkbox" name="privacy" id={index} onChange={changePrivacy}/></div>
                        </div>
                        )
                    }
                    <form onSubmit={handleSubmit}>
                        <div className="formInput">
                            <label htmlFor="name">Name*</label>
                            <input type="text" name="name" id="name" maxLength='100' pattern="[A-Za-z0-9\s]{5,100}" value={formValues.name} required onChange={onChange} />
                            <span>The name/title of this activity/event. <br/>Shall be 5-100 characters without any special character</span>
                        </div>
                        <div className="formInput">
                            <label htmlFor="time">Time*</label>
                            <input type="datetime-local" name="time" id="time" value={formValues.time} required onChange={onChange} />
                            <span>The start time of this activity/event</span>
                        </div>
                        <div className="formInput">
                            <label htmlFor="duration">Duration</label>
                            <input type="number" name="duration" id="duration" min="0" max="9999" value={formValues.duration} onChange={onChange} />
                            <span>(Optional) The duration of this activity/event in MINUTES. <br />Shall be a number between 0 to 9999</span>
                        </div>
                        <div className="formInput">
                            <label htmlFor="location">Location*</label>
                            <input type="text" name="location" id="location" pattern="[A-Za-z0-9\s,]{5,100}" value={formValues.location} required onChange={onChange} />
                            <span>The location of this activity/event. <br />Shall be 5-100 characters without any special character</span>
                        </div>
                        <div className="formInput">
                            <label htmlFor="description">Description*</label>
                            <textarea name="description" id="description" rows="5" maxLength="1024" value={formValues.description} required onChange={onChange} />
                            <span>The description of this activity/event. <br />Max length 1024 characters</span>
                        </div>
                        <button>Submit</button>
                        <Link to="/ibadmin">Cancel</Link>
                    </form>
                </div>               
            </div>
        )
    }
}

export default Eventrecords