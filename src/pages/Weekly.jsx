import React from 'react';
import "./Weekly.css";
import { Line } from '../components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';
import { Activitiescontent } from '../components';

const PHOTO_HEIGHT = 320;

const weeklyBasketballImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fbasketball%2F2023-07-20T04_30_20.692Z_0_9168.jpg?alt=media&token=65fe9bbc-8e1d-4623-9cb5-a6afa17bb09c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fbasketball%2F2023-07-20T04_30_20.692Z_1_4939.jpg?alt=media&token=1955a010-bd02-46c8-8df2-97ffd4a96f46',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fbasketball%2F2023-07-20T04_30_20.692Z_2_5982.jpg?alt=media&token=f7405016-34f7-4f35-b9c0-7f78eee2e5ff',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fbasketball%2F2023-07-20T04_30_20.692Z_4_2412.jpg?alt=media&token=ee2b1129-bdbf-4ff8-9755-fafab61c18a4',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fbasketball%2F2023-07-20T04_30_20.692Z_5_3904.jpg?alt=media&token=061698c2-dd70-4a1c-a1ec-760a7a026e6f',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklyChessImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fchess%2F2023-07-20T04_39_25.899Z_0_1433.jpg?alt=media&token=51dd2e28-e225-4c98-94c8-ada22d4959dc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fchess%2F2023-07-20T04_39_25.899Z_1_7479.jpg?alt=media&token=6243f0ec-9df4-453d-84c7-aa61211b4745',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fchess%2F2023-07-20T04_39_25.899Z_4_9675.jpg?alt=media&token=cb90083f-3747-4dc4-84ea-6bde532cf45d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fchess%2FWeChat%20Image_20230820145112.jpg?alt=media&token=8726460a-16e3-48c7-8ddc-4627ef79b73c',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklyDrawingImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2F2023-07-20T04_37_17.215Z_0_3586.jpg?alt=media&token=8eb8c670-e5f7-47b6-80f1-33fe17ad302a',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2F2023-07-20T04_37_17.215Z_1_3750.jpg?alt=media&token=c89c0da6-5400-4fa6-8811-92403fa73866',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2F2023-07-20T04_37_17.215Z_5_3157.jpg?alt=media&token=5d2278db-0f61-4f47-9cbe-87a54b20ad5c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2F2023-07-20T04_37_17.215Z_6_3418.jpg?alt=media&token=932f1f49-713e-454d-b653-fad1263cade3',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2F2023-07-20T04_37_17.215Z_8_9799.jpg?alt=media&token=998bebe0-49e3-4b45-a35a-3005b3244e93',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2FWeChat%20Image_20230819111514_crop.jpg?alt=media&token=f1693fd6-cb41-466c-b06e-23c544dc9652',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2FWeChat%20Image_20230819111532_crop.jpg?alt=media&token=d47bf1d6-ca39-4559-86d4-b2889332804c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2FWeChat%20Image_20230819111538_crop.jpg?alt=media&token=46dc333c-e850-42cf-bc45-ce4d79381611',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2FWeChat%20Image_20230819180252.jpg?alt=media&token=8277ba7c-57a5-49a5-a949-9ec2ac791bf3',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fdrawing%2FWeChat%20Image_20230819180316_crop.jpg?alt=media&token=473295ae-236a-4b77-a31e-6b3ba38e60cb',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklyMealPrepImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_0_4632.jpg?alt=media&token=6344e781-1e49-42a9-b625-37de4672bf6e',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_2_3129.jpg?alt=media&token=e1121ded-04b5-4767-9a75-d0c86d9858e1',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_3_964.jpg?alt=media&token=3090de53-d047-421d-abec-5334cbc14b40',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_4_8668.jpg?alt=media&token=f55e2ce4-342c-42e5-9479-0a79a10733dd',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_9_7209.jpg?alt=media&token=42ec1307-b2e5-48e2-8239-e6895482b220',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2F2023-07-20T04_24_23.751Z_5_6893.jpg?alt=media&token=ce10102b-8cfd-4bb9-af5f-1c462355320b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2FWeChat%20Image_20230819175745_crop.jpg?alt=media&token=049c7bef-95f5-44d9-964d-5947ea3e990c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2FWeChat%20Image_20230819175751.jpg?alt=media&token=55b15df7-863c-4bd5-b897-5dab76ca810e',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fmeal_prep%2FWeChat%20Image_20230819175756.jpg?alt=media&token=e361852a-3866-43d2-ab04-9fdb63688a47',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklySpecialOlympicsImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2F2023-07-20T04_25_46.391Z_0_7783.jpg?alt=media&token=85223c00-e437-4552-845b-c2e54421640e',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2F2023-07-20T04_25_46.391Z_1_4349.jpg?alt=media&token=2239dc3f-4607-4dc6-a4bc-a976f6c521e8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2F2023-07-20T04_25_46.391Z_2_1316.jpg?alt=media&token=97162912-82eb-481e-90b5-dd59ab7ffaf8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230819121826_crop.jpg?alt=media&token=0cebd975-0601-4668-8515-a289b2338beb',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230819121836_crop.jpg?alt=media&token=826fe507-5545-45ad-8ae4-bd26281648fd',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230819121840.jpg?alt=media&token=def3dd74-1477-4f90-a0c6-29d76d479a85',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230819121845.jpg?alt=media&token=b3c69f05-ee55-4009-9a41-03992d5bc60d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230819121939_crop.jpg?alt=media&token=1d13fb60-7140-41ee-87c6-0c1fee9a15ae',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230820144046_crop.jpg?alt=media&token=46bd963d-eb28-4274-9d88-ec1668e2e94a',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fspecial_olympics%2FWeChat%20Image_20230820144114_crop.jpg?alt=media&token=04aa35b5-50e4-49c0-90b2-22d2b9ed43c1',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklySportsIssaquahImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230722210420.jpg?alt=media&token=0766666f-f27c-4cba-a937-a39638ce922b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230818230208_crop.jpg?alt=media&token=f5a79bff-ed68-41fa-940b-4e916921ceee',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230818230145_crop.jpg?alt=media&token=df209e99-799d-49d5-94f8-c3709f957ba5',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230819181751.jpg?alt=media&token=5a0550d8-62f7-415e-8762-a84910195ee8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2F2023-07-20T04_29_18.656Z_1_8465.jpg?alt=media&token=78301c92-c153-448f-9796-047ebe931cd3',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230819181812.jpg?alt=media&token=06a1c657-abe9-4eb5-807f-49b00481b207',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2F2023-07-20T04_29_18.656Z_4_8424.jpg?alt=media&token=c8dbbc8b-411a-4dbb-912c-950da73b7eb5',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230819113917.jpg?alt=media&token=1876ede2-b6ec-4210-beda-ebb059b0a6e7',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fsports_issaquah%2FWeChat%20Image_20230819113935.jpg?alt=media&token=704e4d69-259d-4dce-8b16-a934fcf2c716',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklySwimmingImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2F2023-07-20T04_34_18.238Z_0_1621.jpg?alt=media&token=9f26d4f3-fe75-4262-851f-26e85cb512a8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2F2023-07-20T04_34_18.238Z_1_3116.jpg?alt=media&token=7a8fd2e2-0553-4a84-8eb6-a02db8129c1f',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2F2023-07-20T04_34_18.238Z_2_5245.jpg?alt=media&token=bb0138d7-f86f-40b4-9f03-6986a96d274d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2F2023-07-20T04_34_18.238Z_3_6796.jpg?alt=media&token=96b1236c-d8e5-4106-8f4b-3c83256a16bd',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2F2023-07-20T04_34_18.238Z_4_5506.jpg?alt=media&token=d612b9e7-9314-433b-a409-adebb9c0af92',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2FWeChat%20Image_20230820145712.jpg?alt=media&token=4fc1040f-85bd-4d8f-973a-07218b541baf',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2FWeChat%20Image_20230820145745_crop.jpg?alt=media&token=f01d1991-bf6f-4b25-86f9-6b9bc9a2dfde',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2FWeChat%20Image_20230820145808_crop.jpg?alt=media&token=2ed0dbc6-e9ff-4fc0-bad6-7e89c12b0237',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2FWeChat%20Image_20230820145815_crop.jpg?alt=media&token=29b0e02e-0c0f-40da-90ef-a926a3f0c431',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Fswimming%2FWeChat%20Image_20230820145822.jpg?alt=media&token=71436943-a4dc-4a12-b7eb-86c36f26fd2b',
        originalHeight: PHOTO_HEIGHT,
    },
];

const weeklyTennisImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230722202634.jpg?alt=media&token=84f437c1-fe68-4beb-877f-dab419e4cb14',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230722202719.jpg?alt=media&token=5b90de81-6e99-4a64-800e-378fbcbd3256',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230722202725.jpg?alt=media&token=4c0c42fd-dabd-429f-b1d5-87e2d9e16c92',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230722202802.jpg?alt=media&token=6dae27c5-27d1-4f3c-8ea8-ab6a3907737c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230722202808.jpg?alt=media&token=51dc6dd7-5086-4ab3-912f-fb28266bf705',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeChat%20Image_20230819175432.jpg?alt=media&token=42d14112-6775-46bd-9977-0cffeaf75570',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/weekly_activities%2Ftennis%2FWeixin%20Image_20240330094707a.jpg?alt=media&token=cc273da5-dbc4-4870-9697-4303ba8446f5',
        originalHeight: PHOTO_HEIGHT,
    },
];

const Weekly = () => {
    return (
        <div className="weekly">

            <div className="weekly_title_container">
                <div className="weekly_title">
                    Weekly Activities
                </div>
                <div className="weekly_description">
                    We arrange various types of routine weekly activities at International Buddy, including sports activities like swimming, basketball, badminton, soccer, tennis and etc, as well as non-sports activites like drawing, chess, tech and meal preparation.<br /><br />
                    <Link to="/upcomingevents" className="weekly_link">Click here</Link> to sign up for our upcoming activities.
                </div>
            </div>
            <div className="weekly_content_container">

                <div className="weekly_content_activitiescontent">
                    <Activitiescontent />
                </div>

                <div className="weekly_container1">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklySwimmingImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Swimming
                        </div>
                        <div className="weekly_timeloc">
                            Time: 4PM-9PM, Saturday / 10AM-12PM, Sunday<br />
                            Location: Issaquah, Mercer Island, Redmond, Bellevue
                        </div>
                        <div className="weekly_selfintro">
                            Swimming is a weekly activity hosted every weekend in four locations. The children get to learn swimming and receive guidance from our volunteers in the water. Volunteers and kids are paired together in a 1:1 format. We also have Special Olympics swimming training at Bellevue for more experienced swimmers.<br />
                            <ul>
                                <li><b>Julius Boehm Pool: 4PM - 6PM Saturday</b><br/>(50 SE Clark St #2, Issaquah, WA 98027)</li>
                                <li><b>Mary Wayte Pool: 4PM - 6PM Saturday</b><br />(8815 SE 40th St, Mercer Island, WA 98040)</li>
                                <li><b>Redmond Pool: 8PM - 9PM Saturday</b><br/>(17535 NE 104th St, Redmond, WA 98052)</li>
                                <li><b>Bellevue Aquatic Center: 10AM - 12PM Sunday</b><br/>(601 143rd Ave NE, Bellevue, WA 98007)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container2">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklyBasketballImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Basketball
                        </div>
                        <div className="weekly_timeloc">
                            Time: 2PM-4PM Saturday<br />
                            Location: Bellevue, WA
                        </div>
                        <div className="weekly_selfintro">
                            Calling all hoop enthusiasts! Join our legendary basketball team for an action-packed experience. Led by dynamic volunteers, our team is all about mastering basketball skills, nailing those impressive shots, and diving into the thrilling world of the game.<br/>
                            Come join us each Saturday at Crossroads Community Center. Sample schedule as below.<br />
                            2:00 - 2:30 Warmup<br />
                            2:30 - 2:45 Playground Activities<br />
                            2:45 - 3:15 Team Competition pt. 1<br />
                            3:15 - 3:30 Halftime/Games<br />
                            3:30 - 4:00 Team Competition pt. 2
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container1">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklySportsIssaquahImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Sports Activities & Reading @ Issaquah
                        </div>
                        <div className="weekly_timeloc">
                            Time: 10AM-12PM, Sunday<br />
                            Location: Issaquah, WA
                        </div>
                        <div className="weekly_selfintro">
                            Every Sunday from 10AM to 12PM, we host our outdoor activities in the perfect weather consisting of soccer, tennis, basketball, playground, kungfu and reading. Please bring your tennis racket and balls. See you in the field!
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container2">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklySpecialOlympicsImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Special Olympics Training
                        </div>
                        <div className="weekly_timeloc">
                            Time: Saturday<br />
                            Location: Redmond, WA
                        </div>
                        <div className="weekly_selfintro">
                            Every Saturday, International Buddy invites Coach Huang from the Special Olympics to host a physical training session consisting of track and field activities and social games to prepare for the Special Olympics track and field competition in the spring.
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container1">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklyTennisImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Tennis
                        </div>
                        <div className="weekly_timeloc">
                            Time: Saturday and/or Sunday<br />
                            Location: Seattle, Mercer Island, Sammamish
                        </div>
                        <div className="weekly_selfintro">
                        International Buddy hosts two tennis training sessions in Sammamish and Mercer Island/Seattle every week. Our high school varsity level volunteers will help your child to enjoy the fun of playing tennis.
                        <ul>
                            <li>Amy Yee Tennis Club: around 3PM-4PM, Saturday</li>
                            <li>Mercer Island High School: around 3PM-4PM, Sunday</li>
                            <li>Eastlake High School: around 5PM-6PM, Sunday</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container2">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklyMealPrepImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Meal Prep at Salvation Army
                        </div>
                        <div className="weekly_timeloc">
                            Time: 4PM - 7:30PM, Tuesday & Thursday<br />
                            Location: 911 164th AVE NE, Bellevue, WA 98008
                        </div>
                        <div className="weekly_selfintro">
                            Helped out The Salvation Army by providing meals to support local families in need. Come learn social skills and giving back to the community. Children under 14 must be accompanied by adult.
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container1">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklyDrawingImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Drawing
                        </div>
                        <div className="weekly_timeloc">
                            Time: 1:30PM - 3:30PM, Sunday<br />
                            Location: Microsoft Campus, Redmond
                        </div>
                        <div className="weekly_selfintro">
                            Join us for delightful and inclusive drawing activities for our young artists led by experienced volunteers! We host drawing in the Microsoft Campus every Sunday. Please bring your own art supplies.
                        </div>
                    </div>
                </div>

                <Line color="--green-color" width="100%" />
                <div className="weekly_container2">
                    <div className="weekly_photo">

                        <ImageGallery
                            items={weeklyChessImages}
                            showPlayButton={true}
                            showFullscreenButton={false}
                            showIndex={false}
                            slideInterval={2500}
                            showThumbnails={false}
                            showBullets={true}
                            autoPlay={true}
                            showNav={false}
                        />

                    </div>
                    <div className="weekly_content">
                        <div className="weekly_name">
                            Chess
                        </div>
                        <div className="weekly_timeloc">
                            Time: 4PM - 6PM, Sunday<br />
                            Location: Microsoft Campus, Redmond
                        </div>
                        <div className="weekly_selfintro">
                            Calling all chess enthusiasts!<br />
                            Join us for fun chess games. We have a wide range of players, from beginners to advanced players, so don't worry about the need for previous experience.<br />
                            We hope to see you there!
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Weekly