import React, { useState } from 'react';
import faqs from '../img/faqs.jpg'
import { NavLink } from 'react-router-dom';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Question = () => {

    const [visibleQuestionIndex, setVisibleQuestionIndex] = useState(null)

    const scrollToTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    }

    // const [isOpen , setIsOpen] = useState(false)

    const faqsData = [
        {
            id:'1',
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
        },
        {
            id:'2',
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
        },
        {
            id:'3',
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
        },
        {
            id:'4',
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
        },
        {
            id:'5',
            question: 'Lorem ipsum dolor sit amet?',
            answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.',
        },
    ];

      
    return (
        <div className="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="faqs-img">
                                <img src={faqs} alt="Image"/>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="section-header">
                                <h2>Have A Questions?</h2>
                            </div>
                            <div id="accordion">
                            {faqsData.map((member, index) => (
                                <div className="card" key={index}>
                                    <div className="card-header">
                                        {/* <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true"> */}
                                        <a>
                                            <span>{member.id}</span> {member.question}
                                        </a>
                                        <FaAngleDown
                                        onMouseEnter={() => setVisibleQuestionIndex(index)}
                                        onMouseLeave={() => setVisibleQuestionIndex(null)}
                                        />
                                    </div>
                                    {/* <div id="collapseOne" className="collapse show" data-parent="#accordion"> */}
                                    <div id={`collapse-${index}`} className={`collapse ${visibleQuestionIndex === index ? 'show' : ''}`} data-parent="#accordion">
                                    
                                        <div className="card-body" >
                                            {member.answer}
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            <NavLink to="/contact" className="btn" onClick={scrollToTop}>Ask more</NavLink>
                            {/* <a className="btn" href="">Ask more</a> */}
                        </div>
                    </div>
                </div>
            </div>
    );
};



export default Question;
