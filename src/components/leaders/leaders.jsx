import React from 'react';
import './leaders.css';
import { Link } from 'react-router-dom';
import { Button } from '../';

const Leaders = () => {
  return (
    <div className="leaders">
      <div className="leaders-title-container">
        <div className="leaders-title">Our leaders</div>
        <Link to="/ourteam">
          <Button type="button greenButton" text="More" />
        </Link>
      </div>

      <div className="leaders-container">

        <div className="leaders-cell">
          <Link to="ourteam#emily-zheng" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femily%20zheng%20-%20president.jfif?alt=media&token=da58d7ed-bc6e-47da-9faf-f6e05c0bf496" alt="Emily Zheng - President" />
          </Link>
          <div className="leaders-button-title">
            <b>Emily Zheng</b>
            President
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#celena-zhang" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcelena%20-%20vp%20of%20events%20-%20resized.jpg?alt=media&token=d59ca047-caa5-4b14-a45d-2bcfa8acc32a" alt="Celena Zhang - Co-President" />
          </Link>
          <div className="leaders-button-title">
            <b>Celena Zhang</b>
            Co - President
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#cadence-liao" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fcadence%20our%20team%20page.jpg?alt=media&token=67ef9758-b43d-4f19-bb62-ed3aaacabcb7" alt="Cadence Liao - VP of Technology" />
          </Link>
          <div className="leaders-button-title">
            <b>Cadence Liao</b>
            VP of Technology
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#sophia-li" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fsophia%20li.jpg?alt=media&token=47aab4ca-b1e6-4318-9d91-a35491cf95c8" alt="Sophia Li - VP of Development" />
          </Link>
          <div className="leaders-button-title">
            <b>Sophia Li</b>
            VP of Development
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#emma-li" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femma%20-%20science%20captain.jpg?alt=media&token=f979ed82-fc9a-434b-b154-8f75f3448c4a" alt="Emma Li - VP of Fundraising" />
          </Link>
          <div className="leaders-button-title">
            <b>Emma Li</b>
            VP of Fundraising
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#emma-hu" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Femma%20hu.jpg?alt=media&token=719717de-18b2-4009-a021-42fa8fc8fbbd" alt="Emma Hu - VP of Administration" />
          </Link>
          <div className="leaders-button-title">
            <b>Emma Hu</b>
            VP of Administration
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#derek-li" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fderek%20li.jpg?alt=media&token=2e6bc5d5-6a7d-4e6b-bba8-bf891469c633" alt="Derek Li - VP of Operations" />
          </Link>
          <div className="leaders-button-title">
            <b>Derek Li</b>
            VP of Operations
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#edward-li" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fedward%20-%20science%20captain.jpg?alt=media&token=9c73044d-6877-4e70-bd0a-ee46d3ab78e4" alt="Edward Li - VP of Communication" />
          </Link>
          <div className="leaders-button-title">
            <b>Edward Li</b>
            VP of Communication
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#timothy-liao" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FTimothy%20Liao.JPG?alt=media&token=b3ad0cec-fb64-4ee3-8a9e-b6155e05e7a1" alt="Timothy Liao - VP of Community Outreach Mercer Island" />
          </Link>
          <div className="leaders-button-title">
            <b>Timothy Liao</b>
            VP of Outreach (Mercer Island)
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#cloris-wang" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcloris%20-%20swimming%20captain%20bac.jfif?alt=media&token=19e9c6c7-ae3a-4ad7-9f1e-13fd93ad36a8" alt="Cloris Wang - VP of Community Outreach Bellevue" />
          </Link>
          <div className="leaders-button-title">
            <b>Cloris Wang</b>
            VP of Outreach (Bellevue)
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#jennifer-xue" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FJennifer%20Xue.JPG?alt=media&token=2c5633af-bbe8-42c9-aead-5a143ef28bd2" alt="Jennifer Xue - VP of Community Outreach Redmond" />
          </Link>
          <div className="leaders-button-title">
            <b>Jennifer Xue</b>
            VP of Outreach (Redmond)
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#alex-kang" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Falex%20kang%20-%20special%20olympics%20swim%20captain.jfif?alt=media&token=c20a321c-f07f-4bd7-b18b-2cee82e43752" alt="Alex Kang - VP of Events" />
          </Link>
          <div className="leaders-button-title">
            <b>Alex Kang</b>
            VP of Events
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#alexander-zhao" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Falexander%20zhao%20-%20swim%20captain%20mercer%20island.jfif?alt=media&token=08503c3c-cfb1-431d-8f80-23b0442f90be" alt="Alexander Zhao - VP of Sustainability" />
          </Link>
          <div className="leaders-button-title">
            <b>Alexander Zhao</b>
            VP of Sustainability
          </div>
        </div>

        <div className="leaders-cell">
          <Link to="ourteam#addy-wei" className="leaders-button">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Faddy%20wei%20-%20art%20group%20captain.jpg?alt=media&token=b2801e30-3369-4968-b587-2954d3b46111" alt="Addy Wei - VP of Education" />
          </Link>
          <div className="leaders-button-title">
            <b>Addy Wei</b>
            VP of Education
          </div>
        </div>

      </div>
    </div>
  );
};

export default Leaders;