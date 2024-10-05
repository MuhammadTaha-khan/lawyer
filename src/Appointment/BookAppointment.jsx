import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaServer, FaClock, FaCalendarAlt, FaFileAlt, FaCheckSquare } from 'react-icons/fa';
import DropServices from './DropServices';
import Calender from './Calender';
import Timing from './Timing';
import Basicinfo from './Basicinfo';
import Summary from './Summary';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const steps = [
  { name: 'Service', icon: <FaServer />, component: <DropServices /> },
  { name: 'Date', icon: <FaClock />, component: <Calender /> },
  { name: 'Time', icon: <FaCalendarAlt />, component: <Timing /> },
  { name: 'Basic Details', icon: <FaFileAlt />, component: <Basicinfo /> },
  { name: 'Summary', icon: <FaCheckSquare />, component: <Summary /> },
];

const BookAppointment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const appointment = useSelector((state) => state.appointment); // Accessing Redux state
  
  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // Collect form data including Redux appointment data
    const formData = new FormData();
    formData.append("firstName", appointment.basicDetails.firstName);
    formData.append("phoneNumber", appointment.basicDetails.phoneNumber);
    formData.append("service", appointment.service);
    formData.append("date", appointment.date ? appointment.date.format('MM/DD/YYYY') : '');
    formData.append("time", appointment.time);
    formData.append("access_key", "ba5b6bf0-b3b6-4d69-98d5-4165e562a5aa"); // Add access key

    // Convert to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Send data via fetch to Web3Forms API
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    // Handle success or error
    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Appointment booked successfully.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to book the appointment.",
        icon: "error",
      });
    }
  };

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
    <div className="container fluid-lg mt-5 bookapp">
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
              <Button onClick={handlePrevious} disabled={currentStep === 0}
              style={{
                backgroundColor: '#121518',
                color: '#aa9166',
                borderColor: '#fff',
                borderRadius:'0px'
              }}
              >Previous</Button>
              {currentStep === steps.length - 1 ? (
                <Button onClick={onSubmit}
                style={{
                  backgroundColor: '#121518',
                  color: '#aa9166',
                  borderColor: '#fff',
                  borderRadius:'0px'
                }}
                >Submit</Button> // Bind onSubmit here
              ) : (
                <Button onClick={handleNext}
                style={{
                  backgroundColor: '#121518',
                  color: '#aa9166',
                  borderColor: '#fff',
                  borderRadius:'0px'
                }}>Next</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;







