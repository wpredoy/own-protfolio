import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import headerLogo from '../../../image/download.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
            <Link to='/'><img src={headerLogo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link mr-5">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link mr-5" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link mr-5">portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link mr-5">Contact Me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;