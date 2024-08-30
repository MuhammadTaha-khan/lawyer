// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// const timeSlots = {
//     morning: [
//         "9:00 am - 9:30 am",
//         '9:30 am - 10:00 am',
//         '10:00am - 10:30 am',
//         '10:30am - 11:00 am',
//         '11:00am - 11:30 am',
//         '11:30am - 12:00pm'
//     ],
//     afternoon: [
//         '12:00pm - 12:30pm',
//         '12:30 pm - 1:00 pm',
//         '1:00 pm - 1:30 pm',
//         '1:30 pm - 2:00 pm',
//         '2:00 pm - 2:30 pm',
//         '2:30 pm - 3:00 pm',
//     ]
// };

// const Timing = () => {
//     const [selectedSlot, setSelectedSlot] = useState(null);

//     const handleSlotClick = (slot) => {
//         setSelectedSlot(slot);
//     };

//     return (
//         <Container>
//             <div className="">
//                 <Card>
//                     <Card.Body >
//                         <Card.Title>Time Slot</Card.Title>
//                         <Row style={{ display: 'flex', flexDirection: 'column' }}>
//                             <Col >
//                                 <h5>Morning</h5>
//                                 {timeSlots.morning.map((slot, index) => (
//                                     <Button
//                                         key={index}
//                                         variant={selectedSlot === slot ? 'primary' : 'outline-primary'}
//                                         className="m-1 col-md-5"
//                                         onClick={() => handleSlotClick(slot)}
//                                     >
//                                         {slot}
//                                     </Button>
//                                 ))}
//                             </Col>
//                             <Col>
//                                 <h5>Afternoon</h5>
//                                 {timeSlots.afternoon.map((slot, index) => (
//                                     <Button
//                                         key={index}
//                                         variant={selectedSlot === slot ? 'primary' : 'outline-primary'}
//                                         className="m-1 col-md-5"
//                                         onClick={() => handleSlotClick(slot)}
//                                     >
//                                         {slot}
//                                     </Button>
//                                 ))}
//                             </Col>
//                         </Row>
//                     </Card.Body>
//                 </Card>
//             </div>

//         </Container>
//     );
// };

// export default Timing;






// src/Timing.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTime } from '../features/appointmentSlice';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const timeSlots = {
  morning: [
    "9:00 am - 9:30 am",
    '9:30 am - 10:00 am',
    '10:00am - 10:30 am',
    '10:30am - 11:00 am',
    '11:00am - 11:30 am',
    '11:30am - 12:00pm'
  ],
  afternoon: [
    '12:00pm - 12:30pm',
    '12:30 pm - 1:00 pm',
    '1:00 pm - 1:30 pm',
    '1:30 pm - 2:00 pm',
    '2:00 pm - 2:30 pm',
    '2:30 pm - 3:00 pm',
  ]
};

const Timing = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useDispatch();

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
    dispatch(setTime(slot));
  };

  return (
    <Container>
      <div className="">
        <Card>
          <Card.Body >
            <Card.Title>Time Slot</Card.Title>
            <Row style={{ display: 'flex', flexDirection: 'column' }}>
              <Col >
                <h5>Morning</h5>
                {timeSlots.morning.map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedSlot === slot ? 'primary' : 'outline-primary'}
                    className="m-1 col-md-5"
                    onClick={() => handleSlotClick(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </Col>
              <Col>
                <h5>Afternoon</h5>
                {timeSlots.afternoon.map((slot, index) => (
                  <Button
                    key={index}
                    variant={selectedSlot === slot ? 'primary' : 'outline-primary'}
                    className="m-1 col-md-5"
                    onClick={() => handleSlotClick(slot)}
                  >
                    {slot}
                  </Button>
                ))}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>

    </Container>
  );
};

export default Timing;
