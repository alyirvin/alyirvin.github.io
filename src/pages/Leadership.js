import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
// import ReactCardFlip from 'react-card-flip';
import Slider from "react-slick";
import styled from "styled-components";

function Leadership() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [leadData, setLeadData] = useState({});
  const [selectedLead, setSelectedLead] = useState();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsFlipped(!isFlipped);
  // };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  const SliderLeadImg = styled(Slider)`
    
    .slick-list {
      height: 300px;
      width: 350px;
      position: relative;
      top: 0;
    }
    
    .slick-slide img {
      height: 260px;
      width: 260px;
      position: relative;
      left: 15px;
      top: 15px;
    }
    
    .slick-dots,
    .slick-arrow {
      opacity: 0;
    }
    
    .slick-slide {
      background-color: white;
      position: relative;
      // top: 20px;
      // transform: translateX(20px);
      width: 270px !important;
      // padding: 15px 15px 30px;
      text-align: center;
      text-decoration: none;
      -webkit-transition: all .20s linear;
      -moz-transition: all .20s linear;
      transition: all .20s linear;
    }
    
    [data-index="1"].slick-slide {
      left: -300px !important;
    }
    
    [data-index="2"].slick-slide {
      left: -600px !important;
    }
    [data-index="3"].slick-slide {
      left: -900px !important;
    }
    
    [data-index="4"].slick-slide {
      left: -1200px !important;
    }
  `;

  let toggleFlip = (lead) => {
    setIsFlipped(!isFlipped);
    setSelectedLead(lead);
  };

  useEffect(() => {
    fetch('/leadership.json')
    .then(response => response.json())
    .then(leadData => {
      setLeadData(leadData);
      setIsLoading(false);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let leads;

  if (leadData.leadership)
  {
    leads = leadData.leadership.map(function (lead, index) {
      let imgs = lead.images.map((img, i) => {
        return(
          <div>
            <img src={img} alt="leadImage" className="leadImgSlider" height="400px" width="400px"/>
          </div>
        );
      });
      return(
        <div className="flipLead">
          <Card className="leadCard"
            onClick={() => toggleFlip(lead)}
            key={index}
            style={{ 
              top: isFlipped && selectedLead === lead ? '20%' : '0',
              left: isFlipped && selectedLead === lead ? '40%' : '0',
              transform: isFlipped && selectedLead === lead ? 'scale(1.5) rotateY(180deg)' : 'none',
              transition: 'transform 0.5s ease',
              position: isFlipped && selectedLead === lead ? 'fixed' : 'relative',
              zIndex: isFlipped && selectedLead === lead ? 99 : 9,
            }}>

          {isFlipped && selectedLead === lead ? (
            <div style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'white',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontSize: '12pt',
              padding: '10px'
            }}>
              {lead.description}
              <div style={{ alignSelf: 'flex-end'}}>
                {lead.prevTitle}
              </div>
            </div>
          ) : (
            <>
            <SliderLeadImg {...settings}>
              {imgs}
            </SliderLeadImg>
            <Card.Body style={{padding: 0}}>
              <Card.Title className="leadTitle">{lead.title}</Card.Title>
              <Card.Text className="leadText">
                {lead.company}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="leadYears">
                {lead.years}
              </Card.Footer>
            </>
            )}
          </Card> 
        </div>
      );
    });
  }

  
  return (
    <leadershippage style={{overflowX: 'hidden'}}>
      {/* <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{marginTop: 5, marginBottom: 10}}>
              {' '}
              How lucky I am to have something that makes saying goodbye so hard{' '}
            </p>
            <div className="blockquote-footer">
              A.A. Milne in <cite title="Source Title">Winnie the Pooh</cite>
            </div>
            yeet
          </blockquote>
        </Card.Body>
      </Card> */}
      <div class="lead-background">
        <div class="lead-title">
          Leadership experiences on campus have been invaluable opportunities to create lasting memories 
          and meaningful experiences for both myself and many others. Through organizing events, leading 
          student organizations, and spearheading initiatives, I have been able to provide spaces on 
          campus for students to express themselves, network, and develop skills. In each of these roles, 
          I have been able to deepen my understanding of teamwork, communication, and problem-solving 
          while fostering lifelong connections and leaving a positive impact on my campus  communities. 
          Each leadership opportunity has been a journey of growth, and will  forever be one of the 
          greatest experiences of my time in undergrad!
        </div>
        <div class="lead-quote">How lucky I am to have something that makes saying goodbye so hard</div>
      </div>
      <div className="row mx-auto" style={{rowGap:30, columnGap:70, width: 1550}}>{leads}</div>
    </leadershippage>
  )
}
  
export default Leadership;