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

    // below are for special olympics
    const data3Content = {
        link: "2024-06-11T04:15:11.000Z_Special_Ol_9712",
    }

    // below are for additional event
    const data4Content = {
        link: "2024-05-25T16:53:35.167Z_Yard_Sale_5567",
    }    

    if (showSpecial) {
        return (

            <>
                {/* below are for wild waves park tour */}
                <div className="specialnews3a">
                    <Link to="/upcomingweekly" state={{ data: data2Content }}>
                        <img src={photo2bLink} width="900" alt="featured" />
                    </Link>
                </div>
                <div className="specialnews3b">
                    <Link to="/upcomingweekly" state={{ data: data2Content }}>
                        <img src={photo2aLink} width="100%" alt="featured" />
                    </Link>
                </div>
                
                {/* below are for summer camp */}
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
                    <div className="specialnews-title">
                        <Link to="/upcomingweekly" state={{ data: data3Content }}>
                            Special Olympics<br/>Track & Field<br />
                        </Link>
                        {/* <Link to="/specialolympics">
                        Join our Special Olympics team!
                        </Link> */}
                    </div>
                    
                    <Link to="/specialolympics">
                        <div className="specialnews-blue-button">
                            <img src={featuredImg} width="300" alt="featured" />
                        </div>
                    </Link>

                </div>

                {/* below are for addtional events */}
                <div className="specialnews4b">
                    <Link to="/upcomingweekly" state={{data: data4Content }}>
                        <div className="specialnews-blue-button">
                            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2FWeixin%20Image_20240524203245.png?alt=media&token=2589bc9f-ddbb-4e47-a1b1-8b43c878a15e" width="100%" alt="featured" />
                        </div>
                    </Link>
                </div>

            </>

        )
    }

}

export default Specialnews