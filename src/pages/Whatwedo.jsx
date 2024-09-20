import React from 'react'
import "./Whatwedo.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import { Button } from '../components';

const doImages = [
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-29T06_12_42.764Z_4_350.jpg?alt=media&token=1b33379b-8d4e-4ce2-99dc-e7d1bdb79169',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2024-01-29T17_11_51.881Z_4_3639.jpg?alt=media&token=861c484f-a0db-46ca-8bc8-ba1ecf7c18b6',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2FWeixin%20Image_20240917154240.jpg?alt=media&token=91e05912-8c12-4a39-897c-812931d65a69',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-07-12T04_31_29.747Z_4_3885.jpg?alt=media&token=d6bcc764-cfbb-4b02-8448-ecdc8be203a8',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2024-06-26T04_45_20.725Z_0_6405.jpg?alt=media&token=6a9c04b2-1274-4083-93ff-2c72c89f51cb',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2FWeChat%20Image_20230722202634.jpg?alt=media&token=0a789c1a-f38e-438f-9f1e-b1af9b5a1084',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2FWeixin%20Image_20240816115816.jpg?alt=media&token=c5bafb7b-6488-4cfc-b7e8-df12c5e97f8f',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2024-07-07T04_51_29.094Z_1_2638.jpg?alt=media&token=e556e2da-8512-4735-a544-1666649c3bcd',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-14T04_57_32.743Z_6_6432.jpg?alt=media&token=4063d321-4855-4206-ad1f-511fca040898',
    originalHeight: 400,
  },
  {
    original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/what_we_do%2F2023-06-29T06_17_33.760Z_4_7482.jpg?alt=media&token=387881a0-58c6-45c1-9f21-d54cc9d031e5',
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
          <p>Our Mission, Vision & Values</p>
        </div>
        <div className="goofy">- Mission</div>
        <div className="left">
          Foster an inclusive and accessible community where neurodivergent children and youth are empowered to reach their full potential.
        </div>
        <div className="goofy">- Vision</div>
        <div className="left">
          A world where neurodivergent children and youth are embraced and uplifted by a growing network of dedicated and compassionate volunteers.
        </div>
        <div className="goofy">- Values</div>
        <div className="left">
        · Compassion: We strive to be kind and caring in all our interactions with one another.<br />
        · Commitment: We take ownership and fulfill our promises.<br />
        · Collaboration: We work together and support each other.<br />
        · Consistency: We build trust with consistent actions.<br />
        · Creativity: We think outside the box and solve problems.<br />
        </div>

        <div className="do_title">
          <p>What we do</p>
        </div>
        <div>
          <p>International Buddy is committed to spreading awareness, gathering volunteers, hosting activities and helping autistic children thrive despite the potential language and financial barriers.</p>
          <p>We arrange weekly activities and special events for families and provide useful information and resources through our website. We also collaborate with local schools through International Buddy school clubs run by our volunteers.</p>
          <p>We welcome new families and volunteers to join!</p>
        </div>


        <div className="do_title">
          <p>Weekly Activities</p>
          <Link to="/weekly"><Button type="button greenButton" text="More" /></Link>
        </div>
        <div className="goofy">- Sports</div>
        <div className="left">
          International Buddy hosts multiple sports activities each week in east side cities like Bellevue, Issaquah, Redmond, Mercer Island and more. Our regular sports activities include swimming, tennis, basketball, badminton, soccer and Special Olympics training.
        </div>
        <div className="goofy">- Art & More</div>
        <div className="left">
          We host drawing, chess and reading activities each week. Join us for delightful and inclusive drawing activities for our young artists led by experienced volunteers! Join us for fun chess games. We have a wide range of chess players, from beginners to masters.
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
          Throughout the year, International Buddy hosts various types of ad-hoc events. In the past year, we arranged sports related events, such as skiing and fencing; excursion events like Wild Waves Park tour; fundraising events like yard sale; party events such as Halloween party and volunteer appreciation party, as well as our amazing summer camp and much more. <br/>&nbsp;
        </div>
      </div>
    </div>
  )
}

export default Whatwedo