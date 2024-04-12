import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Experience() {
  return (
    <experiencepage>
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
  </experiencepage>
  )
}

export default Experience;
  