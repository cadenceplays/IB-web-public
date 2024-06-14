import React from 'react';
import "./Volunteer.css";
import featuredImg from '../assets/volunteer.jpg';
import { Link } from 'react-router-dom';

const Volunteer = () => {
    return (
        <div className="volunteer">
          <div className="volunteer_container">
            <img src={featuredImg} alt="Featured"/>
          </div>
          <div className="volunteer_container">
            <div className="volunteer_title">
                  volunteer
            </div>
                  <div>
                      <p>Do you want to help us out? Then you’re on the right page! By volunteering, you will have a chance to not only learn more, but also make a difference.</p>
                      <p>Volunteers help children through individual sessions, <Link to="/weekly" className="volunteer-link">weekly activities</Link> and <Link to="/specialevents" className="volunteer-link">special events</Link> where you are paired with a child whom you will socialize with for the session. Being a volunteer is a great way to help kids in need and get volunteer hours.</p>
                      <p>To register as a volunteer, please <Link to="/login" className="volunteer-link">sign in</Link> with your Google account or email/password and provide us with your profile information (e.g. school, grade, etc.). Then you can <Link to="/upcomingevents" className="volunteer-link">sign up</Link> for our upcoming activities and events as a volunteer. Our system will store your volunteering records with service hours.</p>
                      <p>You can find useful information on our resource pages, including <Link to="/documents" className="volunteer-link">related documents</Link> and <Link to="/training" className="volunteer-link">volunteer training video and files</Link>.</p>
                  </div>
          </div>
        </div>
      )
}

export default Volunteer