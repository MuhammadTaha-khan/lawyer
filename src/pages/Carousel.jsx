import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../img/carousel-1.jpg';
import carousel2 from '../img/carousel-2.jpg';
import carousel3 from '../img/carousel-3.jpg';

const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>We fight for your justice</h3>
                    <p>Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                    <a className="btn btn-primary" href="#">Get free consultation</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>We prepared to oppose for you</h3>
                    <p>Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                    <a className="btn btn-primary" href="#">Get free consultation</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>We fight for your privilege</h3>
                    <p>Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
                    <a className="btn btn-primary" href="#">Get free consultation</a>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselComponent;



// import React from 'react';
// import carousel1 from '../img/carousel-1.jpg'
// import carousel2 from '../img/carousel-2.jpg'
// import carousel3 from '../img/carousel-3.jpg'

// const Carousel = () => {
//     return (
//         <div id="carousel" className="carousel slide" data-ride="carousel">
//             <ol className="carousel-indicators">
//                 <li data-target="#carousel" data-slide-to="0" className="active"></li>
//                 <li data-target="#carousel" data-slide-to="1"></li>
//                 <li data-target="#carousel" data-slide-to="2"></li>
//             </ol>
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img src={carousel1} alt="Carousel Image" />
//                     <div className="carousel-caption">
//                         <h1 className="animated fadeInLeft">We fight for your justice</h1>
//                         <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
//                         <a className="btn animated fadeInUp" href="#">Get free consultation</a>
//                     </div>
//                 </div>

//                 <div className="carousel-item">
//                     <img src={carousel2} alt="Carousel Image" />
//                     <div className="carousel-caption">
//                         <h1 className="animated fadeInLeft">We prepared to oppose for you</h1>
//                         <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
//                         <a className="btn animated fadeInUp" href="#">Get free consultation</a>
//                     </div>
//                 </div>

//                 <div className="carousel-item">
//                     <img src={carousel3} alt="Carousel Image" />
//                     <div className="carousel-caption">
//                         <h1 className="animated fadeInLeft">We fight for your privilege</h1>
//                         <p className="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
//                         <a className="btn animated fadeInUp" href="#">Get free consultation</a>
//                     </div>
//                 </div>
//             </div>

//             <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="sr-only"></span>
//             </a>
//             <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="sr-only"></span>
//             </a>
//         </div>
//     );
// };

// export default Carousel;


