import React, { useState, useEffect, useRef } from 'react';
import { UserAuth } from '../context/Authcontext';
import { db } from "../firebase";
import { collection, query, orderBy, doc, where, getDocs, limit, arrayUnion, arrayRemove, updateDoc, runTransaction } from 'firebase/firestore';
import './Upcomingevents.css';
import { Button, Line } from '../components';
import Swal from 'sweetalert2';

const Upcomingevents = () => {
  const { user, memberIndex } = UserAuth();
  const [userData, setUserData] = useState();
  const [records, setRecords] = useState([]);
  const [forceGetDocs, setForceGetDocs] = useState(0);
  const ifShowAlert = useRef(1); // show alert if user not signed in, or user does not have profile, or user role not match

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
  const upcomingeventsTextStyle = [
    "upcomingevents-text-style-1",
    "upcomingevents-text-style-2",
  ]

  const onSignUpClick = (recordId, key) => {
    if (user && user.email && (userData != null)) {
      Swal.fire({
        title: 'Confirm Your Sign Up',
        inputLabel: 'Comment (optional): ',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#005D8B',
        showLoaderOnConfirm: true,
        preConfirm: (comment) => {
          return signUpSubmit(recordId, key, comment)
        },
      })
    } else {
      Swal.fire({
        title: 'Warning',
        text: 'Please sign in and/or update your profile first!',
        icon: 'warning',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      });
    }
  }

  const signUpSubmit = async (recordId, key, comment) => {
    console.log("Sign up submit: ", recordId, "|", key, "|", comment);
    const random10000 = Math.floor(Math.random() * 9000) + 1000;  // get a random integer from 1000 to 9999
    const sComment = random10000 + "_" + comment; // add a 4 digits number and _ before the actual comment, to make it unique
    const ref = doc(db, "event_upcomings", recordId);
    try {

      const newSignup = await runTransaction(db, async (transaction) => {
        const eventDoc = await transaction.get(ref);
        if (!eventDoc.exists()) return Promise.reject("Sign up submit: document does not exist!");

        // check if the user has signed up this event already
        if (eventDoc.data().uniquesignup && eventDoc.data().uniquesignup === true) {
          let signupFound = false;
          let tempUserID = user.email;
          if(memberIndex > 0) tempUserID = tempUserID + "_" + memberIndex;
          for(let i=0; i<eventDoc.data().activities; i++) {
            eventDoc.data()[i + 101].signup.map((signupData) => {
              console.log("signupData.email:user.email: ", signupData.email, ":", tempUserID);
              if(signupData.email === tempUserID) {
                signupFound = true;
              } 
            })
          }
          if(signupFound) return Promise.reject("Sign up submit: you cannot signup more than once in this event!");
        }

        const availableNumbers = eventDoc.data()[key + 101].maxs - eventDoc.data()[key + 101].signup.length;  // length of "signup" array shows how many people registered this activity
        console.log("signUpSubmit: available numbers: ", availableNumbers);
        if (availableNumbers > 0) {
          let tempUserID = user.email;
          if(memberIndex > 0) tempUserID = tempUserID + "_" + memberIndex;

          transaction.update(ref, {
            [`${key + 101}.signup`]: arrayUnion({email: tempUserID, name: userData[memberIndex].name, grade: userData[memberIndex].grade, phone: userData[memberIndex].phone, comment: sComment}),  // key starts from 0, the activity id starts from 101; "email" stores the ID of the user document, not the actual email
          });

          return (availableNumbers - 1);
        } else {
          return Promise.reject("Sorry! all slots filled already.");
        }
      });
      console.log("signUpSubmit: available slots: ", newSignup);

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

    } finally {
      setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
    }
  }

  const onCancelClick = (recordId, key, comment, phone) => {
    if (user && user.email && (userData != null)) {
      Swal.fire({
        title: 'Confirm to Cancel',
        showCancelButton: true,
        confirmButtonText: 'Confirm',
        confirmButtonColor: '#005D8B',
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return cancelSubmit(recordId, key, comment, phone)
        },
      })
    } else {
      Swal.fire({
        title: 'Warning',
        text: 'Please sign in and/or update your profile first!',
        icon: 'warning',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      });
    }
  }

  const cancelSubmit = async (recordId, key, comment, phone) => {
    console.log("Cancel submit: ", recordId, "|", key);
    const ref = doc(db, "event_upcomings", recordId);
    try {

      let tempUserID = user.email;
      if(memberIndex > 0) tempUserID = tempUserID + "_" + memberIndex;

      if(phone) { // phone has a value
        await updateDoc(ref, {
          [`${key + 101}.signup`]: arrayRemove({email: tempUserID, name: userData[memberIndex].name, grade: userData[memberIndex].grade, phone: userData[memberIndex].phone, comment: comment}),  // key starts from 0, the record in Firestore starts from 101; 
        });
      } else {  // phone is none
        await updateDoc(ref, {
          [`${key + 101}.signup`]: arrayRemove({email: tempUserID, name: userData[memberIndex].name, grade: userData[memberIndex].grade, comment: comment}),  // key starts from 0, the record in Firestore starts from 101; 
        });
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

    } finally {
      setForceGetDocs((currentForceGetDocs) => { return (currentForceGetDocs + 1) });   // Trigger useEffect to getDocs again for updated info
    }
  }

  const onNAClick = () => {
    // user clicked N/A button, "1" means user not signed in or user does not have profile
    if (ifShowAlert.current === 1) {
      Swal.fire({
        title: 'Warning',
        text: 'Please sign in and update your profile before signing up an event!',
        icon: 'warning',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      })
    } else if (ifShowAlert.current === 2) { // "2" means user's role does not match this activity
      Swal.fire({
        title: 'Warning',
        text: 'This activity does not match your role!',
        icon: 'warning',
        iconColor: '#A5C727',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A5C727'
      })
    }
  }

  useEffect(() => {
    ifShowAlert.current = 1; // reset this useRef to default value; assume user not signed in or does not have profle

    const getRecords = async () => {
      const q = query(collection(db, "event_upcomings"), orderBy("priority"), orderBy("starttime", "desc"), limit(150));
      try {
        const data = await getDocs(q);
        
        // setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setRecords(data.docs.toReversed().map((doc) => ({ ...doc.data(), id: doc.id }))); // reverse the array to sort asc of starttime
        
        // data.docs.map((doc, key) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   console.log("upcomingevents: getRecords: ", key, " | ", doc.id, " => ", doc.data());
        // })

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

    const getUserData = async () => {
      setUserData(null);

      const q = query(collection(db, "users"), where("email", "==", user.email));
      let tempUserData = [];
      try {
          const docSnap = await getDocs(q);
          docSnap.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              tempUserData.push(doc.data());
          });
          setUserData(tempUserData);

          ifShowAlert.current = 2;  // this user has signed in and has profile already
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

    console.log("upcomingevents: useEffect");
    
    getRecords();
    if (user && user.email) getUserData();
    else setUserData(null); // not login yet

  }, [user, forceGetDocs])

  console.log("upcomingevents: records: ", records);
  console.log("upcomingevents: userData: ", userData);
  let activityIndex = 0;

  return (
    <div className="upcomingevents">
      <div className="upcomingevents-title">
        Upcomings
      </div>
      <div className="upcomingevents-text-container">
        {records.map((record, key) => {

          const startDateTimeValue = record.starttime.split("T");
          const startDateValue = startDateTimeValue[0].split("-");
          const endDateTimeValue = record.endtime.split("T");
          const endDateValue = endDateTimeValue[0].split("-");
          const startDate = new Date(record.starttime);
          const planedDate = new Date(startDate.getTime() + 24*60*60*1000);     // shift start time to 24 hours later to make the sign up open 1 day longer
          const nowDate = new Date();
          let activities = [];
          for (let i = 0; i < record.activities; i++) {
            activities[i] = record[i + 101];
          }

          if (planedDate >= nowDate) {   // only show events no earlier than today
            activityIndex++;
            return (
              <>
              <div className={(activityIndex % 2 === 0) ? upcomingeventsTextStyle[0] : upcomingeventsTextStyle[1]} key={key} id={record.id}>
                <div className="upcomingevents-text">
                  <div className="upcomingevents-text-title">
                    <a href={"#" + record.id}>{activityIndex}. {record.name}</a><br />
                  </div>
                  <p><b>
                    {(monthConversion[Number(startDateValue[1])] + " " + startDateValue[2] + ", " + startDateValue[0] + " " + startDateTimeValue[1] + " - ")}
                    {((endDateValue[1] !== startDateValue[1]) || (endDateValue[2] !== startDateValue[2])) ? (monthConversion[Number(endDateValue[1])] + " " + endDateValue[2] + ", " + endDateValue[0] + " " + endDateTimeValue[1]) : (endDateTimeValue[1])} <br />
                    {record.location} <br />
                  </b></p>
                  <p>
                    {record.description}
                  </p>
                </div>
                <div className="upcomingevents-text">

                  {activities.map((activity, akey) => {
                    let registered = false; // variable to check if the current user has signed up this activity
                    let registeredComment = ""; // variable to store the comment added by the current user
                    let registeredPhone = "";   // variable to store the phone of the current user, it can be none
                    const availableSlots = activity.maxs - activity.signup.length;
                    let typeMatch = 
                      (
                        (userData) && 
                        (
                          ((activity.type === "All") && (userData[memberIndex].role === "Autistic Child" || userData[memberIndex].role === "Volunteer")) 
                          || 
                          (activity.type === userData[memberIndex].role)
                        )
                      ) ? true : false;  // if the type of this activity matches the role of the current user
                    return (
                      <div key={akey}>
                        <Line color="--blue-color" width="100%" />
                        <div className="upcomingevents-activity-container">
                          <div className="upcomingevents-activity">
                            <div className="upcomingevents-activity-info">
                              <b>{activity.name}</b> <br />
                              {(activity.type==="Autistic Child")? <Button type="button smallButton" text="Child" /> : <Button type="button smallButton" text={activity.type} />}
                              
                              {availableSlots} of {activity.maxs} slots available<br />
                            </div>
                            {activity.signup.map((signupData, skey) => {
                              if (userData && userData[memberIndex].name === signupData.name) { // current user has registered this activity
                                registered = true;
                                registeredComment = signupData.comment;
                                if(signupData.phone) registeredPhone = signupData.phone;
                              }
                              return (
                                <div className="upcomingevents-activity-person" key={skey}>{skey+1}.&nbsp;<b>{signupData.name}</b>&nbsp;(Grade&nbsp;{signupData.grade}): {signupData.comment.substring(5)}</div>   // the comment has "XXXX_" prefix to make each comment unique, which needs to be removed before display
                              )
                            })}
                          </div>
                          <div className="upcomingevents-button">
                            {typeMatch ? ( // check if the type of this activity matches the role of the current user
                              registered ?   // if user registered, show "cancel" button
                                <Button type="button greenButton" text="&nbsp;Cancel&nbsp;" onClick={() => onCancelClick(record.id, akey, registeredComment, registeredPhone)} />
                                :
                                ((availableSlots > 0) ? // if user not signed up yet, show "full" button or "sign up" button
                                  <Button type="button blueButton" text="Sign Up" onClick={() => onSignUpClick(record.id, akey)} />
                                  :
                                  <Button type="button whiteButton" text="&nbsp;&nbsp;&nbsp;Full&nbsp;&nbsp;&nbsp;&nbsp;" />
                                )
                            )
                              : // if not match, the current user cannot sign up this activity
                              <Button type="button whiteButton" text="&nbsp;&nbsp;&nbsp;N/A&nbsp;&nbsp;&nbsp;&nbsp;" onClick={onNAClick} />}
                          </div>
                        </div>
                      </div>
                    )
                  })}

                </div>
                <div className="upcomingevents-slider">
                  {record.photourls[0] && <img src={record.photourls[0]} alt="Event" />}
                </div>
                <div className="upcomingevents-blank">
                  <p></p>
                </div>
              </div>

              </>
            )
          }

        })}

      </div>
    </div>

  )
}

export default Upcomingevents