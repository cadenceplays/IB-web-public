import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for summer camp
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F2.png?alt=media&token=e1fa6116-e349-4159-a5a5-741d8882f00d";
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F3_wide.png?alt=media&token=a018146c-ae1f-4054-90f5-21af7675cd2a";

    // below are for nordic ski camp
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F2025_2.jpg?alt=media&token=73d87c3e-5fc3-4b51-8a2f-076c8094db7a";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FNordic%20ski%20banner_w3.jpg?alt=media&token=4833929c-a7b8-4ea0-9c11-1ed06a257b72";

    // this is for volunteer appreciation party
    const dataContent = {
        link: "2026-05-06T04:37:18.447Z_IB_Volunte_715",
    }

    // below is for volunteer training r2 ;/
    const data4Content = {
        link: "2025-12-15T04:08:16.892Z_Volunteer__8738",
    }

    // below is for aquarium visit idk why it's spelled wrong lmao
    const data5Content = {
        link: "2026-01-01T04:29:22.024Z_IB_Aquariu_7343",
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

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">June 7</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    IB Volunteer Appreciation Party
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2Faf385873-40e5-4a61-834f-7b43cd552e11.png?alt=media&token=70247048-d0c6-4796-b1f5-a3e46616595f" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

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