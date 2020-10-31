import React from 'react';
import './Portfolio.css';
import portfolioImage1 from '../../image/work.PNG';
import portfolioImage2 from '../../image/work1.PNG';
import portfolioImage3 from '../../image/work2.PNG';

const Portfolio = () => {
    return (
        <div className='allPortfolioStyle'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-4 col-sm-12 mb-3 text-center ">
                        <div className="card">
                            <img src={portfolioImage1} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">A full-stack creative agency web application.</h5>
                                    <p className="card-text">People can select and order a service.People can see select order details.
                                    This person will be able to give reviews and this review will show on the website.
                                    The admin will see all the orders.Admin will add a service.
                                    Admin also adds other Admin.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3 text-center ">
                        <div className="card">
                            <img src={portfolioImage2} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">A full-stack volunteer-network web application.</h5>
                                    <p className="card-text">People can join as a volunteer to select a volunteer opportunity.
                                    Amin will see all the volunteer lists
                                    Admin can delete volunteer lists.
                                    Admin also adds other Admin.</p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3 text-center ">
                        <div className="card">
                            <img src={portfolioImage3} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">This is a Online-Travel website.</h5>
                                    <p className="card-text">People can select places and date.
                                    The place to select will show the details and google map will show in the selected place.
                                    The admin will see all the orders.Admin will add a service.
                                    Admin also adds other Admin.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;