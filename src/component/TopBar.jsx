import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="logo">
                            <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
                                <h2>SadiaAli&company</h2>
                                {/* <img src="img/logo.jpg" alt="Logo"/> */}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="top-bar-right">
                            <div className="text">
                                <h2>8:00-9:00</h2>
                                <p>Opening Hour</p>
                            </div>
                            <div className="text">
                                <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
                                    <h2>+923018223044</h2>
                                </a>
                                <p>Call Us For Free Consultation</p>
                            </div>
                            <div className="social">
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaLinkedinIn /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
