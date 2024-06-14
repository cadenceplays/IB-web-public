import React from 'react';
import './events.css';
import { Link } from 'react-router-dom';
import { Button } from '../';

const Events = () => {
    return (
        <div className="events">
            <div className="events-title-container">
                <div className="events-title">
                    Special Events
                </div>
                <Link to="/specialevents"><Button type="button greenButton" text="More" /></Link>
            </div>
            <div className="events-container">
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F6.png?alt=media&token=a7c7e3d8-aa51-41d9-80ce-01dda9fd40fc" alt="Nordic Ski Camp" />
                    </div>
                    <div className="events-button-title">
                        Nordic Ski Camp
                    </div>
                </div> 
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_2_89.jpg?alt=media&token=3b93a8d1-6ded-4a4d-adf2-9a0cafed59cc" alt="Swim meet" />
                    </div>
                    <div className="events-button-title">
                        Swim Meet
                    </div>
                </div> 
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchristmas%2FWeixin%20Image_20231204084125a.jpg?alt=media&token=f7131892-f3d7-4d5e-aee4-14e1ab808b63" alt="Christmas Party" />
                    </div>
                    <div className="events-button-title">
                        Christmas Party
                    </div>
                </div>  
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20231119222348a.png?alt=media&token=52af2bc4-5c71-496e-adb7-264383cece6d" alt="Thanksgiving Party" />
                    </div>
                    <div className="events-button-title">
                        Thanksgiving Party
                    </div>
                </div>    
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20231027092607a.png?alt=media&token=e4a4da56-fb2b-4039-8ffd-46a351c80e47&_gl=1*kmw611*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODQyMjk2Ny4zOTEuMS4xNjk4NDI0MTYwLjQxLjAuMA.." alt="Halloween Party" />
                    </div>
                    <div className="events-button-title">
                        Halloween Party
                    </div>
                </div>
                <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20231029134413.jpg?alt=media&token=1fc7d9c6-1edb-4fc6-98b9-632ddb88ce36&_gl=1*um68hj*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjE0ODEyLjQ3LjAuMA.." alt="Outreach & Fundraising" />
                    </div>
                    <div className="events-button-title">
                        Outreach & Fundraising
                    </div>
                </div>
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2023-06-29T06_12_42.764Z_4_350.jpg?alt=media&token=5df9693a-4951-4cc3-9ce9-9f3a384cdaae" alt="Wildwave Water Park" />
                    </div>
                    <div className="events-button-title">
                        Wild Waves Park Tour
                    </div>
                </div> */}
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2023-07-20T03_12_32.079Z_1_1282.jpg?alt=media&token=82697b1f-857a-492a-b93f-d665960955cf" alt="Fencing" />
                    </div>
                    <div className="events-button-title">
                        Fencing
                    </div>
                </div> */}
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2023-07-20T04_18_40.157Z_3_8656.jpg?alt=media&token=ed206b29-2b8a-4040-9029-66fc4d046b07" alt="Badminton" />
                    </div>
                    <div className="events-button-title">
                        Badminton
                    </div>
                </div> */}
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2023-07-20T03_05_47.144Z_6_5584.jpg?alt=media&token=b8b2fe8e-d8ca-4a94-aef1-c38ac9021cf9" alt="Volunteer Appciation Party" />
                    </div>
                    <div className="events-button-title">
                        Volunteer Appreciation Party
                    </div>
                </div> */}
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FDancing-768x576.jpeg?alt=media&token=07282eb7-f4fa-456f-8029-4b017e8968ac" alt="Summer Camp" />
                    </div>
                    <div className="events-button-title">
                        Summer Camp
                    </div>
                </div> */}
                {/* <div className="events-cell">
                    <div className="events-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2023-07-20T04_12_36.335Z_5_6076.jpg?alt=media&token=819e4419-3c42-48f8-a28e-7bad40210281" alt="Garage Sale" />
                    </div>
                    <div className="events-button-title">
                        Garage Sale
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Events