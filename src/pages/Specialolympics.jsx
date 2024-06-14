import React from 'react';
import "./Specialolympics.css";
import featuredImg1 from '../assets/specialolympics.jpg';
import featuredImg2 from '../assets/specialolympics_photo.jpg';
import { Link } from 'react-router-dom';

const Specialolympics = () => {
  return (
    <div className="specialolympics">
      <div className="specialolympics_container">
        <img src={featuredImg1} alt="Featured1" width="1000" />
        <img src={featuredImg2} alt="Featured2" width="1000" />
      </div>
      <div className="specialolympics_container">
        <div className="specialolympics_title">
        Washington Special Olympics
        </div>
        <div>
          <p>We are very excited to announce that International Buddy will be participating in the upcoming Washington Special Olympics!</p>
          <p>There will be 5 teams formed that matches the current activities in IB: Swimming, Track, Soccer, Basketball, and Tennis. </p>
          <p>All athletes are encouraged to attend and will need to register by mid-October on the Special Olympics registration portal for eligibility and training qualification: </p>
          <ul>
            <li>International Buddy Athlete Team Registration: <Link to="/specialolympicsreg">Click here</Link></li>
            <li>Athlete Registration Portal: <a href="https://portals.specialolympics.org/" target="_blank" rel="noopener">portals.specialolympics.org</a></li>
            <li>Athlete Registration Steps: <a href="https://specialolympicswashington.org/become-an-athlete/" target="_blank" rel="noopener">specialolympicswashington.org/become-an-athlete/</a></li>
            <li>Sign up International Buddy's upcoming activities, incl. Special Olympics Training: <Link to="/upcomingevents">Click here</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Specialolympics