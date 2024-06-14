import React, { useState, useEffect } from 'react';
import { db } from "../../firebase";
import { collection, query, where, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import './activities.css';
import { Link } from 'react-router-dom';

const Activitiescontent = () => {
    const [records, setRecords] = useState([]);
    const [weekdays, setWeekdays] = useState([]);    // array of the weekdays which have activities
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

    const onCommentClick = (comment) => {
        Swal.fire({
            title: 'Info',
            text: `${comment}`,
            icon: 'info',
            iconColor: '#A5C727',
            confirmButtonText: 'OK',
            confirmButtonColor: '#A5C727'
        });
    }

    useEffect(() => {
        const getRecords = async () => {
            const q = query(collection(db, "weekly_template"), where("active", "==", true));
            try {
                const data = await getDocs(q);
                let weekdayArray = [];
                let weekdayCurrent = 0;

                setRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                data.docs.map((doc, key) => {
                    if (doc.data().weekday > weekdayCurrent) {
                        weekdayCurrent = doc.data().weekday;
                        weekdayArray.push(weekdayCurrent);
                    }
                    // doc.data() is never undefined for query doc snapshots
                    // console.log("activitiescontent: getRecords: ", key, " | ", doc.id, " => ", doc.data());
                })
                setWeekdays(weekdayArray);
                // console.log("activitiescontent: getRecords: weekdayArray: ", weekdayArray);

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

        getRecords();
    }, [])    // run only once after loading


    console.log("activitiescontent: records: ", records);


    let cssClass = "";
    let weekdayNumber = 0;
    let oneDayActivities = [];
    let allActivities = [];

    records.map((record, key) => {
        if (weekdayNumber < record.weekday) {    // first record, or entering a new weekday
            if (weekdayNumber > 0) { // this is not the first time entering this {}, need to push the activities of the previous weekday into the 2-dimensional array
                allActivities.push(oneDayActivities);
            }

            weekdayNumber = record.weekday;
            oneDayActivities = [];
            oneDayActivities.push(record);

        } else {    // still the same weekday
            oneDayActivities.push(record);
        }
    });
    allActivities.push(oneDayActivities);   // need to push the activities of the last weekday in records

    let containerClass = "activities-container activities-container-" + weekdays.length;
    const nowDate = new Date();

    console.log("activitiescontent: allActivities: ", allActivities);

    return (
        <div className={containerClass}>
            {
                weekdays.map((weekday, key) => {
                    cssClass = "activities-cell activities-1" + (key + 1);
                    return (
                        <div className={cssClass} key={key}>
                            <div className="activities-button-title">
                                {weekdayConversion[weekday]}
                            </div>
                        </div>
                    )
                })
            }

            {
                allActivities.map((dayActivities, key) => {
                    cssClass = "activities-cell activities-2" + (key + 1);
                    return (
                        <div className={cssClass} key={key}>
                            {dayActivities.map((activity, akey) => {

                                const startDate = new Date(activity.nextdate);
                                const planedDate = new Date(startDate.getTime() + 24*60*60*1000);     // shift start time to 24 hours later to make the sign up open 1 day longer

                                if (planedDate >= nowDate && activity.link) {
                                    return(
                                    <Link to="/upcomingweekly" state={{ data: activity }}>
                                        <div className="activities-button-link" key={akey}>
                                            <b>{activity.name}</b><br />
                                            @ {activity.location}<br />
                                            {activity.time}
                                        </div>
                                    </Link>
                                    )
                                } else {
                                    if(activity.comment) {
                                        return (
                                            <div className="activities-button-comment" key={akey} onClick={() => onCommentClick(activity.comment)}>
                                                <b>{activity.name}</b><br />
                                                @ {activity.location}<br />
                                                {activity.time}
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div className="activities-button" key={akey}>
                                                <b>{activity.name}</b><br />
                                                @ {activity.location}<br />
                                                {activity.time}
                                            </div>
                                        )
                                    }
                                }
                            })}
                        </div>
                    )
                })
            }
        </div>
    )


}

export default Activitiescontent