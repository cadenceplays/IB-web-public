import React from 'react';
import './numbers.css';
import { Button } from '../';

const Numbers = () => {
  return (
    <div className="numbers">
      {/* <div className="numbers-title">
        By the numbers
      </div> */}
      <div className="numbers-buttons-container">
        <div className="numbers-button">
          <div className="numbers-blue-button">
            260+<br/>children
          </div>
        </div>
        <div className="numbers-button">
          <div className="numbers-blue-button">
            300+<br/>volunteers
          </div></div>
        <div className="numbers-button">
          <div className="numbers-blue-button">
            15+<br/>weekly activities
          </div></div>
        <div className="numbers-button">
          <div className="numbers-blue-button">
            6 years<br/>since 2018
          </div></div>
        <div className="numbers-button">
          <div className="numbers-blue-button">
            10+<br/>cities
          </div></div>
        <div className="numbers-button">
          <div className="numbers-blue-button">
            $55,000+<br/>fundraised
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers