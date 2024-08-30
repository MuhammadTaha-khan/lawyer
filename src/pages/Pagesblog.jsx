import React from 'react';
import { FaListAlt, FaCalendarAlt, FaAngleRight } from 'react-icons/fa';
import {Container,Row,Col} from 'react-bootstrap'
import blog1 from '../img/blog-1.jpg'
import blog2 from '../img/blog-2.jpg'
import blog3 from '../img/blog-3.jpg'

const Pagesblog = () => {
    const blogPosts = [
        {
            img: blog1,
            title: 'Lorem ipsum dolor',
            category: 'Civil Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog2,
            title: 'Lorem ipsum dolor',
            category: 'Family Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog3,
            title: 'Lorem ipsum dolor',
            category: 'Business Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog1,
            title: 'Lorem ipsum dolor',
            category: 'Education Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog2,
            title: 'Lorem ipsum dolor',
            category: 'Criminal Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog3,
            title: 'Lorem ipsum dolor',
            category: 'Cyber Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog1,
            title: 'Lorem ipsum dolor',
            category: 'Business Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog2,
            title: 'Lorem ipsum dolor',
            category: 'Criminal Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
        {
            img: blog3,
            title: 'Lorem ipsum dolor',
            category: 'Cyber Law',
            date: '01-Jan-2045',
            description: 'Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor',
        },
    ];

    return (
        <div className="blog">
        <Container>
            <div className="section-header">
                <h2>Latest From Blog</h2>
            </div>
            <Row>
                {blogPosts.map((member, index) => (
                    <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
                        <div className="blog-item">
                            <img src={member.img} alt="Blog" className="img-fluid"/>
                            <h3>{member.title}</h3>
                            <div className="meta d-flex align-items-center">
                                <FaListAlt className="me-2" />
                                <p className="mb-0 me-4">{member.category}</p>
                                <FaCalendarAlt className="me-2" />
                                <p className="mb-0">{member.date}</p>
                            </div>
                            <p>{member.description}</p>
                            <a className="btn" href="">Read More <FaAngleRight /></a>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>

    );
};

export default Pagesblog;
