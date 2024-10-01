import React from 'react';
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg'
import { FaFacebookF, FaLinkedinIn,FaTwitter,FaInstagram } from 'react-icons/fa';


const Team = () => {

    return (
    <div class="team">
                <div class="container">
                    <div class="section-header">
                        <h2>Meet Our Expert Attorneys</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={team1} alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>Business Consultant</p>
                                    <div class="team-social">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter/>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                         <FaFacebookF />
                                        </a>
                                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={team2} alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Criminal Consultant</p>
                                    <div class="team-social">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter/>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                         <FaFacebookF />
                                        </a>
                                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={team3} alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Gloria Edwards</h2>
                                    <p>Divorce Consultant</p>
                                    <div class="team-social">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter/>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                         <FaFacebookF />
                                        </a>
                                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={team4} alt="Team Image"/>
                                </div>
                                <div class="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Immigration Consultant</p>
                                    <div class="team-social">
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter/>
                                        </a>
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                         <FaFacebookF />
                                        </a>
                                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn />
                                        </a>
                                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};



export default Team;
