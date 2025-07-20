import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for summer camp
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F2.png?alt=media&token=e1fa6116-e349-4159-a5a5-741d8882f00d";
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2025%2F3_wide.png?alt=media&token=a018146c-ae1f-4054-90f5-21af7675cd2a";
    const dataContent = {
        link: "2025-04-30T18:02:47.408Z_Summer_Cam_5544",
    }

    // below are for nordic ski camp
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F2025_2.jpg?alt=media&token=73d87c3e-5fc3-4b51-8a2f-076c8094db7a";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FNordic%20ski%20banner_w3.jpg?alt=media&token=4833929c-a7b8-4ea0-9c11-1ed06a257b72";
    const data2Content = {
        link: "2025-02-18T03:47:49.972Z_Nordic_Ski_7935",
    }

    // below is for special olympics track
    const data3Content = {
        link: "2025-07-15T04:21:40.269Z_Saturday_S_6124",
    }

    // below is for Wild Waves Water Park
    const data4Content = {
        link: "2025-06-10T03:08:12.405Z_Wild_Waves_3713",
    }

    // below is for IB Mod Pizza Fundraising
    const data5Content = {
        link: "2025-07-20T04:04:38.379Z_IB_Mod_Piz_4008",
    }

    // below is for Outing to Zoo
    const data6Content = {
        link: "2025-05-26T02:36:10.080Z_Summer_Fie_455",
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
                    
                        {/* this is the empty sell at the left side 
                        <div className="specialnewslist-cell-empty"></div>*/}

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date"> July </div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                IB Mod Pizza Fundraising
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fib%20mob%20pizza.jpg?alt=media&token=56f65586-ff8a-43b2-8dfc-d027d6bce403" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">June / July</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    Outing to Woodland Zoo
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20250525233506.jpg?alt=media&token=35077539-f2b2-4227-acba-10d1075bdc42" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">July</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data3Content }}>
                                    Special Olympics Track 
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data3Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fspecial%20olympics%20track%202.jpg?alt=media&token=732e2e4e-5fb8-4272-91db-790adc2c1a65" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">July 12 (Sat)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                Wild Waves Water Park
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data4Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild%20waves%20poster.jpg?alt=media&token=0e709d8e-6f41-47da-945a-83a4386b6e2a" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">July / August</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    Summer Camp
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2.jpg?alt=media&token=620af901-e23d-44a4-aaae-37757b907da5" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Nov 17 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20241030204746a.png?alt=media&token=959ac5e4-17ca-4c6d-ba6e-dd76222e4998">
                                    IB Swim Meet
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20241030204746a.png?alt=media&token=959ac5e4-17ca-4c6d-ba6e-dd76222e4998">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20241030204746b.jpg?alt=media&token=0a622f45-3424-4d02-8a8f-d0043e0aec61" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        {/* this is the empty sell at the right side }                       
                        <div className="specialnewslist-cell-empty"></div> */}
                        
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