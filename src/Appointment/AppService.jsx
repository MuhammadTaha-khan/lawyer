// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { useState } from 'react';
// import dayjs from 'dayjs';

// const AppService = () => {
//     const [selectedDate, setSelectedDate] = useState(dayjs());

//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <div className="container fluid-lg mt-5" style={{ backgroundColor: 'blue' }}>
//                 <h2 className='text-center'>Book An Appointment</h2>
//                 <div className="row">
//                     <div className="col-md-6">
//                         <p>Service</p>
//                         <p>Date & Time</p>
//                         <p>Basic Details</p>
//                         <p>Summary</p>
//                     </div>
//                     <div className="col-md-6">
//                         <p>Select Category</p>
//                         <div className="col-6">
//                             <InputGroup className="mb-3">
//                                 <Form.Control aria-label="Text input with dropdown button" style={{ width: '30px' }} />
//                                 <DropdownButton
//                                     variant="outline-secondary"
//                                     title="Dropdown"
//                                     id="input-group-dropdown-2"
//                                     align="end"
//                                 >
//                                     <Dropdown.Item>Action</Dropdown.Item>
//                                     <Dropdown.Item>Another action</Dropdown.Item>
//                                     <Dropdown.Item>Something else here</Dropdown.Item>
//                                     <Dropdown.Item>Separated link</Dropdown.Item>
//                                 </DropdownButton>
//                             </InputGroup>
//                         </div>
//                         <StaticDatePicker
//                             orientation="landscape"
//                             openTo="day"
//                             value={selectedDate}
//                             onChange={(newValue) => setSelectedDate(newValue)}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </LocalizationProvider>
//     );
// }

// export default AppService;











// ------------------------------------------it is present------------------------------
// import React from 'react';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';



// const AppService = () => {

//     return (
//         <div className='AppService'>
//             <div className="container fluid-lg mt-5" style={{ backgroundColor: 'antiquewhite' }}>
//                 <h2 className='text-center'>Book An Appointment</h2>
//                 <div className="row mt-5">
//                     <div className="col-md-6 appnav">
//                         <div className="innerappnav">
//                             <a>Service</a>
//                             <a>Date & Time</a>
//                             <a>Basic Details</a>
//                             <a>Summary</a>
//                         </div>
//                     </div>
//                     <div className="col-md-6" style={{ backgroundColor: 'pink', height: '500px' }}>
//                         <p>Select Category</p>
//                         <div className="col-6" >
//                             <InputGroup className="mb-3">
//                                 <Form.Control aria-label="Text input with dropdown button" style={{ width: '30px' }} />
//                                 <DropdownButton
//                                     variant="outline-secondary"
//                                     title="Dropdown"
//                                     id="input-group-dropdown-2"
//                                     align="end"
//                                 >
//                                     <Dropdown.Item>Action</Dropdown.Item>
//                                     <Dropdown.Item>Another action</Dropdown.Item>
//                                     <Dropdown.Item>Something else here</Dropdown.Item>
//                                     <Dropdown.Item>Separated link</Dropdown.Item>
//                                 </DropdownButton>
//                             </InputGroup>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AppService;




// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// // import {  NavLink } from 'react-router-dom';
// import { FaServer, FaClock, FaCalendarAlt, FaFileAlt, FaCheckSquare } from 'react-icons/fa';
// import DropServices from './DropServices'
// import Calendar from './Calender';
// import Timing from './Timing';
// import Basicinfo from './Basicinfo'
// import Summary from './Summary'

// const steps = [
//     { name: 'Service', icon:<FaServer/>, component: <DropServices/> },
//     { name: 'Date', icon:<FaClock/>, component: <Calendar /> },
//     { name: 'Time',icon:<FaCalendarAlt/>, component: <Timing /> },
//     { name: 'Basic Details',icon:<FaFileAlt/>, component: <Basicinfo/> },
//     { name: 'Summary',icon:<FaCheckSquare/>, component: <Summary/> },
// ];

// const BookAppointment = () => {
//     const [currentStep, setCurrentStep] = useState(0);

//     const handleNext = () => {
//         if (currentStep < steps.length - 1) {
//             setCurrentStep(currentStep + 1);
//         }
//     };

//     const handlePrevious = () => {
//         if (currentStep > 0) {
//             setCurrentStep(currentStep - 1);
//         }
//     };

//     const handleStepClick = (index) => {
//         setCurrentStep(index);
//     };

//     return (
//         <div className="container fluid-lg mt-5">
//             <h2 className='text-center mb-5'>Book an Appointment</h2>
//             <div className="row AppServices">
//                 <div className="col-md-3 Appnav">
//                     <div className="innerAppnav">
//                     {steps.map((step, index) => (
//                         <p key={index}
//                          className={index === currentStep ? 'font-weight-bold' : ''}
//                          onClick={() => handleStepClick(index)}
//                          style={{ cursor: 'pointer' }}
//                          >

//                             {step.icon} <span>{step.name}</span>                      
//                         </p>
//                     ))}
//                     </div>
//                 </div>
//                 <div className="col-md-6 app-rightside">
//                     {steps[currentStep].component}
//                     <div className=" d-flex justify-content-center">
//                         <div className="app-button col-md-8 d-flex justify-content-between mt-3">
//                             <Button onClick={handlePrevious} disabled={currentStep === 0}>Previous</Button>
//                             <Button onClick={handleNext} disabled={currentStep === steps.length - 1}>Next</Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookAppointment;
