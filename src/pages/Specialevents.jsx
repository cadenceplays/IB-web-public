import React from 'react';
import "./Specialevents.css";
import { Line } from '../components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from 'react-router-dom';

const PHOTO_HEIGHT = 320;

const specialFencingImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2F2023-06-14T04_57_32.743Z_6_6432.jpg?alt=media&token=33da467f-9512-474c-a54a-661d4c10fd1d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2F2023-07-20T03_12_32.079Z_2_3875.jpg?alt=media&token=93ba1c75-5e3e-451f-9087-85f475e128ae',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2F2023-07-20T03_12_32.079Z_3_5544.jpg?alt=media&token=727d1b66-2094-4f9e-9111-df6ca765db48',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2F2023-07-20T03_12_32.079Z_4_1111.jpg?alt=media&token=213f62c8-e73c-4c8a-9b4f-ea4568653f93',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2FWeChat%20Image_20230819122752.jpg?alt=media&token=00303181-b503-446d-8199-cb12125a779d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2FWeChat%20Image_20230819122822.jpg?alt=media&token=8474d553-0f1d-4eab-a514-765849639062',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ffencing%2FWeChat%20Image_20230819122826.jpg?alt=media&token=7f734a5d-c999-4aef-a5f1-bb73c6ac8f8b',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialWildWavesImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2F2023-07-20T04_21_25.822Z_1_3272.jpg?alt=media&token=66877dca-2446-4308-bd55-63569ea58afe',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FaWeixin%20Image_20240716100713.jpg?alt=media&token=4947bfef-00e5-4be6-b029-8ac6e1339e36',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2F2023-07-20T04_21_25.822Z_3_6.jpg?alt=media&token=6d9b9967-61ce-42db-a4a6-929a944b5462',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FaWeixin%20Image_20240630213407.jpg?alt=media&token=c96a58ec-a90b-4a9e-a50e-01d603bfa84d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2F2023-07-20T04_21_25.822Z_6_450.jpg?alt=media&token=1785da2b-4509-4934-b861-9021eda8c805',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FWeChat%20Image_20230819181115.jpg?alt=media&token=8a87aaaf-068e-45c4-a1f8-063cb9178d45',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FaWeixin%20Image_20240716100659.jpg?alt=media&token=6e33aa92-7a0a-46ab-a8d1-496e6f6456af',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FaWeixin%20Image_20240630213354.jpg?alt=media&token=463733d3-78d0-406d-8be5-c6e66d901a63',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FWeChat%20Image_20230819181126_crop.jpg?alt=media&token=dc8261e1-0e28-46bb-8329-b3eeb68b8a94',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fwild_waves%2FWeChat%20Image_20230819181135_crop.jpg?alt=media&token=c89a8812-d9d0-43fe-8880-3e24f3268001',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialGarageSaleImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FWeixin%20Image_20240924123641.jpg?alt=media&token=35178aff-b8f5-4ce1-80ee-bbcf84afbcf6',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FWeixin%20Image_20240924123650.jpg?alt=media&token=1dd0f8b7-1931-49bd-9b68-471a216b4b6b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2F2023-07-20T04_12_36.335Z_0_6637.jpg?alt=media&token=b80aa036-8d2f-4f62-aad4-66a94aac04a0',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FaWeixin%20Image_20240924123700.jpg?alt=media&token=a3a24c10-d535-4868-a909-605d126b00ed',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FWeixin%20Image_20240924113749.jpg?alt=media&token=09ecdd5f-9232-405c-af59-252da457630f',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2F2023-07-20T04_12_36.335Z_4_7682.jpg?alt=media&token=07da1a1d-c0c5-4856-ad8b-779192837067',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2F2023-07-20T04_12_36.335Z_6_5489.jpg?alt=media&token=db735ffc-c20a-4db5-80ba-843739873e1b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2F2023-07-20T04_12_36.335Z_7_9420.jpg?alt=media&token=dd0be754-2d6e-4590-a3ed-777e8b30de92',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FWeChat%20Image_20230820145306.jpg?alt=media&token=0b628f30-51ad-46b5-a054-855c4a204ff4',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fgarage_sale%2FWeChat%20Image_20230820145419_crop.jpg?alt=media&token=db83131c-8b0e-4a92-a7a7-89d51608c9ee',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialPartyImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2F2023-07-20T03_05_47.144Z_1_311.jpg?alt=media&token=454d63ad-3f6a-4a04-b0e7-eb30720c22e0',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FaGE3A0483.JPG?alt=media&token=6b06b72a-58ef-4ec7-8ca6-2bdd3131911a',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2F2023-07-20T03_05_47.144Z_4_3411.jpg?alt=media&token=29c0cf23-021b-458e-b8c3-fb63abf0bdbf',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FaGE3A0615.JPG?alt=media&token=eeca8aaa-d479-4df2-98aa-3a0db09800ed',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2F2023-07-20T03_05_47.144Z_7_607.jpg?alt=media&token=2b588bd0-e803-495a-b565-21e73894fb26',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FaGE3A0558.JPG?alt=media&token=688f5a59-e4b8-4e90-8e2f-e3220254b5b8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FWeChat%20Image_20230820143058_crop.jpg?alt=media&token=017b16b7-cae3-4720-b936-96ae25d3e9b7',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FWeChat%20Image_20230820143114_crop.jpg?alt=media&token=f52cbad7-1ecd-43f8-8458-aefc67b9ce75',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fappciation_party%2FWeChat%20Image_20230820143126_crop.jpg?alt=media&token=4fa59522-6e40-4f65-87c9-cae014e0c773',
        originalHeight: PHOTO_HEIGHT,
    },
];

const summerCampImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140539_crop.jpg?alt=media&token=9338a034-8277-434d-b06a-fcf955890f62',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140526_crop.jpg?alt=media&token=1b66a645-716b-4dd8-af0e-1a637f94bb19',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140552.jpg?alt=media&token=1f1677c1-1951-4a10-b1d2-849e00aff2fd',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FaWeixin%20Image_20240731105639.jpg?alt=media&token=7c72faa2-a898-4c22-b6c9-43ec948182f6',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FaWeixin%20Image_20240815155354.jpg?alt=media&token=bc219457-1a2e-4393-bd77-ed32add2dfbc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140634_crop.jpg?alt=media&token=fad6cdb1-e8b3-4d5c-a1e6-a33cf296442c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140655_crop.jpg?alt=media&token=a1ca6890-d213-4c75-9dc0-188b7d38b249',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp%2FWeChat%20Image_20230820140729.jpg?alt=media&token=154aa585-d592-42b4-b15b-0d74c4776b8b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fsummer_camp_2024%2FaWeixin%20Image_20240815202451.jpg?alt=media&token=9ade2c09-583c-4b97-85c0-5563079bc2b3',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialMicrosoftImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20231029134413.jpg?alt=media&token=1fc7d9c6-1edb-4fc6-98b9-632ddb88ce36&_gl=1*p3n3fe*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTYwLjUxLjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20231029134447a.jpg?alt=media&token=259d34e7-55ed-413e-8546-130e0e751f97&_gl=1*yqcpdv*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTY4LjQzLjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20231029134418a.jpg?alt=media&token=aecdb632-223f-4207-9372-fe034e74f665&_gl=1*4bi3gr*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTc3LjM0LjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20231029134429a.jpg?alt=media&token=30773e83-324c-4462-ba0d-8d7c69610919&_gl=1*175wxgh*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTg0LjI3LjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20240620151755s.jpg?alt=media&token=7e0fa72e-3768-49c2-8d49-30673e7ed1a5',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fmicrosoft%2FWeixin%20Image_20240620151820s.jpg?alt=media&token=2c2afc86-89c0-4885-a024-731c79a885ec',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialChristmasImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchristmas%2FWeixin%20Image_20231210213627.jpg?alt=media&token=4c7f324a-68b7-49aa-a293-b90f46015ef8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchristmas%2FWeixin%20Image_20231210213649a.jpg?alt=media&token=0f64b151-6801-4812-ad38-da857bea908f',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchristmas%2FWeixin%20Image_20231210213743.jpg?alt=media&token=8aa4564e-05c2-4747-ba63-a6222b30f0fc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchristmas%2FWeixin%20Image_20231210213605.jpg?alt=media&token=cd9a8507-5bfc-4fa1-8f1f-f911e411291a',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fthanksgiving%2FWeixin%20Image_20231126163406.jpg?alt=media&token=6391027e-fc5a-4690-af54-5a47f4250f2e',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fthanksgiving%2FWeixin%20Image_20231126163429.jpg?alt=media&token=ff8a4b9c-4dbc-46a3-8524-6b88ddced555',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fhalloween%2FWeixin%20Image_20231029134326a.jpg?alt=media&token=4f6becd0-474d-4f61-a887-71e40f6f06da&_gl=1*9gw43k*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTI0LjI3LjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fhalloween%2FWeixin%20Image_20231029134251a.jpg?alt=media&token=daedc197-e9af-4559-9efb-63556a1231a0&_gl=1*t1s524*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjEzNTMyLjE5LjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fhalloween%2FWeixin%20Image_20231029142118a.jpg?alt=media&token=b75b3874-749a-486c-8a3d-e938bd496b11&_gl=1*ovdpjy*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxMzA1Ni4zOTQuMS4xNjk4NjE0NTM4LjQ4LjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fhalloween%2FWeixin%20Image_20231029154005.jpg?alt=media&token=ab593c81-30ce-438e-8376-2cbe26dc3a75&_gl=1*gneswg*_ga*MzEyMDY4ODEwLjE2Nzc5MDE4NTU.*_ga_CW55HF8NVT*MTY5ODYxOTIyMi4zOTUuMS4xNjk4NjE5Mjg0LjYwLjAuMA..',
        originalHeight: PHOTO_HEIGHT,
    },
];

const specialSwimMeetImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_2_89.jpg?alt=media&token=3b93a8d1-6ded-4a4d-adf2-9a0cafed59cc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_4_5907.jpg?alt=media&token=968bb368-4b3a-44f4-9472-43c64b525e20',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_8_8041.jpg?alt=media&token=5389d61c-9fb0-4d37-9a40-221f852fd132',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_1_7294.jpg?alt=media&token=d88b2776-a353-4957-9b06-691e008770a9',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_3_8441.jpg?alt=media&token=0c9bcec5-1ea1-4211-86e9-fe3b9920b3bf',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_5_651.jpg?alt=media&token=f9251cbd-f4fc-4d04-8c9c-2dbc1c4bd261',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_6_3531.jpg?alt=media&token=efdbdb18-dbb5-4874-a526-4064477168e2',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_7_9493.jpg?alt=media&token=4ca55429-ec46-4836-a52f-0775a32c46ee',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-19T23_35_30.958Z_9_2446.jpg?alt=media&token=de75086a-0626-4128-aff9-d12a410966f5',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fswim_meet%2F2024-01-20T00_35_10.445Z_3_240.jpg?alt=media&token=b213e2cf-432e-42d9-ab1a-372fde16a627',
        originalHeight: PHOTO_HEIGHT,
    },
];

const nordicSkiCampImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2F6.png?alt=media&token=a7c7e3d8-aa51-41d9-80ce-01dda9fd40fc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240226180107a.jpg?alt=media&token=08d79c7a-8744-4348-8eeb-d1fa1860310d',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240226180116a.jpg?alt=media&token=67918062-09b6-4606-a0d2-4eac1045983b',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240226180131a.jpg?alt=media&token=50b1411a-d112-4ec3-8326-bf0b14915d15',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240226180120a.jpg?alt=media&token=a7bae7bf-9ec9-4ba7-8649-56f0cc9900ba',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240226180113a.jpg?alt=media&token=90490235-4725-4d59-878b-7b9196b4fb60',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240310184552a.jpg?alt=media&token=0283d4b1-20ac-425f-a478-25dc85523cb4',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240310184625a.jpg?alt=media&token=bb5bffe5-7596-4623-ba3e-ae3d10f7c6df',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240310184629a.jpg?alt=media&token=e06f51fc-ad86-4a34-b20f-d07b3c792971',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fnordic_ski%2FWeixin%20Image_20240310184637a.jpg?alt=media&token=c5aaeafa-50fa-40f3-9ff9-857bd14e9853',
        originalHeight: PHOTO_HEIGHT,
    },
];

const onevsoneImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fonevsone.jpg?alt=media&token=b316f2d7-e305-4a54-a491-83e90245a958',
        originalHeight: PHOTO_HEIGHT,
    },
];

const blueoriginImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fblue_origin%2FWeixin%20Image_20240618215758.jpg?alt=media&token=df23c258-3f85-4d60-9293-fa9a493d1eaf',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fblue_origin%2FWeixin%20Image_20240618215825.jpg?alt=media&token=afa717f4-83f7-4198-97b2-765793efd5b2',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fblue_origin%2FWeixin%20Image_20240618215830.jpg?alt=media&token=0cb841f9-af92-4ec2-8530-5d9ad193a7b3',
        originalHeight: PHOTO_HEIGHT,
    },
];

const trainingImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2Fmmexport1737689947066.jpg?alt=media&token=9250f950-9aef-40a6-bae5-6c06c8d20fb8',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2Fmmexport1737689995785.jpg?alt=media&token=ee07ef99-3e77-43a7-8e04-b3adcfdb0d1f',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FIMG_0051.jpg?alt=media&token=1196565d-b6be-4df3-bb75-7e41c7d44dc9',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FIMG_0066.jpg?alt=media&token=9f0f2772-0ef7-4388-a76c-405f104715aa',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FIMG_0100.jpg?alt=media&token=234f82f2-b261-4b2c-8d2f-e25d5038ba81',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2F20241103_163748.jpg?alt=media&token=7f71effb-8e92-4fe0-8db4-232065956f28',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FWeixin%20Image_20240625101511s.jpg?alt=media&token=043fe01b-722c-40c6-8eaa-09e40bc5a8e4',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FWeixin%20Image_20240625101517s.jpg?alt=media&token=43cc7897-83b4-4e4c-993c-7ce923334839',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FWeixin%20Image_20240625101524s.jpg?alt=media&token=9ebfe222-ff97-4fab-8cae-0b933a1766eb',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Ftraining%2FWeixin%20Image_20240625101529s.jpg?alt=media&token=8cefbf7d-e561-4d18-8c7e-608a04cc9f15',
        originalHeight: PHOTO_HEIGHT,
    },
];

const chessImages = [
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440854006_362306580174742_1247229090884165750_n.jpg?alt=media&token=2c083657-d431-40ae-be35-46024f2787fe',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440866689_362306606841406_103135094331581692_n.jpg?alt=media&token=18a279b9-27d1-409a-9151-223b13293d21',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440870376_362306636841403_4287446404433936207_n.jpg?alt=media&token=e93550be-6ba3-4b62-ad86-1fc112487e1f',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440871806_362306553508078_7988486892452778631_n.jpg?alt=media&token=da62889b-878a-407e-aab7-2d4de897c3f7',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440873761_362306536841413_2031524871054891725_n.jpg?alt=media&token=389afc5f-595e-407c-b4f4-7d2738d30891',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440874974_362306640174736_1472686826511900594_n.jpg?alt=media&token=e2ff4adc-f83a-4a51-a02e-72f19251c7cc',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440885827_362306603508073_4969919733407189123_n.jpg?alt=media&token=dbfcd16f-c75d-4bcf-87b2-96f63f78ea3a',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440887157_362306613508072_6491173983600755719_n.jpg?alt=media&token=fca7079d-ff2f-411c-a81e-19cf3368745c',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440889535_362306610174739_7525605313716154384_n.jpg?alt=media&token=d296ce84-1af8-4b6c-ac50-300fc5e967d1',
        originalHeight: PHOTO_HEIGHT,
    },
    {
        original: 'https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/special_events%2Fchess%2F440894676_362306570174743_8281160813329605220_n.jpg?alt=media&token=12712f90-a176-4b6b-a306-5d94a524b1ed',
        originalHeight: PHOTO_HEIGHT,
    },
];


