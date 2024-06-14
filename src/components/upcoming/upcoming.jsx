import React, { useState, useEffect } from 'react';
import './upcoming.css';
import {Button} from '../';
import { db } from "../../firebase";
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const Upcoming = () => {
  const initRecordValues = {
    name: "",
    starttime: "",
    endtime: "",
    location: "",
    duration: "",
    description: "",
    photourls: "",
  };
  const [recordValues, setRecordValues] = useState(initRecordValues); 
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

useEffect(() => {
  const getRecords = async () => {
    let imagesTemp = []; 
    const q = query(collection(db, "event_upcomings"), orderBy("starttime", "desc"), limit(1));
    const data = await getDocs(q);
    data.forEach((doc) => { // as "limit(1)" was used in query, there is only one doc actually
      // doc.data() is never undefined for query doc snapshots
      console.log("recent: ", doc.id, " => ", doc.data());

      setRecordValues({
        name: doc.data().name,
        starttime: doc.data().starttime,
        endtime: doc.data().endtime,
        location: doc.data().location,
        duration: doc.data().duration,
        description: doc.data().description,
        photourls: doc.data().photourls[0],   // upcoming events shall only have one image
      })
    });
  }

  getRecords();
}, [])

const startDateTimeValue = recordValues.starttime.split("T");
const startDateValue = startDateTimeValue[0].split("-");
const endDateTimeValue = recordValues.endtime.split("T");
const endDateValue = endDateTimeValue[0].split("-");
console.log("upcoming: recordValues: ", recordValues);

  return (
    <div className="upcoming">
      <div className="upcoming-text-container">
        <div className="upcoming-title">
          Sign up for upcomings
        </div>
        <div>
          <p><b>
            {recordValues.name} <br />
            {(monthConversion[Number(startDateValue[1])] + " " + startDateValue[2] + ", " + startDateValue[0] + " " + startDateTimeValue[1] + " - ")}
            {((endDateValue[1] !== startDateValue[1]) || (endDateValue[2] !== startDateValue[2])) ? (monthConversion[Number(endDateValue[1])] + " " + endDateValue[2] + ", " + endDateValue[0] + " " + endDateTimeValue[1]) : (endDateTimeValue[1])} <br />
            {recordValues.location} <br />
          </b></p>
          <p>
            {recordValues.description}
          </p>
        </div>
      </div>
      <div className="upcoming-img-container">
        {(recordValues.photourls) && (<img src={recordValues.photourls} alt="Advertisement" />)}
      </div>
      <div className="upcoming-button-container">
        <Link to="/Upcomingevents"><Button type="button greenButton" text="Sign Up" /></Link>
      </div>
    </div>
  )
}

export default Upcoming