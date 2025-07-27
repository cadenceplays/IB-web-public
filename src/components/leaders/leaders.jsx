import React from 'react';
import './leaders.css';
import { Link } from 'react-router-dom';
import { Button } from '../';

const Leaders = () => {

    return (
        <div className="leaders">
            <div className="leaders-title-container">
                <div className="leaders-title">
                    Our leaders
                </div>
                <Link to="/ourteam"><Button type="button greenButton" text="More" /></Link>
                
            </div>
            <div className="leaders-container">
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femily%20zheng%20-%20president.jfif?alt=media&token=da58d7ed-bc6e-47da-9faf-f6e05c0bf496" alt="President"  />
                    </div>
                    <div className="leaders-button-title">
                        <b>Emily Zheng</b><br/>
                        President
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fkaicheng%20-%20vp%20of%20technology.jfif?alt=media&token=fd534b2f-9c73-406b-bb1a-db47595caa06" alt="VP of Technology"  />
                    </div>
                    <div className="leaders-button-title">
                        <b>Kaicheng Shen</b><br/>
                        VP of <br/>Technology
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fwilliam%20-%20vp%20of%20community%20outreach.jfif?alt=media&token=32b0394b-4df9-4e9c-849f-6e490d89043c" alt="VP of Community Outreach" />
                    </div>
                    <div className="leaders-button-title">
                        <b>William Chee</b><br/>
                        VP of <br/>Community Outreach
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Faiden%20li%20-%20vp%20of%20communication.jfif?alt=media&token=5bff3152-e680-49f5-b505-286f425b0521" alt="VP of Community Outreach" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Aiden Li</b><br/>
                        VP of <br/>Community Outreach
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fjulia%20shang%20-%20vp%20of%20development.jfif?alt=media&token=ec606378-eed3-4fbd-8566-547292373511" alt="VP of Development" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Julia Shang</b><br/>
                        VP of <br/>Development
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcelena%20-%20vp%20of%20events%20-%20resized.jpg?alt=media&token=d59ca047-caa5-4b14-a45d-2bcfa8acc32a" alt="VP of Events" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Celena Zhang</b><br/>
                        VP of <br/>Events
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Foliver%20-%20vp%20of%20sustainability.jfif?alt=media&token=05c090c5-d8ab-4e8e-9ab1-77ca302b2c34" alt="VP of Sustainability" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Oliver Lambert</b><br/>
                        VP of <br/>Sustainability
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FIvan%20Pong.JPG?alt=media&token=541d1f21-cdea-440b-9d76-eb90b6b1a5ac" alt="VP of Administration" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Ivan Pong</b><br/>
                        VP of <br/>Administration
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Leaders