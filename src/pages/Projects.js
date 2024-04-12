import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import styled from "styled-components";


function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectsData, setProjectData] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();
  const [isHovered, setHovered] = useState();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };

  const SliderProjectImg = styled(Slider)`
    .project-slider-container {
      min-height: 0;
      width: 100%;
      padding: 20px;
    }
    
    .slick-list {
      height: 350px;
      width: 350px;
      position: relative;
      left: 15px;
      top: 0;
      transform: rotate(2deg);
    }
    
    .slick-slide img {
      height: 270px;
      width: 270px;
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
      width: 300px !important;
      padding: 15px 15px 30px;
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

  let togglePopup = (project) => {
    setIsPopupOpen(!isPopupOpen);
    setSelectedProject(project);
  };

  useEffect(() => {
    fetch('/projects.json')
    .then(response => response.json())
    .then(projectsData => {
      setProjectData(projectsData);
      setIsLoading(false);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let projects;

  if (projectsData.projects) {
    projects = projectsData.projects.map(function (project, index) {
      let tech = project.technologies.map((icons, i) => {
        return(
          <li className="list-inline-item mx-3" style={{width: 55, height: 55, border: 'solid'}}key={i}>
            <span>
              <div className="text-center">
                <i className={icons.icon} style={{ fontSize: "300%" }}>
                  <p className="text-center" style={{ fontSize: "30%", marginTop: 5}}>
                    {icons.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
      let images = project.images.map((img) => 
      {
        return (
          <div>
            <img src={img} alt="projectImage" className="projectImgSlider" height="400px" width="400px"/>
          </div>
        );
      });

      return (
        <div className="popupProject">
          <Card className="projectCard" 
            onClick={() => togglePopup(project)} 
            onMouseEnter={() => setHovered(index)} 
            onMouseLeave={() => setHovered()}
            key={index}>

          {isHovered === index &&(
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'white',
              opacity: 1,
              transition: 'opacity 0.3s ease',
              zIndex: 999,
              fontSize: '6em',
              fontWeight: 'bold',
              textShadow: '2px 2px 3px rgba(0, 0, 0, 1)',
              }}>
              {project.title}
            </div>
          )}
            <Card.Img className="projectImg" variant="top" src={project.images[0]} alt="projectImage" height="350" style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}/>
            {/* <Card.Body className="projectCardBody" style={{backgroundColor: 'white'}}>
              <Card.Title className="projectTitle">{project.title}</Card.Title>
              <Card.Text className="projectText">
                {project.dates}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="projectFooter">
              {tech}
            </Card.Footer> 
            */}
          </Card>
          {isPopupOpen && selectedProject === project && (
            <div className="popupWindow">
              <div className="project-exp">
                <div className="project-slider-container">
                  <p>SWIPE FOR MORE</p>
                  <SliderProjectImg {...settings}> {images}  </SliderProjectImg>
                </div>
                <p className="project-description">{project.description}</p>
              </div>
              <div className="project-info">
                <div className="project-tech">
                  {tech}
                </div>
              <button className="stampButton" onClick={togglePopup}>Close</button>
                <p className="project-details">
                  {project.title}
                  <br />
                  {project.dates}
                  <br />
                  {project.type}
                </p>
              </div>
            </div>
          )}
        </div>
      );
    });
  }

  return (
    <projectpage>
      <div className="project-Postcard">
        <p className="project-Ref">
        Projects are the most effective way to gain hands-on learning and growth as 
        they provide an opportunity to apply the knowledge and skills learned both in 
        and outside the classroom to real-world problems. Throughout the projects below,
        I have been able to learn how to work with a wide variety of technologies and 
        tools, deepening my understanding of engineering principles and how interdisciplinary
        work fits together. Each project has been a journey in problem-solving, critical 
        thinking, and communication, allowing me to become a not just a better engineer, 
        but also a more effective team member.
        </p>
        <p className="project-Quote">
        "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better."
        <br />- Samuel Beckett in <cite title="Source Title">Worstward Ho</cite>
        </p>
      </div>
      <div className="row mx-auto" style={{rowGap:30, columnGap:70}}>{projects}</div>
    </projectpage>
  );

}
  
export default Projects;
