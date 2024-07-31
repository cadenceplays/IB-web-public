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
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FSteven%20Gao.JPG?alt=media&token=2aefd721-87e4-4c52-9ea0-079789b2a632" alt="President"  />
                    </div>
                    <div className="leaders-button-title">
                        <b>Steven Gao</b><br/>
                        President
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FYiran%20(Ryan)%20Pang.JPG?alt=media&token=f823a4fa-f841-4091-9ec9-f94f34196092" alt="VP of Technology"  />
                    </div>
                    <div className="leaders-button-title">
                        <b>Yiran (Ryan) Pang</b><br/>
                        VP of <br/>Technology
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FElla%20Chang.JPG?alt=media&token=86c201b2-a452-4bbd-9c07-48e7556277bd" alt="VP Operations & Communications" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Ella Chang</b><br/>
                        VP of <br/>Operations & Communications
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FMax%20Li.JPG?alt=media&token=e3494dda-ff32-4a98-a15d-1710d7ffab36" alt="VP of Community Outreach" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Max Li</b><br/>
                        VP of <br/>Community Outreach
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FValerie%20Wang.JPG?alt=media&token=ea255bcf-c8ff-4db7-a0e0-b21509893a46" alt="VP of Development" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Valerie Wang</b><br/>
                        VP of <br/>Development
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FArthur%20Gao.JPG?alt=media&token=28de542a-0e33-488e-83e1-9626354c0331" alt="VP of Events" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Arthur Gao</b><br/>
                        VP of <br/>Events
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FSean%20Choudhury.JPG?alt=media&token=03bc0aed-85e9-44dd-b0bf-1b049140d8b8" alt="VP of Finance" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Sean Choudhury</b><br/>
                        VP of <br/>Finance
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FNathan%20Guan.JPG?alt=media&token=9b2bbf0f-319d-4252-96eb-ca1dbf7214f6" alt="VP of Career Training & Tutoring"  />
                    </div>
                    <div className="leaders-button-title">
                        <b>Nathan Guan</b><br/>
                        VP of <br/>Career Training & Tutoring
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FAndrew%20Kim.jpg?alt=media&token=d2420a4a-9225-4c34-949f-ce7cd6ccd3b9" alt="VP of Sustainability" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Andrew Kim</b><br/>
                        VP of <br/>Sustainability
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2Fleaders%2FEli%20Hou.JPG?alt=media&token=68a707bb-f960-4115-a56c-c7730a986c7e" alt="VP of Administration" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Eli Hou</b><br/>
                        VP of <br/>Administration
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Leaders