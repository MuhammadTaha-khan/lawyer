// src/BookAppointment.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaServer, FaClock, FaCalendarAlt, FaFileAlt, FaCheckSquare } from 'react-icons/fa';
import DropServices from './DropServices';
import Calender from './Calender';
import Timing from './Timing';
import Basicinfo from './Basicinfo';
import Summary from './Summary';

const steps = [
  { name: 'Service', icon: <FaServer />, component: <DropServices /> },
  { name: 'Date', icon: <FaClock />, component: <Calender /> },
  { name: 'Time', icon: <FaCalendarAlt />, component: <Timing /> },
  { name: 'Basic Details', icon: <FaFileAlt />, component: <Basicinfo /> },
  { name: 'Summary', icon: <FaCheckSquare />, component: <Summary /> },
];

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="container fluid-lg mt-5">
      <h2 className='text-center mb-5'>Book an Appointment</h2>
      <div className="row AppServices">
        <div className="col-md-3 Appnav">
          <div className="innerAppnav">
            {steps.map((step, index) => (
              <p key={index}
                className={index === currentStep ? 'font-weight-bold' : ''}
                onClick={() => handleStepClick(index)}
                style={{ cursor: 'pointer' }}
              >
                {step.icon} <span>{step.name}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="col-md-6 app-rightside">
          {steps[currentStep].component}
          <div className="d-flex justify-content-center">
            <div className="app-button col-md-8 d-flex justify-content-between mt-3">
              <Button onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
              <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
