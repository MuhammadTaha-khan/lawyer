import React from 'react';
import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
// import testimonial4 from '../img/testimonial-4.jpg'
import {  Row, Col } from 'react-bootstrap';

const FeedBack = () => {
    const feedBackData = [
        {
            img: testimonial1,
            name: 'Client Name',
            profession: 'Profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
        },
        {
            img: testimonial2,
            name: 'Client Name',
            profession: 'Profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
        },
        {
            img: testimonial3,
            name: 'Client Name',
            profession: 'Profession',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
        },
    //     {
    //         img: testimonial4,
    //         name: 'Client Name',
    //         profession: 'Profession',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
    //     },
    //     {
    //         img: testimonial1,
    //         name: 'Client Name',
    //         profession: 'Profession',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
    //     },
    //     {
    //         img: testimonial2,
    //         name: 'Client Name',
    //         profession: 'Profession',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
    //     },
    //     {
    //         img: testimonial3,
    //         name: 'Client Name',
    //         profession: 'Profession',
    //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit',
    //     },
    ];
    return (


        <div className="testimonial">
               <div class="container">
                    <div class="section-header">
                         <h2>Review From Client</h2>
                    </div>
            <Row className="justify-content-center">
                {feedBackData.map((member,index)=>(
                <Col md={4} lg={3} className="testimonial-item mb-3" key={index}>
                    <Col className='row testimonial-card-head'>
                    <img src={member.img} alt="Suncrop Group" className="testimonial-logo" />
                        <Col>
                        <h2>{member.name}</h2>
                        <p>{member.profession}</p>
                        </Col>
                    </Col>
                    <p>{member.text} </p>
                    <div className="testimonial-rate">★★★★★</div>
                </Col>

            ))}
            </Row>
        </div>
        </div>


        
    );
};



export default FeedBack;
