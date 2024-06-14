import React from 'react';
import "./Donate.css";
import featuredImg from '../assets/usnew-1-1024x615.png';

const Donate = () => {
  return (
    <>
      <div className="donate">
        <div className="donate_container">
          <img src={featuredImg} alt="Featured" />
        </div>
        <div className="donate_container">
          <div className="donate_title">
            donate
          </div>
          <div>
            <p> Please send your donation through one of the following three methods.</p>
            <ul>
              <li>Zelle to <b>support@internationalbuddy.org</b></li>
              <li>Write a check payable to “<b>International Buddy</b>” and mail it to our treasurer at<br/><br/><b>International Buddy<br/>1915 140th Ave NE<br/>Ste D2<br/>#467<br/>Bellevue, WA 98005<br/>United States</b></li>
              <li>Online donation through our website <br /> (under construction)</li>
            </ul>
            <p>We earnestly thank you for your donation. </p>
          </div>
        </div>
      </div>
      {/* <div className="donate">
        <div className="donate_container">
        <div className="donate_title">
          our sponsors
        </div>
        <div>
          <ul>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>XXXX</li>
            <li>XXXX</li>
          </ul>
          <p>We sincerely thank all our sponsors for the support!</p>
        </div>
        </div>
      </div> */}
    </>
  )
}

export default Donate