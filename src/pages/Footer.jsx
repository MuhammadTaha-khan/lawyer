import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,FaYoutube } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const Footer = () => {

    const ScrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="footer-about">
                            <h2>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu lectus a leo tristique dictum nec non quam. Suspendisse convallis, tortor eu placerat rhoncus, lorem quam iaculis felis, sed eleifend lacus neque id eros. Integer convallis volutpat neque
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h2>Services Areas</h2>
                                    <a href="#">Civil Law</a>
                                    <a href="#">Family Law</a>
                                    <a href="#">Business Law</a>
                                    <a href="#">Education Law</a>
                                    <a href="#">Immigration Law</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-link">
                                    <h2>Useful Pages</h2>
                                    <NavLink to="/about" className="nav-item nav-link" onClick={ScrollToTop} >About Us</NavLink>
                                    <NavLink to="/service" className="nav-item nav-link" onClick={ScrollToTop}>Practice</NavLink>
                                    <NavLink to="/team" className="nav-item nav-link" onClick={ScrollToTop}>Attorneys</NavLink>
                                    <NavLink to="/portfolio" className="nav-item nav-link" onClick={ScrollToTop}>Case Studies</NavLink>
                                    <NavLink to="/faqs" className="nav-item nav-link" onClick={ScrollToTop}>FAQs</NavLink>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="footer-contact">
                                    <h2>Get In Touch</h2>
                                    <p><FaMapMarkerAlt />123 Street, New York, USA</p>
                                    <p><FaPhoneAlt />+012 345 67890</p>
                                    <p><FaEnvelope />info@example.com</p>
                                    <div className="footer-social">
                                        <a href="https://openai.com/chatgpt/" target="_blank"><FaTwitter/></a>
                                        <a href="#" target='_blank'><FaFacebookF/></a>
                                        <a href="#" target='_blank'><FaYoutube/></a>
                                        <a href="#" target='_blank'><FaInstagram/></a>
                                        <a href="#" target='_blank'><FaLinkedinIn/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-menu">
                <div className="f-menu">
                    <a href="#">Terms of use</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Cookies</a>
                    <a href="#">Help</a>
                    <a href="#">FQAs</a>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="https://www.instagram.com/marketingbooster.tech/" target='_blank'>Mareting Booster</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="http://www.facebook.com/marketingbooster.tech" target='_blank'>Marketing Booster</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer