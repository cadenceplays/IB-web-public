import React from 'react';
import "./Ourteam.css";
import { Line } from '../components';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Ourteam = () => {
  // scroll to leader's bio if you click on link
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <div className="ourteam">

      <div className="ourteam_title_container">
        <div className="ourteam_title">
          Our Leaders
        </div>
        <div className="ourteam_description">
          As the core of International Buddy, our volunteers make everything we do possible. Below are some of our organizational leaders, who lead our volunteers in everything we do.
        </div>
      </div>
      <div className="ourteam_content_container">
        <div id="emily-zheng" className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femily%20zheng%20-%20president.jfif?alt=media&token=da58d7ed-bc6e-47da-9faf-f6e05c0bf496" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emily Zheng<br />
              President
            </div>
            <div className="ourteam_selfintro">
              Emily is a junior from international school for the 2025-2026 school year. She likes being involved and doesn’t mind helping when something needs to get done. She’s especially passionate about creative expression and learning how different people think, which shows up in both her art and her love for debate. Emily started working with International Buddy since its founding in 2018, making her knowledgeable and integrated into International Buddy’s core values. In her presidency, Emily strives to bolster volunteer inter connection in order to sustain hosting the ever-so-growing community.
            </div>
          </div>
        </div>
        <Line color="--green-color" width="100%" />

        <div id="celena-zhang" className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcelena%20-%20vp%20of%20events%20-%20resized.jpg?alt=media&token=d59ca047-caa5-4b14-a45d-2bcfa8acc32a" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Celena Zhang<br />
              Co - President
            </div>
            <div className="ourteam_selfintro">
              My name is Celena Zhang and I am a senior at Mount Si High School for the 2026-27 school year. Since joining IB in 2022, I've gained such valuable experience in many of International Buddy's activities. I have been in a variety of positions, such as VP of Events, Snoqualmie outreach, and Issaquah Activity Lead. I love planning events for this organization and recruiting new members to the organization. I am excited to continue helping others connect with the resources they need, and look forward to meeting more people while having fun in the process!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fcadence%20liao.jpg?alt=media&token=00b36dd7-3679-45b0-9562-c0b7e61e1f44" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Cadence Liao<br />
              VP of Technology
            </div>
            <div className="ourteam_selfintro">
              Cadence Liao is a senior graduating from the Class of 2027 at Eastside Preparatory School, and has been a dedicated contributor for International Buddy since her freshman year in 2023. This year, she will be stepping into the role of Vice President of Technology for IB. As VP, she will be working closely with other leaders to continue to improve the functionality and organization of IB's website and technical resources, and she will also assist with increasing the online presence of IB. Her additional responsibilities include maintaining the efficiency of the IB website alongside her team, providing assisstance for volunteer events, and gathering feedback from clients to further improve user experience. Cadence is deeply committed to upholding the previous VP's goals of smooth communications, outreach, and innovation. She is thrilled to utilize this opportunity to further support this wonderful community!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fsophia%20li.jpg?alt=media&token=47aab4ca-b1e6-4318-9d91-a35491cf95c8" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Sophia Li<br />
              VP of Development
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Sophia Li and I am a senior at Eastlake High School serving as the Vice President of Development for International Buddy. I have been a member of this organization since my freshman year, contributing around 700 volunteer hours. Over the past four years, I have had the opportunity to see firsthand the meaningful impact International Buddy has on families in our community. Through every event, I have witnessed how IB creates connections and provides support to those who need it. As VP of Development, my goal is to continue expanding International Buddy's impact by strengthening our social media to reach more families and volunteers. I also plan to improve the onboarding process, making it easier for families as well as volunteers to get involved and access the resources we provide. I am excited to help our organization grow while continuing to foster an inclusive, welcoming community where every family feels supported.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femma%20-%20science%20captain.jpg?alt=media&token=f979ed82-fc9a-434b-b154-8f75f3448c4a" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emma Li<br />
              VP of Fundraising
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Emma, a junior at Lakeside School for the 2025-2026 school year. I started volunteering with International Buddy in my freshman year and have enjoyed the past two years of tutoring, teaching science, and playing chess and sports with kids and other volunteers. As a leader of Science Club, I hope to share my love for biology, inspire kids to pursue their interests, and use my knowledge to make science a more inclusive, comfortable place for all.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Femma%20hu.jpg?alt=media&token=05f0ec65-efc1-46ce-af42-d8abf5dd0b20" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emma Hu<br />
              VP of Administration
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Emma Hu, a Senior at Newport High School for the 2026 - 2027 school year. Since I began volunteering in 2022, I've gained meaningful experience through a variety of activities, from swim programs to summer events. It's been incredibly rewarding to watch children grow and thrive under my care, and I've especially enjoyed helping new volunteers get involved through International Buddies. During my time as a Captain of Sunday Outside sports and more, I had the joy of seeing volunteers step out of their comfort zones, form bonds with the kids, and find joy in making a difference in each child's day! As the VP of administration I will be in charge of validating volunteer hours. I am also looking forward to working with the leadership team by providing support in any way I can.
            </div>
          </div>
        </div>

         <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2026%2Fderek%20li.jpg?alt=media&token=c4ac33fe-2e67-4911-bba2-2e5fb5f79039" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Derek Li<br />
              VP of Operations
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Derek Li, a rising senior at The Overlake School for the 2026–2027 school year. I have been involved with International Buddies for nearly four years, contributing over 500 volunteer hours, and it has become an important part of my life. Outside of IB, I enjoy playing basketball and the saxophone—passions that naturally led me to captain both IB's Basketball Club and Mini Band program. During my time with the organization, I've organized several summer camps, served as co-captain of the Basketball Club and captain of Mini Band program, presented at fundraisers, and led volunteer trainings. Above all, I'm passionate about building genuine, lasting relationships with our buddies. Getting to know each of them as a friend is what keeps me coming back. As Vice President of Operations, my goal is to strengthen IB by improving our internal systems, enhancing volunteer coordination, and ensuring every session runs smoothly so that every participant has the best experience possible.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fedward%20-%20science%20captain.jpg?alt=media&token=9c73044d-6877-4e70-bd0a-ee46d3ab78e4" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Edward Li<br />
              VP of Communication
            </div>
            <div className="ourteam_selfintro">
              Hi! My name is Edward, and I am a rising senior at Mercer Island High School for the 2026-2027 school year. I joined International Buddy in 9th grade, and I've had so much fun across a wide range of events, from Outdoor Sports to Chess and Science Club, which I co-captained. I'm excited to serve as your VP of Community Outreach this year, and I plan on expanding IB and connecting with an even larger community. This organization has been extremely valuable to me, and I'm excited for another year with IB!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FTimothy%20Liao.JPG?alt=media&token=b3ad0cec-fb64-4ee3-8a9e-b6155e05e7a1" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Timothy Liao<br />
              VP of Community Outreach (Mercer Island)
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Timothy Liao, a Mercer Island High School junior for the school year of 2025-2026. I have been volunteering with IB since 2023 and cherish this opportunity to share my passion for tennis. As the tennis team leader, I hope to not only continue all the fun from before but also reach out to any kid who wants to play. Hope to see you on the court!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcloris%20-%20swimming%20captain%20bac.jfif?alt=media&token=19e9c6c7-ae3a-4ad7-9f1e-13fd93ad36a8" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Cloris Wang<br />
              VP of Community Outreach (Bellevue)
            </div>
            <div className="ourteam_selfintro">
              Hello, my name is Cloris Wang and I am a rising sophomore at Bellevue High School for the 2025-2026 school year. I have been volunteering with International Buddy for 2 years now and each moment has been incredibly rewarding. As the swim captain at Bellevue Aquatic Center, I help organize swim meets and welcome new volunteers. I’ve had the pleasure of helping kids develop both their swimming and social skills, and I hope to continue doing so in the future!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FJennifer%20Xue.JPG?alt=media&token=2c5633af-bbe8-42c9-aead-5a143ef28bd2" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Jennifer Xue<br />
              VP of Community Outreach (Redmond)
            </div>
            <div className="ourteam_selfintro">
              My name is Jennifer and I'm a senior at Overlake. I have worked with IB for three years now, and I have built tons of amazing connections with the kids. I love getting to know each kid, and I am very grateful that I've been a part of so many amazing experiences here. I've mainly been a part of the basketball program and 1on1 tutoring, previously being the basketball captain for two years. I'm super excited to step into this new role and I hope I'm able to connect more of the community with this organization.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Falex%20kang%20-%20special%20olympics%20swim%20captain.jfif?alt=media&token=c20a321c-f07f-4bd7-b18b-2cee82e43752" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Alex Kang<br />
              VP of Events
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Alex Kang, and I am a rising junior at Bellevue High School for the 2025-2026 school year. I have been volunteering with International Buddy since 2023, and it has been an amazing experience. I have met so many wonderful people and have had the opportunity to work with kids in a variety of activities. As the Special Olympics Swim Captain, I am excited to continue working with the kids and helping them improve their swimming skills. I hope to create a fun and supportive environment where everyone can feel comfortable and confident in their abilities.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Falexander%20zhao%20-%20swim%20captain%20mercer%20island.jfif?alt=media&token=08503c3c-cfb1-431d-8f80-23b0442f90be" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Alexander Zhao<br />
              VP of Sustainability
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Alexander Zhao, and I'm a rising senior at International School for the 2026-27 year. I have volunteered for International Buddy since I was in 8th grade, and just last year became the captain in the weekly swimming program for one of our locations. As I step up to be the VP of Sustainability, I hope that we maintain the workforce of both volunteers and their buddies, ensuring that International Buddy continues to help buddies grow and learn through multiple years.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Faddy%20wei%20-%20art%20group%20captain.jpg?alt=media&token=b2801e30-3369-4968-b587-2954d3b46111" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Addy Wei<br />
              VP of Education
            </div>
            <div className="ourteam_selfintro">
              Hello, my name is Addy Wei and I am a rising senior at Eastside Preparatory School. Ever since I could hold a pencil, I have loved drawing and creating art. I began with traditional pencil and watercolor, then moving to acrylic and digital painting. Recently, I have explored ceramics, metalworking, graphic design, photography, and prop creation, all of which I enjoyed. I lead the drawing group, which I joined as a volunteer in the spring of 2024, and have been eagerly helping with since. Connecting with the students through art is the most fulfilling part of this role, and I am excited to continue leading for the next year! I hope to continue to advocate for and support the various ways neurodivergence changes learning needs, and I am dedicated to helping each individual student discover art as a safe space.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fandy%20peng.jpg?alt=media&token=7815aa5f-6842-4797-b6cd-bc60dd5f7a50" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Andy Peng<br />
              Tennis Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Andy Peng, a rising junior at International School for the 2025–2026 school year. I’ve been volunteering with IB since 2024, and it’s been a truly rewarding experience working with kids. As one of the new leaders of the tennis division, I’m excited to bring my five years of tennis experience to the court and help foster both skill development and a love for the game. I look forward to continuing to support the kids and watching them grow through every session, on and off the court.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fchanning%20huang%20-%20book%20club%20captain.jpg?alt=media&token=060ebe83-dabb-4439-877b-d8d1a0e8d1c0" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Channing Huang<br />
              Book Club Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Channing Huang, and I am a senior at International for the 2026-2027 year. I joined IB in 2022 as a 7th grader, and it has been an honor working with the kids under this program. As one of the leaders for the book club program, which involves meeting the kids bi-weekly to discuss books, I work with the kids through immersive activities designed to boost their literacy skills. It has been incredibly fulfilling to see the kids grow their skills, and I look forward to seeing these kids under the program succeed.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femmaline%20-%20book%20club%20captain.jfif?alt=media&token=f7f318b1-a7d6-4047-b6fb-4d5e293c8864" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emmaline Chiou<br />
              Book Club Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I’m Emmaline Chiou and I’m going to be a sophomore at Issaquah High School for the 2025-2026 school year. I began my involvement with the International Buddy community toward the end of 2024, throughout my time here I have seemed to understand the interlocking connections between each volunteer and child not helping for the sake of plainly volunteering but rather to shape each other as a person. As a pretty avid reader myself I hope to bring positive energy to my fellow readers in the book club and travel through different perspectives and lenses of different authors. I hope that literature and an eagerness to read is something that everyone can fathom and take through every stage of their life and I am fully invested in making it as understandable as possible for the children here at International Buddy.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fkatie%20meng%20-%20video%20production%20captain.jfif?alt=media&token=df59cd14-ec80-4d78-a5b9-ac28e610a11d" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Katie Meng<br />
              Video Production Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Katie, and I'll be a junior at International Community School. I've been involved with various International Buddy programs since 8th grade. I'm responsible for photography, filming, and creating short videos that highlight different IB activities. I also help share the videos across various platforms. Through my work, I hope to help more people learn about our IB community.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fmaanha%20rahman%20-%20snoqualmie%20outreach%20director.jpg?alt=media&token=24df06be-facf-4129-ac05-7bc89d3bcb57" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Maanha Rahman<br />
              Snoqualmie Outreach Director
            </div>
            <div className="ourteam_selfintro">
              Hi, I’m Maanha Rahman, and I am a junior at Mount Si High School for the 2025-2026 school year. I have been a part of International Buddy through the Issaquah Sports and Activities event since October 2023. Through this event, I have gained many valuable memories with the kids through spending time with them and providing a safe space for them to come out of their shells. As Outreach Director, I aim to increase IB’s presence throughout the Snoqualmie area and recruit more volunteers to join our mission.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FAlexandra%20Deschenes.JPG?alt=media&token=682b7296-7413-4aff-905d-188acdf9a049" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Alexandra Deschenes<br />
              One-on-One Tutoring Captain
            </div>
            <div className="ourteam_selfintro">
              Hello, I'm Alexandra Deschenes and I will be a junior at Interlake High School for the 2025-2026 year. I have been a part of IB since 2022, and am honored by the opportunity to lead its one-on-one tutoring program. During my time in the organization as a volunteer for a variety of activities like Special Olympics, reading/writing tutoring etc. I've been able to get to know the participants with special needs, and learn about how to best help them succeed. I hope that the one-on-one tutoring program will be able to help them develop their interpersonal skills, as well as their various subject-related skills.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fminhe%20yang.jpg?alt=media&token=80c4fad7-89ad-4668-ba6a-d1067113d075" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Minghe Yang<br />
              Basketball Captain
            </div>
            <div className="ourteam_selfintro">
              Hi! My name is Minghe Yang, or you could call me Mark. I'm a senior at Skyline High School for the 2025-2026 school year. I first joined the International Buddies program in my sophomore year and now I'm incredibly excited to be one of the basketball captains in my senior year. Basketball has always been one of my favorite sports to play all throughout my childhood. When I first participated in the Basketball activities through International Buddy, I was emotionally touched by the joy on the kids' faces, as well as the improvements they have gradually made through their hard work under our guidance. Over time, I've grown deeply connected to this program, the kids, and so many fun memories that we've all built together. Now, as one of the captains, I'm commited to putting more effort and contributions into improving our community's athletic spirits as well as showing more responsibility to provide the children with happy and fun memories.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2Fbrian%20yan.jfif?alt=media&token=ea2fa6b6-15ec-42aa-8d77-60c1c2c32ea5" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Brian Yan<br />
              Reading Club Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Brian Yan. I am a junior at International School for the 2025-2026 year. I started to volunteer at International Buddy as a Freshman, going to the Indoor activities, sports, and IB events. I then started the in-person Reading Club about a year ago. We help children of different ages and levels advance their reading skills through popcorn reading, asking, and answering questions. I find the volunteering work is both rewarding and enjoying!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="placeholder" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Zihan He<br />
              Swim Captain
            </div>
            <div className="ourteam_selfintro">
              I'm Zihan He, a rising senior at Skyline High School. This year, I will be IB's Swim Captain. I started swimming on a local swim team in elementary school and want to use my skills to help more students find an inclusive, welcoming space where they can pursue their passions. Outside of swimming, I like to do creative writing and participate in Model UN. I'm excited for this opportunity to expand my teaching skills and help students thrive!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="placeholder" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Curtis Lau<br />
              Book Club Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Curtis Lau, a rising junior for the 2026-2027 school year. I joined International Buddy back in 2022 as a middle schooler. Since then, I've been a co-leader for the online book club program, where we help the kids improve their literacy and language skills. Because I live in Hong Kong, I don't get the chance to attend our in-person events very often, but I always try to make the most out of our online sessions. Despite the physical distance, I hope to contribute as much as I possibly can to this community. Being part of this community and seeing the kids' resilience and growth over the years has been incredibly inspiring and rewarding.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="placeholder" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Jeff (LN)<br />
              Swim Captain (Mercer Island)
            </div>
            <div className="ourteam_selfintro">
              My name is Jeff, I will be a 10th Grade student attending Newport High School in September. I had my first swimming lesson at the YMCA when I was three. I found out that I loved swimming very much. I still vividly remember those summers kayaking at Rattlesnake Ledge and Lake Sammamish with my friends. All those family vacations competing in swim races against my dad and older brother helped me improve in swimming and has brought so much pure joy into my life. Over the years, swimming has become a huge part of who I am, from training with the PDST swim team for six years and swimming for my high school team last year, to volunteering at MW for the IB program for over nine months now. Looking back, these experiences gave me so much more than just a good time or a lesson in mental toughness. More importantly, they made me realize how incredibly rewarding it is to teach others. Sharing what I know brings me so much happiness. Seriously, nothing beats the feeling of watching a kid go from being terrified of the water to becoming brave, falling in love with swimming, and crushing it in the pool. I am so proud of them. The volunteer job of IB program is so meaningful to me, so I am excited to become the new Captain of the MW swimming pool. I promise to give it my all, not just by continuing to teach at the pool, but also by working alongside all of our amazing volunteers to keep things running smoothly. Together, I hope we can give even more water-loving kids a fun place to learn, and make the IB program bigger and better than ever!
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Ourteam