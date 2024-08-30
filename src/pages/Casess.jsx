import React from 'react'
import portfolio1 from '../img/portfolio-1.jpg'
import portfolio2 from '../img/portfolio-2.jpg'
import portfolio3 from '../img/portfolio-3.jpg'
import portfolio4 from '../img/portfolio-4.jpg'
import portfolio5 from '../img/portfolio-5.jpg'
import portfolio6 from '../img/portfolio-6.jpg'

function Casess() {
    const portfolio = [
        {
            img:portfolio1,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
        {
            img:portfolio2,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
        {
            img:portfolio3,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
        {
            img:portfolio4,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
        {
            img:portfolio5,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
        {
            img:portfolio6,
            title:'Politics',
            case:'Political Case',
            date:'01-Jan-2045'
        },
    ];
  return (
    <div>
      <div class="portfolio">
                <div class="container">
                    <div class="section-header">
                        <h2>Our Case Studies</h2>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".first">Civil</li>
                                <li data-filter=".second">Criminal</li>
                                <li data-filter=".third">Business</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row portfolio-container">
                        {portfolio.map((member, index )=>(
                        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item first" key={index}>
                            <div class="portfolio-wrap" >
                                <img src={member.img} alt="Portfolio Image"/>
                                <figure>
                                    <p>{member.title}</p>
                                    <a href="#">{member.case}</a>
                                    <span>{member.date}</span>
                                </figure>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div class="row">
                        <div class="col-12 load-more">
                            <a class="btn" href="#">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Casess
