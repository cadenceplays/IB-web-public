import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for summer camp
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F2.png?alt=media&token=e1fa6116-e349-4159-a5a5-741d8882f00d";
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F3_wide.png?alt=media&token=a018146c-ae1f-4054-90f5-21af7675cd2a";

    // this is for moms party
    const dataContent = {
        link: "2025-10-15T05:27:14.694Z_Enrichment_6341",
    }

    // below are for nordic ski camp
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F2025_2.jpg?alt=media&token=73d87c3e-5fc3-4b51-8a2f-076c8094db7a";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FNordic%20ski%20banner_w3.jpg?alt=media&token=4833929c-a7b8-4ea0-9c11-1ed06a257b72";

    // this is for video production training
    const data2Content = {
        link: "2025-11-19T22:05:12.784Z_Video_Prod_1076",
    }

    // below is for halloween party
    const data4Content = {
        link: "2025-10-14T04:35:02.543Z_Halloween__9690",
    }

    // below is for pirates movie thing
    const data5Content = {
        link: "2025-10-04T20:05:29.011Z_The_Pirate_316",
    }

    if (showSpecial) {
        return (

            <>
                {/* below are for list of special events */}

                <div className="specialnewslist">
                    <div className="specialnewslist-title-container">
                        <div className="specialnewslist-title">
                            Upcoming Special Events
                        </div>
                    </div>
                    <div className="specialnewslist-container">


                        <div className="specialnewslist-cell-empty"></div>

                        {/*<div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">October 25th</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    Enrichment for Moms
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2Fmoms%20enrichment%20cropped.jpg?alt=media&token=a4719d1e-b161-4d7a-8789-9cacdda8d378" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">October 25th</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                    Halloween Party
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2Fhalloween%20party%20poster.jpg?alt=media&token=7fdef3bb-13f8-4c07-a3da-096bed71d051" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>*/}

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Nov 23th</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                    Video Production Training
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2025-11-19T22%3A05%3A12.784Z_0_5121?alt=media&token=723beb48-772a-43ad-9482-0fa1182efbd4" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/*
                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">November 1st</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    The Pirates of Penzance
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fpirates%20of%20penzance%20croppd.jpg?alt=media&token=797c749b-e322-4314-8703-276027ddbe6c" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        <div className="specialnewslist-cell-empty"></div>

                    </div>
                </div>


                {/* below are for all-wide banners */}

                {/* below are for science club banner */}
                {/* <div className="specialnews3a">
                        <Link to="/upcomingweekly" state={{ data: data5Content }}>
                            <img src={photo5aLink} width="100%" alt="featured" />
                        </Link>
                    </div>
                    <div className="specialnews3b">
                        <Link to="/upcomingweekly" state={{ data: data5Content }}>
                            <img src={photo5bLink} width="100%" alt="featured" />
                        </Link>
                    </div> */}

                {/* below are for nordic ski camp banner */}
                {/* <div className="specialnews3a">
                        <Link to="/upcomingweekly" state={{ data: data2Content }}>
                            <img src={photo2bLink} width="100%" alt="featured" />
                        </Link>
                    </div>
                    <div className="specialnews3b">
                        <Link to="/upcomingweekly" state={{ data: data2Content }}>
                            <img src={photo2aLink} width="100%" alt="featured" />
                        </Link>
                    </div> */}

                {/* below are for summer camp banner */}
                {/* <div className="specialnews2a">
                        <Link to="/upcomingweekly" state={{ data: dataContent }}>
                            <div className="specialnews-blue-button">
                                <img src={photoLink2} width="800" alt="featured" />
                            </div>
                        </Link>
                    </div>
                    <div className="specialnews2b">
                        <Link to="/upcomingweekly" state={{ data: dataContent }}>
                            <div className="specialnews-blue-button">
                                <img src={photoLink} width="350" alt="featured" />
                            </div>
                        </Link>
                    </div> */}


                {/* below are for special olympics */}

                <div className="specialnews">
                    <div className="specialnews-so">
                        <Link to="/specialolympics">
                            <img src={featuredImg} width="300" alt="featured" />
                        </Link>
                    </div>

                    {/* <div className="specialnews-title">
                        <Link to="/upcomingweekly" state={{ data: dataContent }}>
                            Basketball Individual Skill Team
                        </Link>
                    </div> */}

                    {/* <div className="specialnews-title">
                        <Link to="/upcomingweekly" state={{ data: data3Content }}>
                            Track & Field Program
                        </Link>
                    </div> */}
                </div>
            </>

        )
    }

}

export default Specialnews