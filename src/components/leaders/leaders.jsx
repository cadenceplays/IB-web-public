import React, {useState} from 'react';
import './leaders.css';
import { Link } from 'react-router-dom';
import { Button } from '../';

const Leaders = () => {
    const [showImg1, setShowImg1] = useState(true);
    const [showImg2, setShowImg2] = useState(true);
    const [showImg3, setShowImg3] = useState(true);
    const [showImg4, setShowImg4] = useState(true);
    const [showImg5, setShowImg5] = useState(true);

    

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
                        {showImg1?
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FGavin%20Zhou%20-%20President.jpg?alt=media&token=70db9e65-a892-43d4-923f-fe43958f8dd7" alt="President" onClick={()=>setShowImg1(false)} />
                            :
                            //<div><br/><br/><br/><b>I love music & cooking.</b><br/><br/><br/></div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2Fmusic.png?alt=media&token=f82f3759-5054-4c5c-9561-d0e1879a6226" alt="President" onClick={()=>setShowImg1(true)} />
                        }
                    </div>
                    <div className="leaders-button-title">
                        <b>Gavin Zhou</b><br/>
                        President
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        {showImg4?
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FHansley%20Wang%20-%20VP%20of%20Community%20Outreach.jpg?alt=media&token=e76c8207-b762-4439-967e-4e862966d791" alt="VP Community Outreach" onClick={()=>setShowImg4(false)} />
                            :
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2Fchewie.png?alt=media&token=ba3939e0-c045-437c-abdf-9cd31a989d38" alt="VP Community Outreach" onClick={()=>setShowImg4(true)} />
                        }
                    </div>
                    <div className="leaders-button-title">
                        <b>Hansley Wang</b><br/>
                        VP of <br/>Community Outreach
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        {showImg2?
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FSteven%20Gao-%20VP%20of%20technology%201.jpg?alt=media&token=ab92883b-3b18-48d2-bd9b-75490a65d7e3" alt="VP Technology" onClick={()=>setShowImg2(false)}/>
                            :
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2Fbasketball.png?alt=media&token=039970e3-fb78-47e0-93ec-e6edd550a33a" alt="VP Technology" onClick={()=>setShowImg2(true)} />
                        }
                    </div>
                    <div className="leaders-button-title">
                        <b>Steven Gao</b><br/>
                        VP of <br/>Technology
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        {showImg3?
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FSean%20Choudhury%20-%20VP%20of%20Finance.jpg?alt=media&token=87648c84-c192-4743-867d-5496ab535606" alt="VP Finance" onClick={()=>setShowImg3(false)} />
                            :
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2Fpiano.png?alt=media&token=f41d73c3-00ca-4209-94ef-686efb01fd39" alt="VP Finance" onClick={()=>setShowImg3(true)} />
                        }
                    </div>
                    <div className="leaders-button-title">
                        <b>Sean Choudhury</b><br/>
                        VP of <br/>Finance
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        {showImg5?
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FEli%20Hou%20-%20VP%20of%20Administration.jpg?alt=media&token=613810c9-68f3-42b8-bfdb-9f9f01d27e03" alt="VP Administration" onClick={()=>setShowImg5(false)} />
                            :
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2Fdog.png?alt=media&token=2ddb528c-6245-46dc-9fd3-0f97efad9467" alt="VP Administration" onClick={()=>setShowImg5(true)} />
                        }
                    </div>
                    <div className="leaders-button-title">
                        <b>Eli Hou</b><br/>
                        VP of <br/>Administration
                    </div>
                </div>
                <div className="leaders-cell">
                    <div className="leaders-button">
                        <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fleaders%2FKyle%20Li%20-%20chess%20lead.jpg?alt=media&token=0d6a7467-a936-4f5b-b5e3-35f54ba32565" alt="Chess Team Leader" />
                    </div>
                    <div className="leaders-button-title">
                        <b>Kyle Li</b><br/>
                        Chess Team Leader
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Leaders