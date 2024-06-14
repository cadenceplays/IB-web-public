import React, { useState, useRef, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import "./Specialolympicsreg.css";
import Swal from 'sweetalert2';

const Specialolympicsreg = () => {
    const { user, memberIndex } = UserAuth();
    const [childData, setChildData] = useState();
    const [triggerEffect, setTriggerEffect] = useState(false);
    const [formFileUrl, setFormFileUrl] = useState();
    const [formFileName, setFormFileName] = useState();
    const [medicalFile, setMedicalFile] = useState();
    const [registered, setRegistered] = useState(false);
    const inputFileRef = useRef(null);  // use to reset the <input file> field after uploading

    const initFormValues = {
        firstname: "",
        lastname: "",
        preferredname: "",
        birthday: "",
        gender: "",
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onFileChange = (e) => {
        setMedicalFile(e.target.files);
    };

    const handleUpload = (e) => {
        e.preventDefault();
        setFormFileUrl();   // clear form file URL and Name before uploading
        setFormFileName();

        if (medicalFile.length > 1) {    // only allow uploading 1 file
            Swal.fire({
                title: 'Warning',
                html: `You have chosen <b>${medicalFile.length}</b> files. <br />Please select only <b>1</b> file.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }

        if (medicalFile[0].size / 1024 > 2048) {    // max file size is 2MB
            Swal.fire({
                title: 'Warning',
                html: `File size cannot be larger than <b>2MB</b>. <br />Please reduce the size of file: <br /><b>${medicalFile[0].name}</b>`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }

        const currentTime = new Date().toISOString();
        const random10000 = Math.floor(Math.random() * 10000);  // get a random integer from 0 to 9999
        const filename = user.email + "_" + memberIndex + "_" + currentTime + "_" + random10000;
        uploadFile(medicalFile[0], filename);
    };

    const uploadFile = (file, filename) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'specialolympics_team/' + filename);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('uploadFile: upload is ' + progress + '% done');
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
                console.log("uploadFile: error: ", error.code);
                Swal.fire({
                    title: 'Error',
                    text: `Upload file error: ${error.code}`,
                    icon: 'error',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setFormFileUrl(downloadURL);
                    setFormFileName(filename);
                });
            }
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formFileUrl) {    // user has not uploaded medical form; user needs to upload form first before submit
            Swal.fire({
                title: 'Warning',
                html: `Please upload signed medical form file before submit.`,
                icon: 'warning',
                iconColor: '#A5C727',
                confirmButtonText: 'OK',
                confirmButtonColor: '#A5C727'
            });
            return;
        }

        let databaseValues = formValues;    // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh
        databaseValues.medicalfileurl = formFileUrl;
        databaseValues.medicalfilename = formFileName;

        console.log("handleSubmit: databaseValues: ", databaseValues);

        submitRegistration(databaseValues);

        inputFileRef.current.value = null;  // clear the <input file> 
    };


    const submitRegistration = async (dbValues) => {
        let docID = "";
        (memberIndex === 0) ? (docID = user.email) : (docID = user.email + "_" + memberIndex);

        const ref = doc(db, "specialolympics_team", docID);
        try {
            await setDoc(ref, dbValues);
            setTriggerEffect(!triggerEffect);   // trigger useEffect to update registration

            Swal.fire({
                title: 'Success',
                text: 'Registration submitted',
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
    }


    useEffect(() => {
        let tempUserData = {};

        const getUserData = async () => {
            setFormValues(initFormValues); // another user signed in, update the useState to initial values
            setFormFileUrl();
            setFormFileName();
            setMedicalFile();
            setChildData(null);
            setRegistered(false);

            let documentID = "";
            memberIndex === 0 ? (documentID = user.email) : (documentID = user.email + "_" + memberIndex);

            const ref1 = doc(db, "users", documentID);
            try {
                const docSnap = await getDoc(ref1);
                tempUserData = docSnap.data();
                if(tempUserData && tempUserData.gender) {
                    setChildData(tempUserData);
                    setFormValues(prevFormValues => { return { ...prevFormValues, gender: tempUserData.gender } }); // gender info pulled from "users" collection
                }
                console.log("getUserData() tempUserData: ", tempUserData);
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

        const getRegistration = async () => {
            let documentID = "";
            memberIndex === 0 ? (documentID = user.email) : (documentID = user.email + "_" + memberIndex);

            const ref1 = doc(db, "specialolympics_team", documentID);
            try {
                const docSnap = await getDoc(ref1);
                tempUserData = docSnap.data();
                if (tempUserData) {  // this user has registered already, we will just show the registration info; user cannot update it
                    setRegistered(true);
                    setFormValues(prevFormValues => { return { ...prevFormValues, firstname: tempUserData.firstname } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, lastname: tempUserData.lastname } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, preferredname: tempUserData.preferredname } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, birthday: tempUserData.birthday } });
                    setFormFileUrl(tempUserData.medicalfileurl);
                    setFormFileName(tempUserData.medicalfilename);
                }

                console.log("getRegistration() tempUserData: ", tempUserData);
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
            getRegistration();
        }
    }, [user, memberIndex, triggerEffect])      // the change of any of these 3 variables can trigger useEffect to reload


    if (!user || !(user.email)) {
        return (
            <div className="specialolympicsreg">
                <div className="specialolympicsreg-title">
                    Registration for International Buddy Special Olympics Team
                </div>
                <div className="specialolympicsreg-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    } else if (childData && childData.role !== "Autistic Child") {
        return (
            <div className="specialolympicsreg">
                <div className="specialolympicsreg-title">
                    Registration for International Buddy Special Olympics Team
                </div>
                <div className="specialolympicsreg-content">
                    <p>Only child can register the Special Olympics Team. Please switch to child role.</p>
                </div>
            </div>
        )
    }


    return (
        <div className="specialolympicsreg">
            <div className="specialolympicsreg-title">
                Registration for International Buddy Special Olympics Team
            </div>
            <div>
                {registered ?
                    (   // user has registered before, just show registration info; user cannot update it
                        <>
                            <div className="specialolympicsreg-content">
                                You have registered with our Special Olympics Team.<br />
                                Below is your registration information.<br />
                                If you want to update the information, please <Link to="/contact">contact</Link> us.
                            </div>
                            <div>
                                <div className="specialolympicsreg-form3">
                                    <b>Your signed medical form is <a href={formFileUrl} target="_blank" rel="noopener">here</a></b>
                                </div>
                                <div className="specialolympicsreg-form2">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" name="firstname" id="firstname" maxLength='50' value={formValues.firstname} readOnly />
                                </div>
                                <div className="specialolympicsreg-form2">
                                    <label htmlFor="firstname">Last Name</label>
                                    <input type="text" name="lastname" id="lastname" maxLength='50' value={formValues.lastname} readOnly />
                                </div>
                                <div className="specialolympicsreg-form2">
                                    <label htmlFor="firstname">Preferred Name</label>
                                    <input type="text" name="preferredname" id="preferredname" maxLength='50' value={formValues.preferredname} readOnly />
                                </div>
                                <div className="specialolympicsreg-form2">
                                    <label htmlFor="birthday">Birthday</label>
                                    <input type="date" name="birthday" id="birthday" value={formValues.birthday} readOnly />
                                </div>
                            </div>
                        </>
                    )
                    :
                    (   // new registration
                        <>
                            <div className="specialolympicsreg-content">
                                Please provide your information.<br />
                                All items with * are required.
                            </div>
                            <div>
                                <form onSubmit={handleUpload}>
                                    <div className="specialolympicsreg-form">
                                        <label htmlFor="formfile">Signed Form*</label>
                                        <input ref={inputFileRef} type="file" name="formfile" id="formfile" accept=".pdf" onChange={onFileChange} />
                                        <span>Medical form signed by your doctor.<br />Need to upload the image first before submit.<br />You can upload 1 file with 2MB max size.<br />You can download <a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/specialolympics_team%2FAthleteRegistrationMedicalForm.pdf?alt=media&token=43029904-f753-45e0-b3e2-01c2b20cbb45" download="medical_form.pdf" target="_blank" rel="noopener">an empty medical form here</a>.</span>
                                    </div>
                                    <button>Upload</button>
                                </form>
                                {   // show the link of the file user just uploaded
                                    formFileUrl && (
                                        <div className="specialolympicsreg-form3">
                                            <b>You have successfully uploaded &nbsp;<a href={formFileUrl} target="_blank" rel="noopener">this file</a>.</b>
                                        </div>
                                    )
                                }
                                <form onSubmit={handleSubmit}>
                                    <div className="specialolympicsreg-form">
                                        <label htmlFor="firstname">First Name*</label>
                                        <input type="text" name="firstname" id="firstname" maxLength='50' value={formValues.firstname} pattern="^[A-Za-z0-9\s]{2,50}$" required onChange={onChange} />
                                        <span>Your first name. <br />Shall be 2-50 characters without any special character.</span>
                                    </div>
                                    <div className="specialolympicsreg-form">
                                        <label htmlFor="firstname">Last Name*</label>
                                        <input type="text" name="lastname" id="lastname" maxLength='50' value={formValues.lastname} pattern="^[A-Za-z0-9\s]{2,50}$" required onChange={onChange} />
                                        <span>Your last name. <br />Shall be 2-50 characters without any special character.</span>
                                    </div>
                                    <div className="specialolympicsreg-form">
                                        <label htmlFor="firstname">Preferred Name</label>
                                        <input type="text" name="preferredname" id="preferredname" maxLength='50' value={formValues.preferredname} pattern="^[A-Za-z0-9\s]{2,50}$" required onChange={onChange} />
                                        <span>Your preferred name. <br />Shall be 2-50 characters without any special character.</span>
                                    </div>
                                    <div className="specialolympicsreg-form">
                                        <label htmlFor="birthday">Birthday*</label>
                                        <input type="date" name="birthday" id="birthday" value={formValues.birthday} required onChange={onChange} />
                                        <span>Your birthday.</span>
                                    </div>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )

}

export default Specialolympicsreg