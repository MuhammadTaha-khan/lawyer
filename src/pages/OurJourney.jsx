import React from 'react';
import '../css/OurJourney.css';

const OurJourney = () => {
  return (
    <div className="Education ">
    <div className="container-lg ">
    <div className="section-header">
            <h2>Learn About Our Journey</h2>
    </div>
      <div className="timeline">
        <div className="timeline-item">
          <p className='text-end year'>2019</p>
          <div className="timeline-content">
            <h4>Civil Law</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque unde cupiditate iusto, incidunt odio labore quibusdam, magni quaerat ex repellen </p>
          </div>
        </div>
        <div className="timeline-item">
        <p className='text-start year'>2021</p>
          <div className="timeline-content">
          <h4>Family Law</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque unde cupiditate iusto, incidunt odio labore quibusdam, magni quaerat ex repellen </p>
          </div>
        </div>
        <div className="timeline-item">
        <p className='text-end year'>2022</p>
          <div className="timeline-content">
          <h4>Business Law</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque unde cupiditate iusto, incidunt odio labore quibusdam, magni quaerat ex repellen </p>
          </div>
        </div>
        <div className="timeline-item">
        <p className='text-start year'>2024</p>
          <div className="timeline-content">
            <h4>Civil Law</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, itaque unde cupiditate iusto, incidunt odio labore quibusdam, magni quaerat ex repellen </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OurJourney;
