import React, { useState, useEffect } from 'react';
import { Footer as CFooter } from "flowbite-react";

export default function Footer() {
  const [sharedData, setSharedData] = useState({});
  useEffect(() => {
    fetch('/shared_data.json')
      .then(response => response.json())
      .then(data => setSharedData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (sharedData.basic_info) {
      var networks = sharedData.basic_info.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }
    
    return (
      <CFooter>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy;{" "}
                {sharedData.basic_info
                  ? sharedData.basic_info.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </CFooter>
    )
}