import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/Authcontext';
import './Pastevents.css';
import { db } from "../firebase";
import { collection, query, orderBy, getDocs, limit } from 'firebase/firestore';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const Pastevents = () => {
  const { user } = UserAuth();
  const [images, setImages] = useState([]);
  const [records, setRecords] = useState([]);
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
  const pasteventsTextStyle = [
    "pastevents-text-style-1",
    "pastevents-text-style-2",
  ]

  useEffect(() => {
    const getRecords = async () => {
      const q = query(collection(db, "event_records"), orderBy("time", "desc"), limit(20));
      const data = await getDocs(q);
      setRecords(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      
      let imagesTemp = Array.from({length: 20}, () => []);  // temporarily store the urls of images in the format required by the slider
      data.docs.map((doc, key) => { 
        // doc.data() is never undefined for query doc snapshots
        console.log("Pastevents: ", key, " | ", doc.id, " => ", doc.data());

        if(doc.data().photoprivacy) { // old data does not have this field
          let countIndex = 0;
          for (let i = 0; i < doc.data().photourls.length; i++) {
            // add the photo to images when user is registered or the photo is public (photoprivacy is 0)
            console.log("Pastevents: images: ", i, ": ", doc.data().photoprivacy[i], ": ", doc.data().photourls[i]);
            if((user && user.email) || (doc.data().photoprivacy[i] === 0)) {
              imagesTemp[key][countIndex] = { original: doc.data().photourls[i], originalHeight: 400 };
              countIndex++;
            }
          }
        } else {
          for (let i = 0; i < doc.data().photourls.length; i++) {
            console.log("Pastevents: images: ", i, ": ", doc.data().photourls[i]);
            imagesTemp[key][i] = { original: doc.data().photourls[i], originalHeight: 400 };
          }          
        }
      })
      setImages(imagesTemp);
    }

    getRecords();
  }, [user])

  // console.log("Pastevents: records: ", records);
  // console.log("Pastevents: images: ", images);

  return (
    <div className="pastevents">
      <div className="pastevents-title">
        News
      </div>
      <div className="pastevents-text-container">
      {records.map((record, key) => {
        const dateTimeValue = record.time.split("T");
        const dateValue = dateTimeValue[0].split("-");

        return (
          <div className={(key%2===0)?pasteventsTextStyle[0]:pasteventsTextStyle[1]} key={key}>
            <div className="pastevents-text">
              <p><b>
                {record.name} <br />
                {monthConversion[Number(dateValue[1])]} {dateValue[2]}, {dateValue[0]} {dateTimeValue[1]} <br />
                {record.location} <br />
              </b></p>
              <p>
                {record.description}
              </p>
            </div>
            <div className="pastevents-slider">
              {(images[key].length > 1)&& 
                  <ImageGallery
                  items={images[key]}
                  showPlayButton={true}
                  showFullscreenButton={false}
                  showIndex={false}
                  slideInterval={2500}
                  showThumbnails={false}
                  showBullets={true}
                />
              }
              {(images[key].length === 1)&& 
                  <img src={images[key][0].original} alt="event" />
              }
            </div>
          </div>
        )
      })}

      </div>
    </div>
  )
}

export default Pastevents