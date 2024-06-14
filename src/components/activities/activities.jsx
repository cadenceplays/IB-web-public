import React from 'react';
import './activities.css';
import { Link } from 'react-router-dom';
import {Button} from '../';
import { Activitiescontent } from '../';

const Activities = () => {
    return (
        <div className="activities">
            <div className="activities-title-container">
                <div className="activities-title">
                    Weekly Activities
                </div>
                <Link to="/weekly"><Button type="button greenButton" text="More" /></Link>
            </div>

            <Activitiescontent />

            <div className="activities-container activities-container-0">
                <Link to="/eventonetoone">
                    <div className="activities-button-link">
                        <b>Record 1 on 1 Activity</b>: For volunteers to record service hours 
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Activities