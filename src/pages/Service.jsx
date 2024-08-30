import React from 'react';
import { FaLandmark, FaUsers, FaHandHoldingUsd, FaGraduationCap, FaGavel, FaGlobe } from 'react-icons/fa';

const Service = () => {
    return (
        <div className="service">
            <div className="container">
                <div className="section-header">
                    <h2>Our Practices Areas</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaLandmark/>
                            </div>
                            <h3>Civil Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaUsers/>
                            </div>
                            <h3>Family Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaHandHoldingUsd/>
                            </div>
                            <h3>Business Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaGraduationCap/>
                            </div>
                            <h3>Education Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaGavel/>
                            </div>
                            <h3>Criminal Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item">
                            <div className="service-icon">
                                <FaGlobe/>
                            </div>
                            <h3>Cyber Law</h3>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                            </p>
                            <a className="btn" href="#">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
