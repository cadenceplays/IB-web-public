import React, { useState, useEffect } from 'react';
import './recent.css';
import { Link } from 'react-router-dom';
import {Button} from '../';
import { db } from "../../firebase";
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Recent = () => {
  const [images, setImages] = useState([]);
  const initRecordValues = {
    name: "",
    time: "",
    location: "",
    duration: "",
    description: "",
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
      const q = query(collection(db, "event_records"), orderBy("time", "desc"), limit(1));
      const data = await getDocs(q);
      data.forEach((doc) => { // as "limit(1)" was used in query, there is only one doc actually
        // doc.data() is never undefined for query doc snapshots
        console.log("recent: ", doc.id, " => ", doc.data());

        for (let i = 0; i < doc.data().photourls.length; i++) {
          imagesTemp[i] = {original: doc.data().photourls[i], originalHeight: 400};
        }
        setImages(imagesTemp);

        setRecordValues({
          name: doc.data().name,
          time: doc.data().time,
          location: doc.data().location,
          duration: doc.data().duration,
          description: doc.data().description,
        })
      });
    }
  
    getRecords();
}, [])

console.log("recent: images: ", images);
console.log("recent: recordValues: ", recordValues);
const dateTimeValue = recordValues.time.split("T");
const dateValue = dateTimeValue[0].split("-");

return (
  <div className="recent">
    <div className="recent-text-container">
      <div className="recent-title-container">
        <div className="recent-title">
          News
        </div>
        <Link to="/pastevents"><Button type="button greenButton" text="More" /></Link>
      </div>
      <div>
        <p><b>
          {recordValues.name} <br />
          {monthConversion[Number(dateValue[1])]} {dateValue[2]}, {dateValue[0]} {dateTimeValue[1]} <br />
          {recordValues.location} <br />
        </b></p>
        <p>
          {recordValues.description}
        </p>
      </div>


    </div>
    <div className="recent-slider">

      <ImageGallery 
        items={images}
        showPlayButton={true}
        showFullscreenButton={false}
        showIndex={false}
        slideInterval={2500}
        showThumbnails={false}
        showBullets={true}
      />

    </div>
  </div>
)
}

export default Recent