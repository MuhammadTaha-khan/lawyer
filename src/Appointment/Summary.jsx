import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contactus.css';

const Summary = () => {
  const appointment = useSelector((state) => state.appointment);

  return (
    <div className="summary-section">
      <div className="div">
        <h1 className='text-center'>Summary</h1>
        <p className='text-center'>Your appointment Booking Summary</p>
        <div className="customer mt-4">
          <h1>Customer</h1>
          <p>First Name: {appointment.basicDetails.firstName}</p>
          <p>Phone Number: {appointment.basicDetails.phoneNumber}</p>
        </div>
        <div className="services">
          <h1>Service</h1>
          <p>Your services: {appointment.service}</p>
        </div>
        <div className="Dateandtime">
          <h1>Date & Time</h1>
          <p>Your Date: {appointment.date ? appointment.date.format('MM/DD/YYYY') : ''}</p>
          <p>Your Time: {appointment.time}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;


