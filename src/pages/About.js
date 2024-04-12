import React from "react";
import Slider from "react-slick";
import one from "../aboutImgs/About1.JPG";
import two from "../aboutImgs/About2.jpeg";
import three from "../aboutImgs/About3.jpeg";
import four from "../aboutImgs/About4.jpg";
import five from "../aboutImgs/About5.JPG";
import LondonBridge from "../aboutImgs/London_Bridge.jpg";
import HonorsCongress from "../aboutImgs/Honors_Congress.JPG";
import TeamLeaders from "../aboutImgs/Team_Leaders.jpg";
import styled from 'styled-components';

function About() {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  const SliderAboutImg = styled(Slider)`
    .slider-container {
      min-height: 0;
      min-width: 0;
      padding: 20px;
      position: relative;
      left: 10%;
    }
    
    .slick-list {
      height: 450px;
      width: 400px;
      margin-left: 20%;
    }
    
    .slick-slide img {
      height: 300px;
      width: 300px;
    }
    
    .slick-dots,
    .slick-arrow {
      opacity: 0;
    }
    
    .slick-slide {
      background-color: white;
      position: relative;
      top: 20px;
      transform: translateX(20px);
      width: 330px !important;
      padding: 15px 15px 80px;
      text-align: center;
      text-decoration: none;
      -webkit-box-shadow: 0 8px 10px rgba(0, 0, 0, .3);
      -moz-box-shadow: 0 8px 10px rgba(0, 0, 0, .3);
      box-shadow: 0 8px 10px rgba(0, 0, 0, .3);
      -webkit-transition: all .20s linear;
      -moz-transition: all .20s linear;
      transition: all .20s linear;
    }
    
    [data-index="1"].slick-slide {
      left: -330px !important;
    }
    
    [data-index="2"].slick-slide {
      left: -660px !important;
    }
    [data-index="3"].slick-slide {
      left: -990px !important;
    }
    
    [data-index="4"].slick-slide {
      left: -1320px !important;
    }
  `;

  return (
    <page>
      <div className="about-intro">
        <div className="about-intro-imgs">
          <div className="slider-container">
            <div class="about-img-label">Swipe For More!</div>
            <SliderAboutImg {...settings}>
              <div>
                <img src={one} alt=""/>
              </div>
              <div>
                <img src={two} alt=""/>
              </div>
              <div>
                <img src={three} alt=""/>
              </div>
              <div>
                <img src={four} alt=""/>
              </div>
              <div>
                <img src={five} alt=""/>
              </div>
            </SliderAboutImg>
          </div>
        </div>
        <div className="about-intro-text">
        <p className="about-header"><bold>Hi, I'm Alysha!</bold></p>
          <p>
          I'm a dual-degree seeking <bold>Burnett Honors Scholar</bold> at the <bold>University of Central Florida</bold>, pursuing <bold>Mechanical Engineering</bold> and <bold>Biomedical Sciences</bold> degrees with a <bold>Computer Science</bold> Minor.
          Graduating in May 2024, I am eagerly preparing to continue my education by pursuing a <bold>Master of Science in Computer Science</bold> this August. 
          My journey has been a whirlwind of discovery, fueled by curiosity and a drive to make a difference.
          Along the way, I've collaborated with diverse peers, gaining wisdom and mentorship. 
          Together, we've tackled challenging projects and forged lasting connections, building a supportive community that will hopefully continue beyond us.
          These experiences have not only broadened my horizons but also forged deep connections and a sense of belonging within our academic community. 
          Join me as I reflect on my journey, share the lessons I've learned, and envision the exciting possibilities that lie ahead!
          </p>
        </div>
      </div>
      <div className="about-background">
        <div className="about-background-text">
          <p className="about-header"><bold>How It All Started</bold></p>
          <p>
          My journey into the world of technology and engineering began with the simple act of building a LEGO London Tower Bridge. 
          Days were spent scouring both the pictorial instructions and the table for miniscule pieces, marking an endeavor marked by discovery. 
          Amidst thousands of scattered pieces across our antique dining table, I found myself captivated by more than just the joy of construction; 
          it was the remarkable ability of LEGO to transform basic elements into complex structures that intrigued me. 
          Building these structures ignited a profound curiosity within me, fostering an inclination to understand foundational principles and mold them into elaborate designs. 
          Reflecting on the meticulous process of piecing together the bridge, I realized the parallels between it and the logical, systematic thinking essential in engineering, and especially programming. 
          The planning, problem-solving, and ability to break down complicated concepts into manageable components resonated profoundly with the principles of coding.
          </p>
        </div>
        <div className="about-background-img">
          <img src={LondonBridge} alt=""/>
        </div>
      </div>
      <div className="about-extracurriculars">
        <div className="about-extracurriculars-img">
          <img src={HonorsCongress} alt=""/>
        </div>
        <div className="about-extracurriculars-text">
          <p className="about-header"><bold>Community Involvement</bold></p>
          <p>
          Upon my acceptance to UCF, I was thrilled to receive my acceptance into the <bold>Medicine-Engineering Dual Degree program</bold>, which offered a unique opportunity to explore both engineering and medicine simultaneously. 
          Despite the challenges posed by the COVID-19 pandemic, I remained determined to embrace this newfound path and navigate the complexities of dual-degree education. 
          Amidst the uncertainties of the pandemic, my involvement in extracurriculars such as <bold>Undergraduate Research</bold> and <bold>Honors Congress</bold> emerged as beacons of support and inspiration. 
          I explored biomaterial and bioengineering projects with a dedicated team, sharpening my analytical skills, gaining practical scientific insights, presenting research findings, and forming lasting friendships in the pursuit of advancing biomedicine.
          The tight-knit community of Honors Congress provided me with a sense of belonging and purpose, fostering an environment where I could thrive academically, professionally, and personally. 
          Through this, I discovered the transformative power of mentorship, community engagement, and self-motivation, which propelled me to embark on a journey of exploration and growth.
          </p>
        </div>
      </div>
      <div className="about-jobs">
        <div className="about-jobs-text">
          <p className="about-header"><bold>Professional Experience</bold></p>
          <p>
          Throughout my time as an undergrad, I have actively sought out opportunities to apply my skills and gain experience in a variety of settings.
          I began my search on campus by working part time jobs as an <bold>Undergraduate Admissions Ambassador</bold>, <bold>Undergraduate Teaching Assistant</bold>, and <bold>Team Leader</bold>.
          These roles not only honed my communication and interpersonal skills but also deepened my appreciation for the transformative power of education, and the impact of mentorship.
          In 2023, I began my first full-time internship as an <bold>X-Force Fellow</bold> with the <bold>Department of Defense's National Security Innovation Network</bold>.
          Here, I was immersed in a radiation research team at the <bold>Naval Surface Warfare Center Crane</bold>, where I developed data collection systems for cryogenic experiments on topological insulators, gaining practical insights into cutting-edge technologies. 
          This hands-on experience fueled my passion for innovation and collaboration, driving me to push the boundaries of knowledge further as a <bold>Mechanical/Chemical Intern</bold> at <bold>Naval Nuclear Laboratory's Bettis Atomic Power Lab</bold> this summer 2024.
          </p>
        </div>
        <div className="about-jobs-img">
          <img src={TeamLeaders} alt=""/>
        </div>
      </div>
    </page>
  );
}

export default About;
