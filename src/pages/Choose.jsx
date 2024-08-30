import React from 'react';
import feature from '../img/feature.jpg'
import { FaGavel, FaBalanceScale, FaRegSmile} from 'react-icons/fa';

const Choose = () => {
    return (
        <div className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="section-header">
                            <h2>Why Choose Us</h2>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <FaGavel/>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Best law practices</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <FaBalanceScale/>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Efficiency & Trust</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                </p>
                            </div>
                        </div>
                        <div className="row align-items-center feature-item">
                            <div className="col-5">
                                <div className="feature-icon">
                                    <FaRegSmile/>
                                </div>
                            </div>
                            <div className="col-7">
                                <h3>Results you deserve</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="feature-img">
                            <img src={feature} alt="Feature" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;
