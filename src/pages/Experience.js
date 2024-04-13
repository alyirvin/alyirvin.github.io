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

  console.log(expData.experience);
  if (expData.experience)
  {
    exps = expData.experience.map(function (exp, index) {
      return(
        <div className="expTicket">
            <div className="exp-company">{exp.company}</div>
            <div className="exp-title">{exp.title}</div>
            <div className="exp-years">{exp.years}</div>
            <div className="exp-desc">{exp.description}</div>
        </div>
      );
    });
  }

  return (
    <experiencepage>
      <div style={{backgroundColor: '#e9d5a1'}}>
        <Card>
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
      </Card>
      <div className="tickets">{exps}</div>
    </div>
  </experiencepage>
  )
}

export default Experience;
  