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

        <div id="kaicheng-shen" className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fkaicheng%20-%20vp%20of%20technology.jfif?alt=media&token=fd534b2f-9c73-406b-bb1a-db47595caa06" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Kaicheng Shen<br />
              VP of Technology
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Kaicheng Shen, a Senior at Skyline High School for the 2025-2026 school year. Ever since joining International Buddy in 9th grade, I’ve helped lead weekly activities and organized special events like IB’s first Movie Night, where kids could draw and enjoy refreshments while watching a movie. As last year’s Director of Digital Media, I made 55+ posts on IB’s social media accounts to promote IB across platforms. As VP of Technology, I created our first member email list and now manage regular email communications. One of my main goals this year is to automate our email system for smoother outreach. I’ll continue to improve communication while maintaining and developing our tech team to drive website, social media, and video production improvements. I hope to collaborate with our volunteers to provide an enjoyable and rewarding experience to all IB participants.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div id="julia-shang" className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fjulia%20shang%20-%20vp%20of%20development.jfif?alt=media&token=ec606378-eed3-4fbd-8566-547292373511" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Julia Shang<br />
              VP of Development
            </div>
            <div className="ourteam_selfintro">
              Hi! My name is Julia, and I will be a senior at Mercer Island High School for the 2025-2026 school year. I’m excited to serve as your VP of Development, and plan to work tirelessly to develop and expand International Buddy, through fundraising. This organization truly means a lot to me, and I’m excited for this new year to come!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div id="aiden-li" className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Faiden%20li%20-%20vp%20of%20communication.jfif?alt=media&token=5bff3152-e680-49f5-b505-286f425b0521" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Aiden Li<br />
              VP of Community Outreach - Redmond
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Aiden Li, and I am a rising senior at the Overlake School in Redmond for the 2025-2026 school year. I have worked with International buddy for about three and a half years, and I am stepping into the position of Vice President of Community Outreach. I started at IB as one of the leaders for the Reading Club, where I introduced my buddies to the world of literature and helped them with their reading comprehension skills. I was also a coordinator for the IB Swim Team's Redmond branch, as well as leader of the Writing Club which held several workshops over the summer about the real-world applications of writing. I am excited for another year at IB and I hope to continue running all of these clubs as well as organize community-wide events.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div id="william-chee" className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fwilliam%20-%20vp%20of%20community%20outreach.jfif?alt=media&token=32b0394b-4df9-4e9c-849f-6e490d89043c" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              William Chee<br />
              VP of Community Outreach - Issaquah
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is William Chee, and I’m a rising senior at Issaquah High School for the 2025–2026 school year. I joined IB in 2023, participating in weekly activities and summer camps, and have since led a group of children in outdoor sports every Sunday as part of the leadership team. It’s been a privilege to support children as they develop social skills and form meaningful connections. I’ve watched them grow into confident, joyful individuals, an inspiring transformation made possible by the caring, inclusive community we’ve built together. As Vice President of Community Outreach, I’m dedicated to building on that foundation. My mission is to strengthen and expand our IB community by partnering with local businesses and organizations to create meaningful opportunities for connection through large events and fundraisers that bring together IB and the broader community. I also plan to launch a student-led, weekly newsletter that highlights the leadership and kindness of both buddies and volunteers, with the goal of encouraging engagement and inclusion at every level. I’m committed to giving back to this welcoming, loving community by creating spaces where every child feels seen, included, and empowered.
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
              VP of Events
            </div>
            <div className="ourteam_selfintro">
              Celena Zhang is a rising Junior at Mount Si High School for the 2025-26 school year. Since joining IB in 2022, she’s gained valuable experience by participating in International Buddy’s activities. She has been in a variety of positions, such as Snoqualmie outreach and Issaquah Activity Lead. She’s also successfully recruited many new members to the organization and is excited to continue helping others connect with the resources they need and have fun in the process.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div id="ivan-pong" className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FIvan%20Pong.JPG?alt=media&token=541d1f21-cdea-440b-9d76-eb90b6b1a5ac" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Ivan Pong<br />
              VP of Administration
            </div>
            <div className="ourteam_selfintro">
              My name is Ivan Pong, and I’m currently a senior at International School for the 2025-2026 school year. I first joined International Buddy in 10th grade, and since then, it’s been an incredibly rewarding journey. Last year, I had the privilege of serving as one of the captains for Chess and Board Games. During my time as the Chess and Board Games co-captain, I had the chance to meet many dedicated volunteers and wonderful kids, making each event both fun and meaningful. This year, I’m excited to take on the role of Vice President of Administration. In this position, I’ll be responsible for validating volunteer hours for everyone who signs up and attends our events. I will also provide different administrative support as needed in the International Buddy community. If you ever have any questions or concerns about your hours, please don’t hesitate to reach out to me. I look forward to working with all of you!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div id="oliver-lambert" className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Foliver%20-%20vp%20of%20sustainability.jfif?alt=media&token=05c090c5-d8ab-4e8e-9ab1-77ca302b2c34" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Oliver Lambert<br />
              VP of Sustainability
            </div>
            <div className="ourteam_selfintro">
              Hi! I am Oliver Lambert, an incoming Senior at Issaquah High School for the 2025-2026 school year. Ever since I began International Buddy in 2024 as a Sophomore, I have brought friends into this community, watched the people around me grow as volunteers and as people, and I have most importantly grown so attached to the buddies we represent. As your incoming Vice President of Sustainability, I look forward to aiding in this program's continued growth, to fighting for a stronger and more solidified organization, and to giving back to the community in any way I can.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fowen%20-%20video%20production%20captain%20and%20swim%20captain.jfif.~tmp?alt=media&token=a9e6e9f4-0f9e-4998-bb12-9eb8651d3f0e" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Owen Cao<br />
              Video Production Captain / Issaquah Swim Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I’m Owen Cao, a rising senior at Skyline High School, and it is an exciting opportunity for me to be a part of International Buddy. Since joining IB, I’ve been an active participant in a variety of activities and events. Currently, I serve as the captain of both the Video Production Team and the Issaquah Swim Group. In these roles, my main goals are to document important IB events through video and to teach swimming to kids. In addition to these responsibilities, I also have a passion for teaching. I’ve organized a small study group for students who are interested in math or chemistry. Right now, I’m especially focused on strengthening communication between the video team and other groups — particularly by collecting and compiling photos and videos from various activities and events in this organization. I’m committed to fostering a new level of collaboration across IB, and I’m looking forward to continuing to grow with this amazing community.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fhanwen%20yuan%20-%20badminton%20captain.jfif?alt=media&token=169ea8b4-d6f6-420f-a77d-618bf5c8f0f0" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Hanwen Yuan<br />
              Badminton Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I’m Hanwen Yuan, and I will be a senior at Redmond High School for the 2025-26 school year. I’ve been a part of International Buddy for the past 1.5 years and am beginning my new role this year as the Badminton Captain. I’ve been playing badminton for 7-8 years, with experience in both singles and doubles, and have competed in several tournaments, including state-level events. Through this role, I hope to create an inclusive and welcoming space where all kids can learn, play, and simply enjoy the game. Badminton is more than just a sport-- it’s a way to build confidence and connect with others. Whether we’re practicing a new skill or just having fun on the court, I want everyone to feel supported and involved.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Felliott%20webb%20-%20chess%20captain.jfif?alt=media&token=63635a47-6517-4d90-a457-dfa05137f2f7" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Elliott Webb<br />
              Chess Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Elliott Webb, and I'm a rising senior at Eastlake High School in Sammamish for the coming 25-26 school year and the Chess Lead this year for International Buddy. Over my past 2 years with the organization I've enjoyed the fact that I've been able to have a meaningful impact on my community. I've played chess since I was young and through IB, I've been able to revitalize the interest while also teaching the game to a newer generation. Through the game of chess I believe children can develop a greater understanding of how to approach new situations, improve pattern recognition, and think more critically. Our event is open to all who want to attend, and we aim to make all who do feel welcome.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Foliver%20wang%20-%20directior%20of%20creativity%20and%20innovation.jfif?alt=media&token=b66ea6ce-046e-440d-96d0-ba8d44422877" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Oliver Wang<br />
              Director of Creativity and Innovation
            </div>
            <div className="ourteam_selfintro">
              Hello, my name is Oliver Wang, and I am a senior at Issaquah High School for the 2025-2026 academic year. I enjoy learning new things and building community through creative projects. During my free time, other than volunteering, I enjoy basketball, skiing, running, and electrical and computer learning. Through International Buddy work since Freshman year, I have geared my efforts toward creating fun experiences for kids with special needs. I have directed board game sessions, designed hands-on crafts, and taught interactive games throughout the last year to help children communicate and socialize with peers. Being the Director of Creativity and Innovation, my goal is to bring more new things and diversity into our sessions. I would like both our volunteers and children to do something new each time, enjoy themselves and be a part of it. I am looking forward to working with all of you again and making each week special and fulfilling.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fsalvatore%20faso.jpg?alt=media&token=19eb927e-5ded-4c62-b883-eb06f7c94599" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Salvatore Faso<br />
              Sunday Outdoor Sports Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I am Sam, a senior for the class of 2026 at Issaquah High, and the Sunday Outdoor Sports Captain for International Buddy. Ever since I have started volunteering at this organization, I've grown a love for serving these children through the use of my volunteer work. I have always tried my best to make a positive impact to the children's lives, even if it is small and I am eager to further my work the International Buddy!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fcadence%20liao%20-%20director%20of%20technology.jpg?alt=media&token=50663de4-07cf-4e58-9e44-dc0aefdc7f47" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Cadence Liao<br />
              Director of Technology
            </div>
            <div className="ourteam_selfintro">
              Hello! My name is Cadence Liao, and I am a junior at Eastside Preparatory School for the 2025 - 2026 school year. I have been with IB since 2023, and I am very excited to serve as the Director of Technology this year! I've met so many wonderful people at this organization, and I am committed to contributing to the growth and impact of IB. I am responsible for the performance and upkeep of the IB website, ensuring it is functional, regularly updated, user-friendly, and meets the goals of the organization. Additionally, I volunteer at the Bellevue Aquatic Center as a swim instructor, and I provide technical assistance during other events. This year, I am looking forward to increasing the awareness of IB and helping facilitate an inclusive and organized environment for the people we serve! Please contact me if you have any inquires/requests for the website - I'm happy to help!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fsophia%20li%20-%20general%20captain.jfif?alt=media&token=a05fad5d-3c99-4ba2-9fb9-30b2417bf9d5" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Sophia Li<br />
              General Captain
            </div>
            <div className="ourteam_selfintro">
              Hi! My name is Sophia Li, and I'm a rising junior at Eastlake High School for the 2025-2026 school year. I am so grateful to be a part of International Buddy, as it is an organization that means a lot to me. Over the past year, I've witnessed so many heartfelt moments between buddies and volunteers, which constantly reminds me of why I joined, and continues to motivate me to give more. As the General Captain, I strive to keep captains accountable for their work, and to bring the whole leadership team together, through teamwork and communications. With this intercommunication, I aim to better the lives of buddies, and create a thriving organization, more importantly, a family, for them to be a part of.
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
              Art Captain
            </div>
            <div className="ourteam_selfintro">
              Hello, my name is Addy Wei and I am a rising senior at Eastside Preparatory School. Ever since I could hold a pencil, I have loved drawing and creating art. I began with traditional pencil and watercolor, then moving to acrylic and digital painting. Recently, I have explored ceramics, metalworking, graphic design, photography, and prop creation, all of which I enjoyed. I lead the drawing group, which I joined as a volunteer in the spring of 2024, and have been eagerly helping with since. Connecting with the students through art is the most fulfilling part of this role, and I am excited to continue leading for the next year! I hope to continue to advocate for and support the various ways neurodivergence changes learning needs, and I am dedicated to helping each individual student discover art as a safe space.
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
              Tennis Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Timothy Liao, a Mercer Island High School junior for the school year of 2025-2026. I have been volunteering with IB since 2023 and cherish this opportunity to share my passion for tennis. As the tennis team leader, I hope to not only continue all the fun from before but also reach out to any kid who wants to play. Hope to see you on the court!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
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
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fchanning%20huang%20-%20book%20club%20captain.jpg?alt=media&token=060ebe83-dabb-4439-877b-d8d1a0e8d1c0" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Channing Huang<br />
              Book Club Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Channing Huang, and I am a junior at International for the 2025-2026 year. I joined IB in 2022 as a 7th grader, and it has been an honor working with the kids under this program. As one of the leaders for the book club program, which involves meeting the kids bi-weekly to discuss a book, I work with the kids through immersive activities designed to boost their literacy skills. It has been incredibly fulfilling to see the kids grow their skills, and I look forward to seeing these kids under the program succeed.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
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
        <div className="ourteam_container1">
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
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femma%20hu%20-%20sunday%20outdoor%20sports%20captain.jfif?alt=media&token=a950ff61-6238-480d-a1fc-bbb71f2665bf" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emma Hu<br />
              Sunday Outdoor Sports Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I’m Emma Hu, a Junior at Newport High School for the 2025–2026 school year. Since I began volunteering in 2022, I’ve gained meaningful experience through a variety of activities, from swim programs to summer events. It’s been incredibly rewarding to watch children grow and thrive under my care, and I’ve especially enjoyed helping new volunteers get involved through International Buddies. Seeing them step out of their comfort zones, form bonds with the kids, and find joy in making a difference has been just as fulfilling as the work itself.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Falex%20kang%20-%20special%20olympics%20swim%20captain.jfif?alt=media&token=c20a321c-f07f-4bd7-b18b-2cee82e43752" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Alex Kang<br />
              Special Olympics Swim Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Alex Kang, and I am a rising junior at Bellevue High School for the 2025-2026 school year. I have been volunteering with International Buddy since 2023, and it has been an amazing experience. I have met so many wonderful people and have had the opportunity to work with kids in a variety of activities. As the Special Olympics Swim Captain, I am excited to continue working with the kids and helping them improve their swimming skills. I hope to create a fun and supportive environment where everyone can feel comfortable and confident in their abilities.
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
              Bellevue Aquatic Center Swimming Captain
            </div>
            <div className="ourteam_selfintro">
              Hello, my name is Cloris Wang and I am a rising sophomore at Bellevue High School for the 2025-2026 school year. I have been volunteering with International Buddy for 2 years now and each moment has been incredibly rewarding. As the swim captain at Bellevue Aquatic Center, I help organize swim meets and welcome new volunteers. I’ve had the pleasure of helping kids develop both their swimming and social skills, and I hope to continue doing so in the future!
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
              Mercer Island Swimming Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Alexander Zhao, a junior at Bellevue High School for the 2025-2026 school year. I hope to create a safe and fun environment for the buddies while swimming. This year, I strive to further expand this program and work with other people to improve this activity.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Femma%20-%20science%20captain.jpg?alt=media&token=f979ed82-fc9a-434b-b154-8f75f3448c4a" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Emma Li<br />
              Science Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, I'm Emma, a junior at Lakeside School for the 2025-2026 school year. I started volunteering with International Buddy in my freshman year and have enjoyed the past two years of tutoring, teaching science, and playing chess and sports with kids and other volunteers. As a leader of Science Club, I hope to share my love for biology, inspire kids to pursue their interests, and use my knowledge to make science a more inclusive, comfortable place for all.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2025%20leaders%2Fedward%20-%20science%20captain.jpg?alt=media&token=9c73044d-6877-4e70-bd0a-ee46d3ab78e4" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Edward Li<br />
              Science Captain
            </div>
            <div className="ourteam_selfintro">
              I'm Edward, a junior at Mercer Island High School for the 2025-26 school year. After joining IB in 2022, I've volunteered at many events, such as in outdoor reading and sports in Issaquah, indoor sports in Bellevue, and most recently the IB science club, in addition to other one-time events. I've learned so much through these volunteering events, and it's something I always look forwrad to every week. This year, I'm going to be co-captain of the science club, and I am looking forward to continuing to help kids learn about the everyday world through science experiments!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
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
        <div className="ourteam_container1">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FJennifer%20Xue.JPG?alt=media&token=2c5633af-bbe8-42c9-aead-5a143ef28bd2" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Jennifer Xue<br />
              Basketball Captain
            </div>
            <div className="ourteam_selfintro">
              Hello, I’m Jennifer Xue and I’m a junior at The Overlake School for the 2025-2026 year. I am a volunteer and a captain of the basketball team. I have played basketball for over six years and have volunteered at IB for the past two years. I’m excited to keep working with the kids and seeing them grow to become their best selves!
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container2">
          <div className="ourteam_photo">
            <img src="https://firebasestorage.googleapis.com/v0/b/internationalbuddy2018.appspot.com/o/our_team%2F2024%2FDerek%20Li.JPG?alt=media&token=c7d79803-e069-4b2a-8b7a-48401c844b00" alt="self" />
          </div>
          <div className="ourteam_content">
            <div className="ourteam_name">
              Derek Li<br />
              Basketball Captain
            </div>
            <div className="ourteam_selfintro">
              Hi, my name is Derek Li. I am a Junior at Overlake for the 2025-2026 year, and joined IB in 2023. Ever since, this program has allowed me to build many fond memories and my experience here has been eventful and exciting. As the leader of the basketball team, I aim to use my 8 years of experience with the sport to provide our younger friends with an enriching and fun learning experience.
            </div>
          </div>
        </div>

        <Line color="--green-color" width="100%" />
        <div className="ourteam_container1">
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
        <div className="ourteam_container2">
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
        <div className="ourteam_container1">
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

      </div>
    </div>

  )
}

export default Ourteam