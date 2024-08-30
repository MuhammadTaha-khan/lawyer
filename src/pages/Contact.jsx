import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Contactus.css';
// import '../css/style.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import Swal from 'sweetalert2';

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ba5b6bf0-b3b6-4d69-98d5-4165e562a5aa");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
    };

    return (
        <div className="msg-section">
            <h1 className='msg-heading text-center'>CONTACT US</h1>
            <Container>
                <Row className="mesg mb-4">
                    <Col md={5} className="testimonial-card text-start">
                        <p>TRAVEL THE SILK ROAD TOWARDS</p>
                        <h4>Transforming Your Growth Through Digitalization</h4>
                        <h6 className='pt-4'>Follow Us On:</h6>
                        <Col className='footer-social mb-5' style={{ display: 'flex', flexDirection: 'row', fontSize: 'large', marginBottom: '20px', color:'aa9166' }}>
                            <a href="https://www.facebook.com/profile.php?id=100071913467957" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF/>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-taha-207545313/" target="_blank" rel="noopener noreferrer">
                                <FaYoutube/>
                            </a>
                            <a href="https://www.instagram.com/muhammadtahakhan71" target="_blank" rel="noopener noreferrer">
                                <FaInstagram/>
                            </a>
                            <a href="https://wa.me/92186064657" target="_blank" rel="noopener noreferrer">
                                <FaLinkedinIn/>
                            </a>
                            <a href="https://github.com/Taha-dev-ai" target="_blank" rel="noopener noreferrer">
                                <FaTwitter/>
                            </a>
                        </Col>
                                    {/* <div className="footer-social">
                                        <a href="#"><FaTwitter/></a>
                                        <a href="#"><FaFacebookF/></a>
                                        <a href="#"><FaYoutube/></a>
                                        <a href="#"><FaInstagram/></a>
                                        <a href="#"><FaLinkedinIn/></a>
                                    </div> */}
                    </Col>
                    <Col md={6} className="msg-card-right">
                        <h2>Get In Touch With Us</h2>
                        <div>
                            <form className="form" onSubmit={onSubmit}>
                                <p className="message">Free contact now and get full access to our app.</p>
                                <label>
                                    <input className="input field" type="text" placeholder="First Name" name="name" required />
                                </label>
                                <label>
                                    <input className="input field" type="text" placeholder="Last Name" name="Company Name" required />
                                </label>
                                <label>
                                    <input className="input field" type="email" placeholder="Email" name="email" required />
                                </label>
                                <label>
                                    <input className="input field" type="text" placeholder="Phone Number" name="Phone Number" required />
                                </label>
                                <label>
                                    <textarea className="input field" placeholder="Your Message" name="message" required rows={3} />
                                </label>
                                <button className="cont-button" type="submit">Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contact;
