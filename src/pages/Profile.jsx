import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { doc, query, getDocs, setDoc, updateDoc, collection, where, runTransaction } from "firebase/firestore";
import { Link } from 'react-router-dom';
import "./Profile.css";
import Swal from 'sweetalert2';
import { Uselocalstorage } from "../components";

const Profile = () => {
    const { user } = UserAuth();
    const [userData, setUserData] = useState([]);
    const [tabToggle, setTabToggle] = useState(0);
    const [triggerEffect, setTriggerEffect] = useState(false);
    const [fcmToken, setFcmToken] = Uselocalstorage("ibFcmToken", "");  // fcmToken is the token of this user (this browser actually) used to receive push notification from server

    const initFormValues = {
        name: "",
        role: "",
        school: "",
        grade: "",
        phone: "",
        gender: "",
        zip: "",
        interest: "",           // only for child and volunteer, store the interested activity of this user
        availability: "",       // only for child and volunteer, store the preferred date/time of this user
        childname: "",          // the child's name provided by the user for liability waiver
        guardianname: "",       // the guardian's name provided by the user for liability waiver
        waivercheck: false,     // if the user agrees the liability waiver document
        trainingcheck: false,   // if the user (for volunteer only) agrees to complete trainings
        servicehour: 0,         // the total service hour of the user, set to zero when the profile is created, user CANNOT update it
        email: "",
        uid: "",
        signuptime: "",
        updatetime: "",
    };
    const [formValues, setFormValues] = useState(initFormValues);

    const onChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const onChangeCheckbox = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.checked });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("formValues: ", formValues);

        if (!(userData?.length) || tabToggle === -1) { // first time to crate profile, or "+" is pressed to add a member profile

            if(tabToggle === -1) {  // check if the name of this new member is same with any of the existing members under this email
                let foundName = false;
                userData.map((userDoc) => {
                    if(userDoc.name === formValues.name) {
                        foundName = true;  // found same name, return; this makes sure all members under the same email have unique name
                    }
                    return foundName;
                });
                if(foundName) {
                    Swal.fire({
                        title: 'Warning',
                        text: `Please do NOT use the same NAME of any existing family member (${formValues.name})!`,
                        icon: 'warning',
                        iconColor: '#A5C727',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#A5C727'
                    });
                    return;
                }
            }

            let databaseValues = formValues;    // use a normal variable instead of state const, as state const won't be updated in a timely manner before page refresh
            const currentTime = new Date().getTime();
            databaseValues.email = user.email
            databaseValues.uid = user.uid
            databaseValues.signuptime = currentTime
            databaseValues.updatetime = currentTime;
            updateUserData("create", databaseValues);
        } else {    // update profile; name, signuptime, childname, guardianname, waivercheck, trainingcheck will NOT be updated
            let databaseValues = {};
            const currentTime = new Date().getTime();
            databaseValues.updatetime = currentTime;
            Object.keys(formValues).map((keyName) => (
                formValues[keyName] && (databaseValues[keyName] = formValues[keyName])
            ));
            console.log("databaseValues: ", databaseValues);
            updateUserData("update", databaseValues);
        }
    };

    const updateUserData = async (type, databaseValues) => {
        let docID = "";
        try {
            if (type === "create") {
                if(!(userData?.length)) // first time to create profile
                    docID = user.email;
                else    // "+" a member profile
                    docID = user.email + "_" + userData.length;

                const ref = doc(db, "users", docID);
                await setDoc(ref, databaseValues);
                setTriggerEffect(!triggerEffect);   // trigger useEffect to update userData
                // const docSnap = await getDoc(ref);
                // docSnap.exists && setUserData(docSnap.data());
                Swal.fire({
                    title: 'Success',
                    text: 'Profile created',
                    icon: 'success',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                }).then((result) => {
                    if(result.isConfirmed) {
                        window.location.reload(true);   // reload the whole page to get the updated profile info (e.g. for navbar component)
                    }
                });
            }
            else {// type === "update"
                if(tabToggle === 0)
                    docID = user.email;
                else
                    docID = user.email + "_" + tabToggle;

                const ref = doc(db, "users", docID);
                console.log("docID: ", docID);
                await updateDoc(ref, databaseValues);
                setTriggerEffect(!triggerEffect);   // trigger useEffect to update userData
                // const docSnap = await getDoc(ref);
                // docSnap.exists && setUserData(docSnap.data());
                Swal.fire({
                    title: 'Success',
                    text: 'Profile updated',
                    icon: 'success',
                    iconColor: '#A5C727',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#A5C727'
                });
            }
            // setFormValues({...initFormValues}); // clear formValues to initial values
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

    const toggleTab = (index) => {
        setTabToggle(index);

        setFormValues({ ...initFormValues }); // tab toggled, clear formValues
        if (index !== -1) {   // -1 represents "+" tab, aka create a new member
            setFormValues(prevFormValues => { return { ...prevFormValues, school: userData[index].school } });
            setFormValues(prevFormValues => { return { ...prevFormValues, grade: userData[index].grade } });
            setFormValues(prevFormValues => { return { ...prevFormValues, gender: userData[index].gender } });
            setFormValues(prevFormValues => { return { ...prevFormValues, phone: userData[index].phone } });
            setFormValues(prevFormValues => { return { ...prevFormValues, zip: userData[index].zip } });
            setFormValues(prevFormValues => { return { ...prevFormValues, interest: userData[index].interest } });
            setFormValues(prevFormValues => { return { ...prevFormValues, availability: userData[index].availability } });
        }
    }

    useEffect(() => {
        const getUserData = async () => {
            setFormValues({ ...initFormValues }); // another user signed in, update the useState to initial values
            setUserData(null);
            setTabToggle(0);
            const q = query(collection(db, "users"), where("email", "==", user.email));
            let tempUserData = [];
            try {
                const docSnap = await getDocs(q);
                docSnap.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    tempUserData.push(doc.data());
                });
                setUserData(tempUserData);
                
                // load values of 1st member to formValues, except the name & role fields, which CANNOT be updated
                if (tempUserData[0]) {
                    setFormValues(prevFormValues => { return { ...prevFormValues, school: tempUserData[0].school } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, grade: tempUserData[0].grade } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, gender: tempUserData[0].gender } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, phone: tempUserData[0].phone } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, zip: tempUserData[0].zip } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, interest: tempUserData[0].interest } });
                    setFormValues(prevFormValues => { return { ...prevFormValues, availability: tempUserData[0].availability } });
                }

                // once user logged in, user will be redirected to this profile page. 
                // we use this chance to update the FCM tokens saved in database, to make sure the stored FCM tokens are the latest ones.
                // we can store up to 3 tokens (a.k.a user's devices or browsers)
                // these tokens are used by FCM server function to send notifications to the user
                const ref = doc(db, "users", user.email);
                console.log("Profile: fcmToke: ", fcmToken);
                if(fcmToken) {  // only when local storage has a token, update the token to database
                    try {
                        const fcmTokenUpdate = await runTransaction(db, async (transaction) => {
                            const userDoc = await transaction.get(ref);
                            if (!userDoc.exists()) return Promise.reject("Profile: document does not exist!");
                            let storedFcmTokens = [];
                            if(userDoc.data().fcmtokens) {
                                storedFcmTokens = userDoc.data().fcmtokens;
                                let foundToken = false;
                                for (let i = 0; i < storedFcmTokens.length; i++) {
                                    if (storedFcmTokens[i] === fcmToken) foundToken = true;
                                }
                                if (!foundToken) {   // only update when encounter a new token different from all the tokens stored
                                    if (storedFcmTokens.length < 3) storedFcmTokens.push(fcmToken);
                                    else { // remove the first token (oldest), then push new one
                                        storedFcmTokens.splice(0, 1);
                                        storedFcmTokens.push(fcmToken);
                                    }
                                }
                            } else {
                                storedFcmTokens.push(fcmToken);
                            }

                            transaction.update(ref, { fcmtokens: storedFcmTokens });
                            return(storedFcmTokens.length);
                        });

                        console.log("Profile: fcmTokenUpdate: ", fcmTokenUpdate);
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

        if (user && user.email) getUserData();
    }, [user, triggerEffect, fcmToken])


    if (!user || !(user.email)) {
        return (
            <div className="profile">
                <div className="profile-title">
                    Profile
                </div>
                <div className="profile-content">
                    <p>Please <Link to="/login">sign in</Link> first!</p>
                </div>
            </div>
        )
    }

    console.log("Profile: userData: ", userData);

    if (userData?.length) {  // this user has profile data in database
        return (
            <div className="profile">
                <div className="profile-title">
                    Profile
                </div>
                <div className="profile-tab-container">
                    {/* this is the titles of the tabs */}
                    <div className="profile-tab-title-container">
                        {userData.map((userDoc, key) =>
                            <div
                                className={tabToggle === (key) ? "profile-tab-title profile-tab-title-active" : "profile-tab-title"}
                                onClick={() => toggleTab(key)}
                                key={key}
                            >
                                {userDoc.name}
                            </div>
                        )}

                        {/* if this email associated to less than 5 persons, allow to add new person. Max associated number of persons is 5 */}
                        {userData.length < 5 &&
                            <div
                                className={tabToggle === -1 ? "profile-tab-title profile-tab-title-active" : "profile-tab-title"}
                                onClick={() => toggleTab(-1)}
                            >
                                +Add
                            </div>
                        }

                        <div className="profile-tab-title profile-tab-title-empty">
                        </div>
                    </div>

                    {/* this is the content of all the tabs */}
                    <div className="profile-tab-content-container">
                        {userData.map((userDoc, key) =>
                            <div className={tabToggle === (key) ? "profile-tab-content-active" : "profile-tab-content"} key={key}>
                                <div className="profile-content">
                                    Your current information. You could update them if needed. <br />
                                    All items with * are required.
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="profile-form">
                                            <label>Email</label>
                                            <p>{userDoc.email}</p>
                                        </div>
                                        
                                        <div className="profile-form">
                                            <label>Full Name</label>
                                            <p>{userDoc.name}</p>
                                            <span>Your full name, which CANNOT be updated.</span>
                                        </div>
                                        <div className="profile-form">
                                            <label htmlFor="role">Role</label>
                                            <p>{(userDoc.role==="Autistic Child")? "Child" : userDoc.role}</p>
                                            <span>Your role in International Buddy, which CANNOT be updated.</span>
                                        </div>

                                        {(userDoc.role === "Autistic Child" || userDoc.role === "Volunteer") &&
                                            <>
                                                <div className="profile-form">
                                                    <label htmlFor="school">School*</label>
                                                    <input type="text" name="school" id="school" maxLength='50' value={formValues.school} pattern="^[A-Za-z0-9\s]{3,50}$" required onChange={onChange} />
                                                    <span>Your current school. <br />Shall be 3-50 characters without any special character</span>
                                                </div>
                                                <div className="profile-form">
                                                    <label htmlFor="grade">Grade*</label>
                                                    <select value={formValues.grade} name="grade" id="grade" required onChange={onChange}>
                                                        <option value=""></option>
                                                        <option value="Pre-K">Pre-K</option>
                                                        <option value="K">K</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <span>Your current grade.</span>
                                                </div>
                                            </>
                                        }

                                        <div className="profile-form">
                                            <label htmlFor="gender">Gender*</label>
                                            <select value={formValues.gender} name="gender" id="gender" required onChange={onChange}>
                                                <option value=""></option>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                                <option value="Other">Other</option>
                                                <option value="Nottosay">Prefer not to say</option>
                                            </select>
                                        </div>
                                        <div className="profile-form">
                                            <label htmlFor="phone">Phone*</label>
                                            <input type="tel" name="phone" id="phone" value={formValues.phone} pattern="[0-9]{10}" required onChange={onChange} />
                                            <span>Your mobile or home phone. <br />Format: 1234567890</span>
                                        </div>
                                        <div className="profile-form">
                                            <label htmlFor="zip">Zip code*</label>
                                            <input type="text" name="zip" id="zip" value={formValues.zip} pattern="[0-9]{5}" required onChange={onChange} />
                                            <span>Zip code of your home or school. <br />Format: 12345</span>
                                        </div>

                                        {(userDoc.role === "Autistic Child" || userDoc.role === "Volunteer") &&
                                            <>
                                                <div className="profile-form">
                                                    <label htmlFor="interest">Interest</label>
                                                    <textarea name="interest" id="interest" maxLength="500" rows="3" value={formValues.interest} onChange={onChange} />
                                                    <span>(Optional) Your interest, e.g. basketball, swimming, drawing, etc.<br />No more than 200 characters</span>
                                                </div>
                                                <div className="profile-form">
                                                    <label htmlFor="availability">Availability</label>
                                                    <textarea name="availability" id="availability" maxLength="500" rows="3" value={formValues.availability} onChange={onChange} />
                                                    <span>(Optional) Your preferred time to attend IB activities, e.g. every Sunday morning, every 2pm-5pm in summer<br />No more than 200 characters</span>
                                                </div>
                                            </>
                                        }

                                        <button>Update</button>&nbsp;&nbsp;<Link to="/">Cancel</Link>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* this is the "+" tab */}
                        <div className={tabToggle === -1? "profile-tab-content-active" : "profile-tab-content"}>
                            <div className="profile-content">
                                Please provide your or your family member's information.<br />
                                All items with * are required.
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="profile-form">
                                        <label htmlFor="name">Full Name*</label>
                                        <input type="text" name="name" id="name" maxLength='50' value={formValues.name} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                                        <span>Your full name, which CANNOT be updated once submitted. <br />Shall be 5-50 characters without any special character</span>
                                    </div>
                                    {/* some form fields are depends on the selection of role  */}
                                    <div className="profile-form">
                                        <label htmlFor="role">Role*</label>
                                        <select value={formValues.role} name="role" id="role" required onChange={onChange}>
                                            <option value=""></option>
                                            <option value="Autistic Child">Child</option>
                                            <option value="Volunteer">Volunteer</option>
                                            <option value="Parent">Parent/Guardian</option>
                                            <option value="Staff">Staff</option>
                                        </select>
                                        <span>Your role in International Buddy, which CANNOT be updated once submitted.</span>
                                    </div>

                                    {(formValues.role === "Autistic Child" || formValues.role === "Volunteer") &&
                                        <>
                                            <div className="profile-form">
                                                <label htmlFor="school">School*</label>
                                                <input type="text" name="school" id="school" maxLength='50' value={formValues.school} pattern="^[A-Za-z0-9\s]{3,50}$" required onChange={onChange} />
                                                <span>Your current school. <br />Shall be 3-50 characters without any special character</span>
                                            </div>
                                            <div className="profile-form">
                                                <label htmlFor="grade">Grade*</label>
                                                <select value={formValues.grade} name="grade" id="grade" required onChange={onChange}>
                                                    <option value=""></option>
                                                    <option value="Pre-K">Pre-K</option>
                                                    <option value="K">K</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                    <option value="11">11</option>
                                                    <option value="12">12</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <span>Your current grade.</span>
                                            </div>
                                        </>
                                    }

                                    <div className="profile-form">
                                        <label htmlFor="gender">Gender*</label>
                                        <select value={formValues.gender} name="gender" id="gender" required onChange={onChange}>
                                            <option value=""></option>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Other</option>
                                            <option value="Nottosay">Prefer not to say</option>
                                        </select>
                                    </div>
                                    <div className="profile-form">
                                        <label htmlFor="phone">Phone*</label>
                                        <input type="tel" name="phone" id="phone" value={formValues.phone} pattern="[0-9]{10}" required onChange={onChange} />
                                        <span>Your mobile or home phone. <br />Format: 1234567890</span>
                                    </div>
                                    <div className="profile-form">
                                        <label htmlFor="zip">Zip code*</label>
                                        <input type="text" name="zip" id="zip" value={formValues.zip} pattern="[0-9]{5}" required onChange={onChange} />
                                        <span>Zip code of your home or school. <br />Format: 12345</span>
                                    </div>

                                    {(formValues.role === "Autistic Child" || formValues.role === "Volunteer") &&
                                        <>
                                            <div className="profile-form">
                                                <label htmlFor="interest">Interest</label>
                                                <textarea name="interest" id="interest" maxLength="200" rows="3" value={formValues.interest} onChange={onChange} />
                                                <span>(Optional) Your interest, e.g. basketball, swimming, drawing, etc.<br />No more than 200 characters</span>
                                            </div>
                                            <div className="profile-form">
                                                <label htmlFor="availability">Availability</label>
                                                <textarea name="availability" id="availability"  maxLength="200" rows="3" value={formValues.availability} onChange={onChange} />
                                                <span>(Optional) Your preferred time to attend IB activities, e.g. every Sunday morning, every 2pm-5pm in summer<br />No more than 200 characters</span>
                                            </div>
                                        </>
                                    }

                                    <div className="profile-content">
                                        <p><b>Accident Waiver and Release of Liability</b></p>
                                        <p>I hereby hold International Buddy Organization and related parties and individuals/volunteers harmless and release all said organization and individuals from any and all liability, including but not limited to, claims for negligence, personal injury, illness, property damage, property theft, or actions of any kind, as a result of participation in any International Buddy Organization sponsored
                                            events and activities.</p>
                                        <p>I understand that volunteers act as role model and play pal for my kid. I am the sole responsible party for my child (children)’s well being. I will be within reach of my child(children)’s activity during the entire process.</p>
                                        <p>I authorize volunteer of International Buddy to play with my child.</p>
                                        <p>In order to share the value to the work of International Buddy Organization, we will take group photographs of events. We would appreciate your authorization to use the photographs in our website for such purpose. These group pictures will only be used within our organization.</p>
                                        <p>I certify that I have read this document carefully and I fully understand its content. I hereby agree to the release of liability, group photo disclosure, and sign it of my own free will.</p>
                                    </div>
                                    <div className="profile-content">
                                        <input type="checkbox" name="waivercheck" id="waivercheck" checked={formValues.waivercheck} required onChange={onChangeCheckbox} />
                                        <label htmlFor="waivercheck">By selecting this checkbox and providing names in below input boxes, you are agreeing to the above Accident Waiver and Release of Liability*</label>
                                    </div>
                                    {(formValues.role==="Volunteer") &&
                                        <div className="profile-content">
                                            <input type="checkbox" name="trainingcheck" id="trainingcheck" checked={formValues.trainingcheck} required onChange={onChangeCheckbox} />
                                            <label htmlFor="trainingcheck">By selecting this checkbox and providing names in below input boxes, you are agreeing that you have completed or will complete all the trainings in <Link to="/training">volunteer training page</Link> before attending any activity or event arranged or sponsored by International Buddy*</label>
                                        </div>
                                    }
                                    {(formValues.role === "Autistic Child") &&
                                        <div className="profile-form">
                                            <label htmlFor="childname">Child's Full Name*</label>
                                            <input type="text" name="childname" id="childname" value={formValues.childname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                                            <span>Please input the full name of the child who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                                        </div>
                                    }
                                    {(formValues.role === "Volunteer") &&
                                        <div className="profile-form">
                                            <label htmlFor="childname">Volunteer's Full Name*</label>
                                            <input type="text" name="childname" id="childname" value={formValues.childname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                                            <span>Please input the full name of the volunteer who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                                        </div>
                                    }
                                    {(formValues.role === "Autistic Child" || formValues.role === "Volunteer") ?
                                        <div className="profile-form">
                                            <label htmlFor="guardianname">Parent / Guardian's Full Name*</label>
                                            <input type="text" name="guardianname" id="guardianname" value={formValues.guardianname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                                            <span>Please input the full name of the adult who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                                        </div>
                                        :
                                        <div className="profile-form">
                                            <label htmlFor="guardianname">Your Full Name*</label>
                                            <input type="text" name="guardianname" id="guardianname" value={formValues.guardianname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                                            <span>Please input your full name who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                                        </div>
                                    }
                                    <button>Submit</button>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )

    } else {    // this user does not have profile data, need to input
        return (
            <div className="profile">
                <div className="profile-title">
                    Profile
                </div>
                <div className="profile-content">
                    Please provide your or your family member's information.<br />
                    All items with * are required.
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="profile-form">
                            <label htmlFor="name">Full Name*</label>
                            <input type="text" name="name" id="name" maxLength='50' value={formValues.name} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                            <span>Your full name, which CANNOT be updated once submitted. <br />Shall be 5-50 characters without any special character</span>
                        </div>
                        {/* some form fields are depends on the selection of role  */}
                        <div className="profile-form">
                            <label htmlFor="role">Role*</label>
                            <select value={formValues.role} name="role" id="role" required onChange={onChange}>
                                <option value=""></option>
                                <option value="Autistic Child">Child</option>
                                <option value="Volunteer">Volunteer</option>
                                <option value="Parent">Parent/Guardian</option>
                                <option value="Staff">Staff</option>
                            </select>
                            <span>Your role in International Buddy, which CANNOT be updated once submitted.</span>
                        </div>
                        
                        {(formValues.role==="Autistic Child" || formValues.role==="Volunteer") && 
                            <>
                                <div className="profile-form">
                                    <label htmlFor="school">School*</label>
                                    <input type="text" name="school" id="school" maxLength='50' value={formValues.school} pattern="^[A-Za-z0-9\s]{3,50}$" required onChange={onChange} />
                                    <span>Your current school. <br />Shall be 3-50 characters without any special character</span>
                                </div>
                                <div className="profile-form">
                                    <label htmlFor="grade">Grade*</label>
                                    <select value={formValues.grade} name="grade" id="grade" required onChange={onChange}>
                                        <option value=""></option>
                                        <option value="Pre-K">Pre-K</option>
                                        <option value="K">K</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                    <span>Your current grade.</span>
                                </div>
                            </>
                        }

                        <div className="profile-form">
                            <label htmlFor="gender">Gender*</label>
                            <select value={formValues.gender} name="gender" id="gender" required onChange={onChange}>
                                <option value=""></option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                                <option value="Nottosay">Prefer not to say</option>
                            </select>
                        </div>
                        <div className="profile-form">
                            <label htmlFor="phone">Phone*</label>
                            <input type="tel" name="phone" id="phone" value={formValues.phone} pattern="[0-9]{10}" required onChange={onChange} />
                            <span>Your mobile or home phone. <br />Format: 1234567890</span>
                        </div>
                        <div className="profile-form">
                            <label htmlFor="zip">Zip code*</label>
                            <input type="text" name="zip" id="zip" value={formValues.zip} pattern="[0-9]{5}" required onChange={onChange} />
                            <span>Zip code of your home or school. <br />Format: 12345</span>
                        </div>

                        {(formValues.role==="Autistic Child" || formValues.role==="Volunteer") &&
                            <>
                                <div className="profile-form">
                                    <label htmlFor="interest">Interest</label>
                                    <textarea name="interest" id="interest" maxLength="200" rows="3" value={formValues.interest} onChange={onChange} />
                                    <span>(Optional) Your interest, e.g. basketball, swimming, drawing, etc.<br />No more than 200 characters</span>
                                </div>
                                <div className="profile-form">
                                    <label htmlFor="availability">Availability</label>
                                    <textarea name="availability" id="availability" maxLength="200" rows="3" value={formValues.availability} onChange={onChange} />
                                    <span>(Optional) Your preferred time to attend IB activities, e.g. every Sunday morning, every 2pm-5pm in summer<br />No more than 200 characters</span>
                                </div>
                            </>
                        }

                        <div className="profile-content">
                            <p><b>Accident Waiver and Release of Liability</b></p>
                            <p>I hereby hold International Buddy Organization and related parties and individuals/volunteers harmless and release all said organization and individuals from any and all liability, including but not limited to, claims for negligence, personal injury, illness, property damage, property theft, or actions of any kind, as a result of participation in any International Buddy Organization sponsored
events and activities.</p>
                            <p>I understand that volunteers act as role model and play pal for my kid. I am the sole responsible party for my child (children)’s well being. I will be within reach of my child(children)’s activity during the entire process.</p>
                            <p>I authorize volunteer of International Buddy to play with my child.</p>
                            <p>In order to share the value to the work of International Buddy Organization, we will take group photographs of events. We would appreciate your authorization to use the photographs in our website for such purpose. These group pictures will only be used within our organization.</p>
                            <p>I certify that I have read this document carefully and I fully understand its content. I hereby agree to the release of liability, group photo disclosure, and sign it of my own free will.</p>
                        </div>
                        <div className="profile-content">
                            <input type="checkbox" name="waivercheck" id="waivercheck" checked={formValues.waivercheck} required onChange={onChangeCheckbox} />
                            <label htmlFor="waivercheck">By selecting this checkbox and providing names in below input boxes, you are agreeing to the above Accident Waiver and Release of Liability*</label>
                        </div>
                        {(formValues.role==="Volunteer") &&
                        <div className="profile-content">
                            <input type="checkbox" name="trainingcheck" id="trainingcheck" checked={formValues.trainingcheck} required onChange={onChangeCheckbox} />
                            <label htmlFor="trainingcheck">By selecting this checkbox and providing names in below input boxes, you are agreeing that you have completed or will complete all the trainings in <Link to="/training">volunteer training page</Link> before attending any activity or event arranged or sponsored by International Buddy*</label>
                        </div>
                        }
                        {(formValues.role==="Autistic Child") &&
                        <div className="profile-form">
                            <label htmlFor="childname">Child's Name*</label>
                            <input type="text" name="childname" id="childname" value={formValues.childname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                            <span>Please input the name of the child who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                        </div>
                        }
                        {(formValues.role==="Volunteer") &&
                        <div className="profile-form">
                            <label htmlFor="childname">Volunteer's Name*</label>
                            <input type="text" name="childname" id="childname" value={formValues.childname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                            <span>Please input the name of the volunteer who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                        </div>
                        }
                        {(formValues.role==="Autistic Child" || formValues.role==="Volunteer")?  
                        <div className="profile-form">
                            <label htmlFor="guardianname">Parent / Guardian's Name*</label>
                            <input type="text" name="guardianname" id="guardianname" value={formValues.guardianname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                            <span>Please input the name of the adult who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                        </div>
                        :
                        <div className="profile-form">
                            <label htmlFor="guardianname">Your Name*</label>
                            <input type="text" name="guardianname" id="guardianname" value={formValues.guardianname} pattern="^[A-Za-z0-9\s]{5,50}$" required onChange={onChange} />
                            <span>Please input your name who will participate events sponsored by International Buddy<br />Shall be 5-50 characters without any special character</span>
                        </div>
                        }
                        <button>Submit</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default Profile;