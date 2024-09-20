import React from 'react';
import { Link } from 'react-router-dom';
import './article.css';
import featuredImg from '../../assets/all.jpg';

const Article = () => {
  return (
    <div className="article">
      <div className="article-img">
        <img src={featuredImg} alt="Featured"/>
      </div>
      <div className="article-whatwedo">
        <div className="article-whatwedo-title">
        Welcome to International Buddy!
        </div>
        <div className="article-whatwedo-content">
          <p>We foster an inclusive and accessible community where neurodivergent children and youth are empowered to reach their full potential.</p>
          <p>Check out more details <Link to="/whatwedo" className="article-link">about us</Link>.</p>
          <p>Have you always wondered how you can help the children? A great way to start is by volunteering! Volunteers regularly spend time with the children to make them more comfortable around others and tutor them in various subject areas.</p>
          <p>Check out our <Link to="/volunteer" className="article-link">volunteer</Link> page and <Link to="/login" className="article-link">sign in</Link> for volunteering opportunities today!</p>
        </div>
      </div>
    </div>
  )
}

export default Article