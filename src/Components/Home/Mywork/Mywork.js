import React from 'react';
import './Mywork.css';
import carousel1 from '../../../image/work1.PNG';
import carousel2 from '../../../image/work.PNG';
import carousel3 from '../../../image/work2.PNG';
import { Link } from 'react-router-dom';

const Mywork = () => {
    return (
        <div className="workStyle">
            <h2 className="OurWork">MY WORK</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>     
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div class="text-center carouselStyle">
                           <Link to='/portfolio'><img src={carousel1} alt=""/></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="text-center carouselStyle">
                        <Link to='/portfolio'><img src={carousel2} alt=""/></Link>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="text-center carouselStyle">
                        <Link to='/portfolio'><img src={carousel3} alt=""/></Link>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    );
};

export default Mywork;