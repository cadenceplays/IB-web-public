import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for tech connect fall season
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024w.png?alt=media&token=fae7073a-4db0-405f-8a3b-2f8eaf19de86";
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024%20(1).png?alt=media&token=f0599137-3c3e-4976-bbb9-9665d8f2d1bb";
    const dataContent = {
        link: "2024-08-22T00:06:30.584Z_Special_Ol_7499",
    }

    // below are for wild waves
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave2.png?alt=media&token=baf2935f-cab5-4859-a663-ae31eaa45e91";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave1.png?alt=media&token=0300e3c3-5ef0-4034-b699-61e5518e9a24";
    const data2Content = {
        link: "2024-06-10T02:02:06.089Z_Wild_Waves_8446",
    }

    // below are for special olympics track & field
    const data3Content = {
        link: "2024-08-27T03:50:06.315Z_Special_Ol_7960",
    }
    // below are for special olympics tech connect
    const data4Content = {
        link: "2024-08-22T00:06:30.584Z_Special_Ol_7499",
    }    

    // below is for music camp
    const data5Content = {
        link: "2024-08-08T03:46:30.475Z_Music_Camp_7885",
    }

    // below is for issaquah weekly
    const data6Content = {
        link: "2024-09-17T05:46:17.811Z_Outdoor_Sp_3942",
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
                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Aug 10 (Sat)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    Autism Lecture for Parents
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2024-08-04T23%3A41%3A27.660Z_0_4183?alt=media&token=7b203b6f-34ca-4244-b008-5cb8cbc9a1eb" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}
                        
                        {/* <div className="specialnewslist-cell">
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
                        </div> */}

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

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Sep 14 - Oct 12</div>
                            <div className="specialnewslist-button-title">
                                {/* <Link to="/upcomingweekly" state={{ data: dataContent }}> */}
                                    Tech Connect
                                {/* </Link> */}
                            </div>
                            <div className="specialnewslist-button">
                                {/* <Link to="/upcomingweekly" state={{ data: dataContent }}> */}
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FTech%20connect.png?alt=media&token=50a50196-7c62-438a-b802-c8fe4315143a" width="100%" alt="featured" />
                                {/* </Link> */}
                            </div>
                        </div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Sep 22 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    Issaquah Activity
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2024-09-17T05%3A46%3A17.811Z_0_6765?alt=media&token=acac6873-60d6-44b7-a5ab-2d3ef6725870" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Aug 26 - 30</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    Music Camp 
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240807201935a.jpg?alt=media&token=28d7c36c-fe2a-483e-a961-ea8b87837db8" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Sep 22 (Sun)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240911202912.jpg?alt=media&token=a51d770f-25ad-4b04-89aa-9d388244959f">
                                Summer Carnival
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240911202912.jpg?alt=media&token=a51d770f-25ad-4b04-89aa-9d388244959f">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240911202912a.jpg?alt=media&token=06a6ebf7-80c5-4343-bde9-8f763200bf06" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>


                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Sep 23 (Mon)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240916220650.jpg?alt=media&token=286ad748-14d2-4cad-89f9-84cdba961ca5">
                                Special Education
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240916220650.jpg?alt=media&token=286ad748-14d2-4cad-89f9-84cdba961ca5">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240916220650a.jpg?alt=media&token=02c9b02f-05d8-4e27-b556-71d3f36e1c99" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>


                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Oct 6 (Sun)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240828195933.png?alt=media&token=e42853e3-5ac3-4ae3-996b-83ccc1c727cb">
                                Little Masters Bikeathon
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240828195933.png?alt=media&token=e42853e3-5ac3-4ae3-996b-83ccc1c727cb">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240828195933a.jpg?alt=media&token=79a25b65-58e5-4c94-b3bb-ff990d77b25d" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

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
                        {/* <Link to="/upcomingweekly" state={{ data: data4Content }}> */}
                            Tech Connect Program
                        {/* </Link> */}
                    </div>

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