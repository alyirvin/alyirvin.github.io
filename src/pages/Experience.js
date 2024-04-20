import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Experience() {
  const [expData, setExpData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetch('/experience.json')
    .then(response => response.json())
    .then(expData => {
      setExpData(expData);
      setIsLoading(false);
    })
    .catch(error => console.error('Error:', error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  let exps;

  if (expData.experience)
  {
    exps = expData.experience.map(function (exp, index) {
      return(
        <div className="expTicket" id={exp.label}>
          <div className="exp-company">{exp.company}</div>
          <div className="exp-icon"></div>
          <div className="exp-title">{exp.title}</div>
          <div className="exp-years">{exp.years}</div>
          <div className="exp-desc">{exp.description}</div>
          <div className="admit"></div>
        </div>
      );
    });
  }

  return (
    <experiencepage>
      <div style={{backgroundColor: '#e9d5a1'}}>
        {/* <Card>
        <Card.Header></Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{marginTop: 5, marginBottom: 10}}>
              {' '}
              In the pursuit of great, we failed to do good.{' '}
            </p>
            <div className="blockquote-footer">
              Viktor in <cite title="Source Title">Arcane</cite>
            </div>
          </blockquote>
        </Card.Body>
      </Card> */}
      <div className="tickets" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {exps}
          <div className="exp-poster">
            <img src="../expImgs/posterImg.png" alt="research poster" />
            <h1>EXPERIENCE</h1>
            <p>Real-world experiences have been vital in shaping my career trajectory. Internships 
              and research opportunities have provided firsthand insights into different industries 
              and companies, helping me discover my passions and set new goals. Each project 
              and task has offered valuable learning experiences, guiding me towards clearer 
              career aspirations and a deeper understanding of my professional interests. Through 
              these experiences, I've gained a deeper understanding of my interests and 
              have developed further determination to pursue my chosen path with confidence 
              and purpose, always with the goal of making a positive impact and viewing each 
              opportunity within the broader context of bettering the world around me.</p>
            <div style="position: absolute; bottom: 0;">"In the pursuit of great, we failed to do good." -Viktor</div>
          </div>
        </div>
        <div style={{ color: 'rgb(233, 213, 161)' }}>.</div>
      </div>
    </div>
  </experiencepage>
  )
}

export default Experience;
  