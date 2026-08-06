import React from 'react';
import './footer.css';
import { Line } from '../';
import logo from '../../assets/internationalbuddy_logo_dark.png';
import facebook from '../../assets/facebook-logo-small.png';
import instagram from '../../assets/instagram-logo-small.png';
import youtube from '../../assets/youtube-logo-small.png';
import tiktok from '../../assets/tiktok-logo-small-b.png';
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu-container">

        <div className="footer-text-container">
          <div className="footer-title">
            About
          </div>
          <p><Link to="/whatwedo">About us<RiArrowRightSLine /></Link></p>
          <p><Link to="/ourteam">Our leaders <RiArrowRightSLine /></Link></p>
          <p><Link to="/pastevents">News <RiArrowRightSLine /></Link></p>
          <p><Link to="/history">History <RiArrowRightSLine /></Link></p>
          <p><Link to="/contact">Contact <RiArrowRightSLine /></Link></p>
        </div>

        <div className="footer-text-container">
          <div className="footer-title">
            Attend
          </div>
          <p><Link to="/weekly">Weekly activities <RiArrowRightSLine /></Link></p>
          <p><Link to="/specialevents">Special events <RiArrowRightSLine /></Link></p>
          <p><Link to="/specialolympics">Special Olympics <RiArrowRightSLine /></Link></p>
          <p><Link to="/upcomingevents">Sign up for upcomings <RiArrowRightSLine /></Link></p>
        </div>

        <div className="footer-text-container">
          <div className="footer-title">
            Contribute
          </div>
          <p><Link to="/volunteer">Volunteer <RiArrowRightSLine /></Link></p>
          <p><Link to="/donate">Donate <RiArrowRightSLine /></Link></p>
          <p><Link to="/artgallery">Art gallery <RiArrowRightSLine /></Link></p>
        </div>

        <div className="footer-text-container">
          <div className="footer-title">
            Resource
          </div>
          <p><Link to="/documents">Related documents <RiArrowRightSLine /></Link></p>
          <p><Link to="/training">Volunteer training <RiArrowRightSLine /></Link></p>
          <p><a href="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" download="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/manual%2FIB%20Web%20Quick%20Manual.pdf?alt=media&token=e727a1b4-4081-4927-a2a4-6bad6bd6c60d" target="_blank" rel="noopener">Website quick manual <RiArrowRightSLine /></a></p>
        </div>

      </div>
      <Line color="--white-color" width="90%" />
      <div className="footer-logo-container">
        <div className="footer-logos">
          <Link to="/"><img src={logo} alt="Logo" height="50" /></Link>
          <a href="https://www.facebook.com/profile.php?id=100091862080207" target="_blank" rel="noopener"><img src={facebook} alt="facebook" height="35" /></a>
          <a href="https://www.instagram.com/internationalbuddy_/" target="_blank" rel="noopener"><img src={instagram} alt="instagram" height="35" /></a>
          <a href="https://www.youtube.com/@internationalbuddy" target="_blank" rel="noopener"><img src={youtube} alt="youtube" height="35" /></a> 
          <a href="https://www.tiktok.com/@international.buddy" target="_blank" rel="noopener"><img src={tiktok} alt="tiktok" height="35" /></a>
        </div>
        <div>
          <p>Copyright © 2026 International Buddy. <br /> Website by Yiran (Ryan) Pang & Cadence Liao</p>
        </div>
      </div>
    </div>
  )
}

export default Footer