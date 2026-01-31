import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for summer camp
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F2.png?alt=media&token=e1fa6116-e349-4159-a5a5-741d8882f00d";
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F3_wide.png?alt=media&token=a018146c-ae1f-4054-90f5-21af7675cd2a";

    // this is for singing event; i'll remove the ad soon
    const dataContent = {
        link: "2026-01-20T04:50:02.294Z_IB_Singing_4315",
    }

    // below are for nordic ski camp
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F2025_2.jpg?alt=media&token=73d87c3e-5fc3-4b51-8a2f-076c8094db7a";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FNordic%20ski%20banner_w3.jpg?alt=media&token=4833929c-a7b8-4ea0-9c11-1ed06a257b72";

    // this is for holiday talent show
    const data2Content = {
        link: "2025-12-15T00:57:35.224Z_Holiday_Ta_4985",
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
                            <div className="specialnewslist-button-date">Janurary 31st</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                    Volunteer Training
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FPurple%20Cute%20Playful%20Modern%20Open%20Volunteer%20Instagram%20Post.jpg?alt=media&token=13c4c467-38dd-4f8a-b300-9f44dc9ab770" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">January 31st</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                    Holiday Talent Show
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2025-12-15T00%3A57%3A35.224Z_0_658?alt=media&token=2f29a5f1-217f-41b8-9cb9-132cde1d682a" width="100%" alt="featured" />
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