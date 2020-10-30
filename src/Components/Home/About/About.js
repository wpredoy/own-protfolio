import React from 'react';
import './About.css';
import about from '../../../image/about.png';

const About = () => {
    return (
        <section className='about py-5'>
            <div className="container">
                <div className='row'>
                    <div className='col-10 col-md-6 mx-auto my-5'>
                        <h2>About Me</h2>
                        <p className='my-4 text-muted w-75'>
                            I am front-end developer,specializing in React.js. I can take on any React-related task and
                            i am adept at using React to build modern, fast and capable user experiences.I have great communication
                            skills and multi-disciplinary technical/creative skills that i bring into any project.
                        </p>
                    </div>
                    <div className='col-10 mx-auto col-md-6 my-3 align-self-center'>
                        <div class="about-img_container">
                            <img src={about} class="img-fluid"alt=""/>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default About;