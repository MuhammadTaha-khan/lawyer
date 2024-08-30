import React from 'react';
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg'
import { FaFacebookF, FaLinkedinIn,FaTwitter,FaInstagram } from 'react-icons/fa';


const Team = () => {

    // const teamMembers = [
    //     {
    //         name: "Adam Phillips",
    //         title: "Business Consultant",
    //         img: {team1},
    //         social: [
    //             { platform: "twitter", link: "" },
    //             { platform: "facebook", link: "" },
    //             { platform: "linkedin", link: "" },
    //             { platform: "instagram", link: "" },
    //         ],
    //     },
    //     {
    //         name: "Dylan Adams",
    //         title: "Criminal Consultant",
    //         img: {team2},
    //         social: [
    //             { platform: "twitter", link: "" },
    //             { platform: "facebook", link: "" },
    //             { platform: "linkedin", link: "" },
    //             { platform: "instagram", link: "" },
    //         ],
    //     },
    //     {
    //         name: "Gloria Edwards",
    //         title: "Divorce Consultant",
    //         img: {team3},
    //         social: [
    //             { platform: "twitter", link: "" },
    //             { platform: "facebook", link: "" },
    //             { platform: "linkedin", link: "" },
    //             { platform: "instagram", link: "" },
    //         ],
    //     },
    //     {
    //         name: "Josh Dunn",
    //         title: "Immigration Consultant",
    //         img: {team4},
    //         social: [
    //             { platform: "twitter", link: "" },
    //             { platform: "facebook", link: "" },
    //             { platform: "linkedin", link: "" },
    //             { platform: "instagram", link: "" },
    //         ],
    //     },
    // ];

    // return (
    //     <div className="team">
    //         <div className="container">
    //             <div className="section-header">
    //                 <h2>Meet Our Expert Attorneys</h2>
    //             </div>
    //             <div className="row">
    //                 {teamMembers.map(member => (
    //                     <div key={member.name} className="col-lg-3 col-md-6">
    //                         <div className="team-item">
    //                             <div className="team-img">
    //                                 <img src={member.img} alt={`Team member ${member.name}`} />
    //                             </div>
    //                             <div className="team-text">
    //                                 <h2>{member.name}</h2>
    //                                 <p>{member.title}</p>
    //                                 <div className="team-social">
    //                                     {member.social.map((social, index) => (
    //                                         <a key={index} className={`social-${social.platform}`} href={social.link}>
    //                                             <i className={`fab fa-${social.platform}`}></i>
    //                                         </a>
    //                                     ))}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </div>

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
