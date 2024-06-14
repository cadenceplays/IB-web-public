import React from 'react'
import "./Whatwedo.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import { Button } from '../components';

const doImages = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-14T04_57_32.743Z_6_6432.jpg?alt=media&token=4063d321-4855-4206-ad1f-511fca040898',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-29T06_12_42.764Z_4_350.jpg?alt=media&token=1b33379b-8d4e-4ce2-99dc-e7d1bdb79169',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-29T06_17_33.760Z_4_7482.jpg?alt=media&token=387881a0-58c6-45c1-9f21-d54cc9d031e5',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-07-05T20_39_34.934Z_0_2887.jpg?alt=media&token=30ce31a4-0026-402d-8bb0-951838c4948f',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-07-10T05_09_06.268Z_4_7167.jpg?alt=media&token=b4bfc911-466b-4805-a268-0386efb8fe4a',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-07-12T04_31_29.747Z_4_3885.jpg?alt=media&token=d6bcc764-cfbb-4b02-8448-ecdc8be203a8',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-07-12T04_57_47.851Z_0_6052.jpg?alt=media&token=4daeb3e7-3865-4c4a-ab37-9331dbe66271',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2FWeChat%20Image_20230722202634.jpg?alt=media&token=0a789c1a-f38e-438f-9f1e-b1af9b5a1084',
    originalHeight: 400,
  },
];

const Whatwedo = () => {
  return (
    <div className="do">
      <div className="do_slider">

        <ImageGallery
          items={doImages}
          showPlayButton={true}
          showFullscreenButton={false}
          showIndex={false}
          slideInterval={2300}
          showThumbnails={false}
          showBullets={true}
          autoPlay={true}
          showNav={false}
        />

      </div>
      <div className="do_container">
        <div className="do_title">
          <p>What we do</p>
        </div>
        <div>
          <p>International Buddy is committed to helping autistic children thrive despite the potential language and financial barriers, spreading awareness, gathering volunteers, and hosting activities for the children.</p>
          <p>We arrange regular activities and special events for families and provide useful information and resources through our website. We also collaborate with local schools through International Buddy school clubs run by our volunteers.</p>
          <p>We welcome new families and volunteers to join!</p>
        </div>

        <div className="do_title">
          <p>Weekly Activities</p>
          <Link to="/weekly"><Button type="button greenButton" text="More" /></Link>
        </div>
        <div className="goofy">- Sports</div>
        <div className="left">
          International Buddy hosts multiple sports activities each week in east side cities like Bellevue, Issaquah, Redmond, Mercer Island and more. Our regular sports activities include swimming, tennis, basketball, soccer and special olympics training.
        </div>
        <div className="goofy">- Art & More</div>
        <div className="left">
          We host drawing and chess activities each week. Join us for delightful and inclusive drawing activities for our young artists led by experienced volunteers! Join us for fun chess games. We have a wide range of chess players, from beginners to masters.
        </div>
        <div className="goofy">- Social & More</div>
        <div className="left">
          Each week, our volunteers and kids help The Salvation Army by providing meals to support local families in need. Come learn social skills and give back to the community. 
        </div>

        <div className="do_title">
          <p>Special Events</p>
          <Link to="/specialevents"><Button type="button greenButton" text="More" /></Link>
        </div>
        <div className="left">
          Throughout the year, International Buddy hosts various types of ad-hoc events. In the past year, we arranged sports related events, such as fencing 101 and badminton 101; excursion events like Wild Waves Park tour; fundraising events like garage sale; as well as our amazing volunteer appreciation party and summer camp.  
        </div>
      </div>
    </div>
  )
}

export default Whatwedo