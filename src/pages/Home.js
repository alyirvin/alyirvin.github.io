import React, { useState, useEffect } from 'react';
import ProjectDetailsModal from './../ProjectDetailsModal.js';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Home() {
  const [resumeData, setResumeData] = useState({});
  const [sharedData, setSharedData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [detailsModalShow, setDetailsModalShow] = useState(false);
  const [deps, setDeps] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch('/resume.json').then(response => response.json()),
      fetch('/shared_data.json').then(response => response.json())
    ])
    .then(([resumeData, sharedData]) => {
      setResumeData(resumeData);
      setSharedData(sharedData);
      setIsLoading(false);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let detailsModalShowHandler = (data) => {
    setDetailsModalShow(true);
    setDeps(data);
  };

  let detailsModalCloseHandler = () => setDetailsModalShow(false);

  let projects;

  if (resumeData.projects && resumeData.basic_info) {
    projects = resumeData.projects.map(function (project) {
      return (
        <div
          className="col-sm-12 col-md-6 col-lg-4"
          key={project.title}
          style={{ cursor: "pointer" }}
        >
          <span className="portfolio-item d-block">
            {/* <div className="foto" onClick={() => detailsModalShowHandler(project)}> */}
            <div className="foto">
              <div>
                <img
                  src={project.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
                />
                <span className="project-date">{project.startDate}</span>
                <br />
                <p className="project-title-settings mt-3">
                  {project.title}
                </p>
              </div>
            </div>
          </span>
        </div>
      );
    });
  }
  
  if (sharedData.skills && resumeData.basic_info) {
    var skills = sharedData.skills.icons.map(function (skills, i) {
      return (
        <li className="list-inline-item mx-3" key={i}>
          <span>
            <div className="text-center skills-tile">
              <i className={skills.class} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skills.name}
                </p>
              </i>
            </div>
          </span>
        </li>
      );
    });
  }

  if (resumeData.experience && resumeData.basic_info) {
    var work = resumeData.experience.map(function (work, i) {
      const technologies = work.technologies;
      const mainTechnologies = work.mainTech;

      var mainTech = mainTechnologies.map((technology, i) => {
        return (
          <span className="main-badge custom-margin" key={i}>
            {technology}
          </span>
        );
      });
      var tech = technologies.map((technology, i) => {
        return (
          <span className="experience-badge custom-margin" key={i}>
            {technology}
          </span>
        );
      });
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          dateClassName="vertical-timeline-element-date"
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i class="fas fa-lightbulb experience-icon"></i>}
          key={i}
        >
          <div style={{ textAlign: "left", marginBottom: "4px" }}>
            {mainTech}
          </div>

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <div style={{ textAlign: "left", marginTop: "15px", color: "black" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });
  }

  return (
    <page>
      <header style={{ height: window.innerHeight - 140, display: 'block' }}>
        <h1>here!</h1>
      </header>
        <section id="about">
          <div className="col-md-12">
            <h1 style={{ color: "black" }}>
              <span>{resumeData.basic_info.section_name.about}</span>
            </h1>
            <div className="row center mx-auto mb-5">
              <div className="col-md-4 mb-5 center">
                <div className="polaroid">
                  <span style={{ cursor: "auto" }}>
                    <img
                      height="250px"
                      src={sharedData.basic_info?.image}
                      alt="Avatar placeholder"
                    />
                  </span>
                </div>
              </div>
              <div className="col-md-8 center">
                <div className="col-md-10">
                  <div className="card">
                    <div className="card-header">
                      <span
                        className="iconify"
                        data-icon="emojione:red-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:yellow-circle"
                        data-inline="false"
                      ></span>{" "}
                      &nbsp;{" "}
                      <span
                        className="iconify"
                        data-icon="twemoji:green-circle"
                        data-inline="false"
                      ></span>
                    </div>
                    <div
                      className="card-body font-trebuchet text-justify ml-3 mr-3"
                      style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "200%",
                      }}
                    >
                      <br />
                      <span className="wave">{resumeData.basic_info?.description_header} :D </span>
                      {/* <span className="wave">Hello! :D </span> */}
                      <br />
                      <br />
                      {resumeData.basic_info?.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio">
          <div className="col-md-12">
            <h1 style={{ color: "black" }}>
              <span>{resumeData.basic_info.section_name.projects}</span>
            </h1>
            <div className="col-md-12-mx-auto">
              <div className="row-mx-auto">{projects}</div>
            </div>
            <ProjectDetailsModal
              show={detailsModalShow}
              onHide={detailsModalCloseHandler}
              data={deps}
            />
          </div>
        </section>
        <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1>
              <span className="text-white">{resumeData.basic_info.section_name.skills}</span>
            </h1>
          </div>
          <div className="col-md-12-text-center" style={{ paddingBottom: "5%"}}>
            <ul className="list-inline-mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
      <section id="resume" className="pb-5">
        <div className="col-md-12-mx-auto">
          <div className="col-md-12">
            <h1 style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {resumeData.basic_info.section_name.experience}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8-mx-auto">
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    </page>
  );
}

export default Home;