const Specialevents = () => {
    return (
        <div className="special">

            <div className="special_title_container">
                <div className="special_title">
                    Special events
                </div>
                <div className="special_description">
                Besides our weekly activities, International Buddy hosts various types of special events each year. In 2022-2024, we have arranged sports events like Nordic ski camp, fencing 101 and swim meet, fundraising events like Microsoft presentations and yard sale, excursion events like Wild Waves Park Tour, party events like volunteer appreciation party and holiday parties, and much more.<br /><br />
                    We will post new special events in our upcomings page, you can <Link to="/upcomingevents" className="special_link">click here</Link> to sign up for our upcoming special events.
                </div>
            </div>
            <div className="special_content_container">

                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Volunteer Trainings
                        </div>
                        <div className="special_timeloc">
                            Date: Jan. 2025, Nov. 2024, Jun. 2024<br />
                            Location: Bellevue, Issaquah, Mercer Island
                        </div>
                        <div className="special_selfintro">
                        IB President, VPs and Captains gave in person training to our new volunteers. More than 20 volunteers joined each session. The leaders talked about their experiences and insights in IB. The speeches and Q&A were great. We will hold training events regularly to give everyone more opportunities to communicate.  <br/><br/><Link to="/training" className="special_link">Training material can be found here</Link>
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={trainingImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                {/* <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            1:1 Online Tutoring
                        </div>
                        <div className="special_timeloc">
                            Date: Summer 2024 ongoing<br />
                            Location: Online
                        </div>
                        <div className="special_selfintro">
                        International Buddy cooperated with ND Empowermeng and Peer 1 on 1 to provide online 1:1 tutoring. Please scan the QR code to sign up as volunteer or student. 
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={onevsoneImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" /> */}
                
                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Swim Meet
                        </div>
                        <div className="special_timeloc">
                            Date: January 14, 2024<br />
                            Location: Bellevue Aquatic Center
                        </div>
                        <div className="special_selfintro">
                        This past Sunday, International Buddy hosted our first swim meet consisting of seven events at the Bellevue Aquatic Center. Congratulations to all our swimmers who showcased their hard work through very fast swimming! Thank you to our incredible volunteers for their enthusiasm and help, making the meet a great success!
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialSwimMeetImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Chess Tournament
                        </div>
                        <div className="special_timeloc">
                            Date: April 21, 2024<br />
                            Location: Microsoft Cafe
                        </div>
                        <div className="special_selfintro">
                        Check out some highlights from our chess tournament hosted on April 21st at the Microsoft Building Cafe! Congratulations to all the participants and our amazing volunteers who helped with the competition! 
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={chessImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Nordic Ski Camp
                        </div>
                        <div className="special_timeloc">
                            Date: February 25 & March 10, 2024<br />
                            Location: Summit East, The Summit at Snoqualmie
                        </div>
                        <div className="special_selfintro">
                        International Buddy cooperated with The Summit at Snoqualmie ski resort to host our first nordic ski camp. Although it was raining the whole afternoon on both Sunday, all the 16 children who joined camp were so passionate about cross-country skiing. It was the first time for the children to try Nordic skis, but with the help of our coach and volunteers, they could already ski up and down slopes by themselves and enjoy the fun. We appreciate our incredible volunteers for their passion and dedication! 
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={nordicSkiCampImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Fencing 101
                        </div>
                        <div className="special_timeloc">
                            Date: June 11, 2023<br />
                            Location: 17530 132nd Ave NE, Woodinville, WA 98072
                        </div>
                        <div className="special_selfintro">
                            Discover foil, epee, and sabre fencing styles with professionals. Learn etiquette, competition processes, and result interpretation. Immerse in popular techniques, warm-up, try basic footwork, and engage in training mini-games.
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialFencingImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Fundraising Events
                        </div>
                        <div className="special_timeloc">
                            Date: Ad-hoc<br />
                            Location: Microsoft Campus, Redmond, WA
                        </div>
                        <div className="special_selfintro">
                        Our volunteers joined multiple outreach and fundraising events at Microsoft Campus. We prepared presentation boards, handouts and small gifts to attract attention. The purpose of the events is to raise the awareness of our organization, to help more children with special needs, and to raise more funds to support our daily operation. 
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialMicrosoftImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />
                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Yard Sale
                        </div>
                        <div className="special_timeloc">
                            Date: June<br />
                            Location: Issaquah, WA
                        </div>
                        <div className="special_selfintro">
                        Starting from 2023, International Buddy joined the Issaquah Highlands Community Yard Sale in June to help raise funds. Although it was raining in both years, with the help of our volunteers and buddies, we still raised $600 - $800 in each yard sale.
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialGarageSaleImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Outreach Event
                        </div>
                        <div className="special_timeloc">
                            Date: June 15, 2024<br />
                            Location: Blue Origin
                        </div>
                        <div className="special_selfintro">
                        During our field trip to Blue Origin, IB buddies and volunteers learned a great amount of information, not only gained insight into Blue Origin's vision for the future but also were introduced to their Club for the Future, the nonprofit organization funded by Blue Origin. The most exciting part was that we had a rare opportunity to view the very area where Blue Origin built the New Shepard reusable rocket. Overall, everyone had a blast time during the visit, learned about the future with Blue Origin and Blue Origin's passion for exploring the unknown.
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={blueoriginImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Summer Camp
                        </div>
                        <div className="special_timeloc">
                            Date: July/August<br />
                        </div>
                        <div className="special_selfintro">
                        International Buddy hosted the first summer camp at Mercer Island in 2022 and two summer camps at Hand-in-Hand Farm (Woodinville) in 2024. They were blasts! Volunteers and buddies participated in many different group activities: farm activities such as animal feeding, fruit u-pick, garden work, farm maintenance, fun athletic activities including tug of war, jump rope, races, etc. Medals were awarded to the best performing volunteer-buddy pairs at the end of each week.
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={summerCampImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Wild Waves Park Tour
                        </div>
                        <div className="special_timeloc">
                            Date: June & July<br />
                            Location: Wild Waves Theme & Water Park
                        </div>
                        <div className="special_selfintro">
                            International Buddy hosts two Wild Waves Park Tours each year! Buddies were grouped together with volunteers for various activities, such as swimming, park rides, and games. Every tour was a blast! Our children have a full day of fun playing together with volunteers.
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialWildWavesImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container1">
                    <div className="special_content">
                        <div className="special_name">
                            Volunteer Appreciation Party
                        </div>
                        <div className="special_timeloc">
                            Date: June<br />
                        </div>
                        <div className="special_selfintro">
                        International Buddy has hosted annual volunteer appreciation parties in June since 2023. This is our biggest family event! Buddies and families came to cheer for their favorite volunteers and showcase their best dishes! All buddies, volunteers and families come and enjoy the delicious food, fun games and beautiful weather of PNW in each early summer. 
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialPartyImages}
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
                </div>
                <Line color="--mediumblue-color" width="100%" />

                <div className="special_container2">
                    <div className="special_content">
                        <div className="special_name">
                            Holiday Parties
                        </div>
                        <div className="special_timeloc">
                            Date: Holiday Season<br />
                            Location: Issaquah, WA
                        </div>
                        <div className="special_selfintro">
                        International Buddy arranged Halloween, Thanksgiving and Christmas parties during the holiday season. More than 30 children and volunteers joined each party. IB friends and families have had a wonderful time together. We had a great talent show, gift exchange, games, art works, as well as pizza, salad candies and drinks. The cotton candy machine is probably the most welcomed corner. Happy Holidays!
                        </div>
                    </div>
                    <div className="special_photo">

                        <ImageGallery
                            items={specialChristmasImages}
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
                </div>


            </div>
        </div>

    )
}

export default Specialevents