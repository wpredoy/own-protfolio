import React from 'react';
import './HeaderMain.css';
import cvDownload from '../../../image/motiur.pdf';
// import mainHeader from '../../../image/header.webp'
import mainHeader from '../../../image/about1.png';

const HeaderMain = () => {
    return (
        <main style={{height: '800px'}} className="row d-flex align-items-center">
            <div className="col-md-4  offset-md-1">
                <h6>HEY THERE |</h6> 
                <h1 className="brandStyle">I AM MOTIUR RAHMAN</h1>
                <p className="headerText">A JUNIOR WEB DEVELOPER</p>
                <a href={cvDownload} download>
                    <button className="hireButtonStyle">Download CV</button>
                </a>
            </div>
            <div className="col-md-6 imageStyle">
                <img src={mainHeader} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;