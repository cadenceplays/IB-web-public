import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for summer camp
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024w.png?alt=media&token=fae7073a-4db0-405f-8a3b-2f8eaf19de86";
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024%20(1).png?alt=media&token=f0599137-3c3e-4976-bbb9-9665d8f2d1bb";
    const dataContent = {
        link: "2024-04-23T03:22:10.304Z_Summer_Cam_4508",
    }

    // below are for wild waves
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave2.png?alt=media&token=baf2935f-cab5-4859-a663-ae31eaa45e91";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave1.png?alt=media&token=0300e3c3-5ef0-4034-b699-61e5518e9a24";
    const data2Content = {
        link: "2024-06-10T02:02:06.089Z_Wild_Waves_8446",
    }

    // below are for special olympics track & field
    const data3Content = {
        link: "2024-07-30T03:42:22.144Z_Special_Ol_7242",
    }
    // below are for special olympics tech connect
    const data4Content = {
        link: "2024-07-30T03:45:47.368Z_Special_Ol_5849",
    }    

    // below is for movie night
    const data5Content = {
        link: "2024-07-28T22:28:08.071Z_Movie_Nigh_4094",
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

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Jul 30 (Feb)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    Movie Night
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2024-07-28T22_28_08.071Z_0_1339a.jpg?alt=media&token=65cda1bc-caae-41ae-840a-e6ed9d9a2ce9" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Jul 14 (Sun)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                    Wild Waves Park
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data2Content }}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwildwave2.png?alt=media&token=cac1e46d-4e06-41b3-9a7e-7290dd67663a" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}
                        
                        {/*<div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Jul 20 (Sat)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://www.signupgenius.com/go/10C0E4FA4AA2FABFA7-50184265-ibcommunity">
                                    International Art Festival
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://www.signupgenius.com/go/10C0E4FA4AA2FABFA7-50184265-ibcommunity">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FBE63B0489E1D7C36C99EE6DEA5A1044A_0.jpg?alt=media&token=7d9a7915-28f5-40d7-b904-e65bb6aa6de2" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Ongoing</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fonevsone.jpg?alt=media&token=b316f2d7-e305-4a54-a491-83e90245a958">
                                Summer Online Tutoring
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fonevsone.jpg?alt=media&token=b316f2d7-e305-4a54-a491-83e90245a958">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240524203252.jpg?alt=media&token=08d11e97-ece1-428a-967c-d843b398dc00" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Jul 1-Aug 2</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_records%2F2024-05-28T23%3A03%3A13.673Z_0_5676?alt=media&token=8575a3d6-ad06-4a55-a1c4-2f819e1c4e58">
                                    Art Exhibition 
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_records%2F2024-05-28T23%3A03%3A13.673Z_0_5676?alt=media&token=8575a3d6-ad06-4a55-a1c4-2f819e1c4e58">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2F2024-05-28T23_03_13.673Z_0_5326.jpg?alt=media&token=d12cf217-b0bd-4c71-93d1-a6141aaa0d13" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>
                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Jul 29 - Aug 2 & Aug 12 - 16</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    Summer Camp
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: dataContent }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FSUMMER%20CAMP%202024%20(1).png?alt=media&token=21c1f01b-e353-4529-8976-e4b1fb79366e" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* below are for wild waves park tour banner */}
                {/* <div className="specialnews3a">
                    <Link to="/upcomingweekly" state={{ data: data2Content }}>
                        <img src={photo2bLink} width="900" alt="featured" />
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

                    <div className="specialnews-title">
                        <Link to="/upcomingweekly" state={{ data: data4Content }}>
                            Tech Connect Program
                        </Link>
                    </div>

                    <div className="specialnews-title">
                        <Link to="/upcomingweekly" state={{ data: data3Content }}>
                            Track & Field Program
                        </Link>
                    </div>

                </div>
            </>

        )
    }

}

export default Specialnews