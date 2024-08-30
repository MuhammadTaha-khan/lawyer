// import React from 'react';
// import { Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../css/Contactus.css';


// function Basicinfo() {

//     return (
//         <div className="Basicinfo-section">
//             <>
//                 <Col className="basicinfo">
//                     <div>
//                         <form className="form" >
//                             <p className="">Free contact now and get full access to our app.</p>
//                             <label>
//                                 <input className="input field" type="text" placeholder="First Name" name="name" required />
//                             </label>
//                             <label>
//                                 <input className="input field" type="text" placeholder="Last Name" name="Company Name" required />
//                             </label>
//                             <label>
//                                 <input className="input field" type="email" placeholder="Email" name="email" required />
//                             </label>
//                             <label>
//                                 <input className="input field" type="text" placeholder="Phone Number" name="Phone Number" required />
//                             </label>
//                             <label>
//                                 <textarea className="input field" placeholder="Your Message" name="message" required rows={3} />
//                             </label>
//                         </form>
//                     </div>
//                 </Col>
//             </>
//         </div>
//     );
// }

// export default Basicinfo;










// src/Basicinfo.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { setBasicDetails } from '../features/appointmentSlice';
import { Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contactus.css';

const Basicinfo = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setBasicDetails(prevState => ({
      ...prevState,
      [name]: value
    })));
  };

  return (
    <div className="Basicinfo-section">
      <Col className="basicinfo">
        <div>
          <form className="form">
            <p className="">Free contact now and get full access to our app.</p>
            <label>
              <input className="input field" type="text" placeholder="First Name" name="firstName" required onChange={handleInputChange} />
            </label>
            <label>
              <input className="input field" type="text" placeholder="Last Name" name="lastName" required onChange={handleInputChange} />
            </label>
            <label>
              <input className="input field" type="email" placeholder="Email" name="email" required onChange={handleInputChange} />
            </label>
            <label>
              <input className="input field" type="text" placeholder="Phone Number" name="phoneNumber" required onChange={handleInputChange} />
            </label>
            <label>
              <textarea className="input field" placeholder="Your Message" name="message" required rows={3} onChange={handleInputChange} />
            </label>
          </form>
        </div>
      </Col>
    </div>
  );
}

export default Basicinfo;
