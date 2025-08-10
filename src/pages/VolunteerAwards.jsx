import React from 'react';
import './VolunteerAwards.css';
import { Link } from 'react-router-dom';

const VolunteerAwards = () => {
    return (
        <div className="volunteerawards">
            <div className="volunteerawards_title_container">
                <h1 className="volunteerawards_title">Volunteer Awards</h1>
            </div>

            <div className="volunteerawards_content_container">
                <div className="volunteerawards_container">
                    
                    <div className="volunteerawards_photo">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Flucas%20zhang.jpg?alt=media&token=bcd6a410-9a85-40bf-9082-684ad434f801" 
                            alt="Lucas Zhang" 
                        />
                    </div>

                    <div className="volunteerawards_content">
                        <h2 className="volunteerawards_name">Outstanding Tutor Award</h2>
                        <p className="volunteerawards_extra">Lucas Zhang</p>
                        <p className="volunteerawards_extra"></p>
                    </div>
                </div>
            </div>

            <div className="volunteerawards_content_container">
                <div className="volunteerawards_container">
                    <div className="volunteerawards_photo">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fsaroja%20subramanian.jpg?alt=media&token=f4c25261-5154-4df6-9c59-07cd0e4966a5" 
                            alt="Saroja Subramanian" 
                        />
                    </div>

                    <div className="volunteerawards_content">
                        <h2 className="volunteerawards_name">Most Dependable Award</h2>
                        <p className="volunteerawards_extra">Saroja Subramanian</p>
                        <p className="volunteerawards_extra"></p>
                    </div>
                </div>
            </div>

            <div className="volunteerawards_content_container">
                <div className="volunteerawards_container">
                    <div className="volunteerawards_photo">
                        <img 
                            src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fnishka%20batra.jpg?alt=media&token=bc13b4c6-9c12-4d03-80d9-7b5700fb3be6" 
                            alt="Nishka Batra" 
                        />
                    </div>

                    <div className="volunteerawards_content">
                        <h2 className="volunteerawards_name">Most Improved Award</h2>
                        <p className="volunteerawards_extra">Nishka Batra</p>
                        <p className="volunteerawards_extra"></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerAwards;