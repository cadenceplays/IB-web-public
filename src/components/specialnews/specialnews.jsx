import React from 'react';
import './specialnews.css';
import featuredImg from '../../assets/specialolympics.jpg';
import { Link } from 'react-router-dom';


const Specialnews = () => {
    const showSpecial = true;

    // below are for basketball individual skill team
    const photoLink2 = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024w.png?alt=media&token=fae7073a-4db0-405f-8a3b-2f8eaf19de86";
    const photoLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FSUMMER%20CAMP%202024%20(1).png?alt=media&token=f0599137-3c3e-4976-bbb9-9665d8f2d1bb";
    const dataContent = {
        link: "2024-10-31T04:11:06.447Z_Special_Ol_7104",
    }

    // below are for wild waves
    const photo2aLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave2.png?alt=media&token=baf2935f-cab5-4859-a663-ae31eaa45e91";
    const photo2bLink = "https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2Fwildwave1.png?alt=media&token=0300e3c3-5ef0-4034-b699-61e5518e9a24";
    const data2Content = {
        link: "2024-06-10T02:02:06.089Z_Wild_Waves_8446",
    }

    // below is for Reading Club
    const data3Content = {
        link: "2024-10-28T23:52:35.656Z_Reading_Cl_8170",
    }

    // below is for issaquah
    const data5Content = {
        link: "2024-11-19T04:18:40.751Z_Thanksgivi_8615",
    }

    // below is for posture
    const data6Content = {
        link: "2024-11-19T04:26:37.470Z_Posture_an_8701",
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
                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Oct 27 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    Halloween Party
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20241019110627a.jpg?alt=media&token=00f25af1-db61-44ce-95fb-1e7c236360ab" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}
                        <div className="specialnewslist-cell-empty"></div>

                        <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Oct 27 - Dec 8</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    Posture & Body Shaping
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data6Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2024-10-25T00%3A47%3A11.081Z_0_5051?alt=media&token=8eb273ff-ce82-43ba-8c46-7aa9783cdec9" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Oct 13 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                            Posture & Body Shaping 
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20241007231803a.jpg?alt=media&token=4d5cac9b-8fea-47f9-8f70-619bbf1d04bd" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}



                        
                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Oct 28 (Mon)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FGemini_Generated_Image_je3vvvje3vvvje3v.jpg?alt=media&token=4a7d105a-2df1-412b-9369-caba81f150cb">
                                Meet Cha
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FGemini_Generated_Image_je3vvvje3vvvje3v.jpg?alt=media&token=4a7d105a-2df1-412b-9369-caba81f150cb">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FGemini_Generated_Image_je3vvvje3vvvje3va.jpg?alt=media&token=dd44bc3a-c7b5-4d9a-84e2-c4c1899b6ee7" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Nov 3 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    IB Training
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2024-10-17T03%3A38%3A37.819Z_0_3015?alt=media&token=b495c7e0-8ac7-496b-9462-f02ab1e14882" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

                        {/* <div className="specialnewslist-cell">
                            <div className="specialnewslist-button-date">Nov 10 (Sun)</div>
                            <div className="specialnewslist-button-title">
                            <Link to="/upcomingweekly" state={{ data: data3Content }}>
                                    Reading Club Volunteer Meeting
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                            <Link to="/upcomingweekly" state={{ data: data3Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/event_upcomings%2F2024-10-28T23%3A52%3A35.656Z_0_4085?alt=media&token=e3cbbc6b-cc66-452e-98a1-ad4fb525291a" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div> */}

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
                            <div className="specialnewslist-button-date">Nov 24 (Sun)</div>
                            <div className="specialnewslist-button-title">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                Thanksgiving Potluck
                                </Link>
                            </div>
                            <div className="specialnewslist-button">
                                <Link to="/upcomingweekly" state={{ data: data5Content }}>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fthanksgiving%2FWeixin%20Image_20241116225124a.jpg?alt=media&token=0f0f7513-1502-41b9-a20e-5399d126485f" width="100%" alt="featured" />
                                </Link>
                            </div>
                        </div>

                        <div className="specialnewslist-cell-empty"></div>
                        
                        {/* <div className="specialnewslist-cell">
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
                        </div> */}





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
                        <Link to="/upcomingweekly" state={{ data: dataContent }}>
                            Basketball Individual Skill Team
                        </Link>
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