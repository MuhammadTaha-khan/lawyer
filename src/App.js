import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'; 

import './css/style.css'
import './css/Appointment.css'
import TopBar from './component/TopBar';
import Navbar from './component/Navbar';
import Newsletter from './pages/Newsletter';
import Footer from './pages/Footer';
import Carousel from './pages/Carousel';
import Features from './pages/Features';
import Service from './pages/Service';
import About from './pages/About';
import Choose from './pages/Choose';
import Team from './pages/Team';
import Question from './pages/Questions';
import FeedBack from './pages/FeedBack';
import Blog from './pages/Blog';
import OurJourney from './pages/OurJourney';
import AboutAttrony from './pages/AboutAttrony';
import Casess from './pages/Casess';
import Contact from './pages/Contact';
import Pagesblog from './pages/Pagesblog';
import BookAppointment from './Appointment/BookAppointment';
import Calender from './Appointment/Calender';
// import Timing from './Appointment/Timing';
// import Basicinfo from './Appointment/Basicinfo';
// import Summary from './Appointment/Summary';
// import PointNav from './Appointment/PointNav';

function App() {
    return (
        <Router>
            <div className="wrapper">
                <TopBar />
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                        <Carousel/>
                        <Features/>
                        <About/>
                        <Service/>
                        <Choose/>
                        <Team/>
                        <Question/>
                        <FeedBack/>
                        <Blog/>
                        </>
                    } />
                
                    <Route path="/about" element={
                        <>
                        <About />
                        <OurJourney/>
                        <Team/>
                        </>
                        } /> 
                    
                    <Route path="/service" element={
                        <>
                        <Service />
                        <Choose/>
                        </>
                        } />
                    <Route path="/team" element={
                        <>
                        <AboutAttrony/>
                        <Team/>
                        </>
                        } />
                    <Route path="/portfolio" element={
                        <>
                        <Casess/>
                        </>
                        }/>
                    <Route path="/blog" element={
                        <>
                        <Pagesblog/>
                        </>
                        } />
                   
                    <Route path="/contact" element={<Contact/> } /> 
                    <Route path="/faqs" element={<Question/> } /> 
                    {/* <Route path="/Appservice" element={{}} />  */}
                    <Route path="/calender" element={<Calender/>} /> 


                </Routes>
                {/* <PointNav/> */}
                <BookAppointment/> 
                {/* <Calender/>
                <Timing/>
                <Basicinfo/>
                <Summary/> */}
                <Newsletter/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
