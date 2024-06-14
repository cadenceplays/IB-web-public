import React from 'react';
import "./History.css";
import featuredImg from '../assets/remlinger-farms.jpg';

const History = () => {
  return (
    <div className="history">
      <div className="history_container">
        <img src={featuredImg} alt="Featured"/>
      </div>
      <div className="history_container">
        <div className="history_title">
              History
        </div>
        <div>
          <p>International Buddy was founded in 2018 by a group of students from the International School of Bellevue who were passionate about helping neurodivergent children grow and thrive.</p>
          <p>We started off as a group of students who had a passion for helping the children and teens on the spectrum. Many of us have neurodivergent family members and friends who inspired us to address the struggles they faced. </p>
          <p>We started to host social events and parent nights to create communities where children on the spectrum and their families could support each other. Since our humble beginnings in 2018, we have expanded to include members from various schools, states, and backgrounds. </p>
        </div>
      </div>
    </div>
  )
}

export default History