import React from 'react';
import './Skill.css';

const Skill = () => {
    return (
        <div style={{background: '#f6f6f6'}}>
            <div className="container">
                <div className="SkillStyle">
                    <h1>MY SKILL</h1>
                    <div className='skills'>
                        <span className='Name'>HTML</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "80%"}}></div>
                        </div>
                        <span className='value'>80%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>CSS</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "70%"}}></div>
                        </div>
                        <span className='value'>70%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>JavaScript</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "60%"}}></div>
                        </div>
                        <span className='value'>60%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>react js</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "50%"}}></div>
                        </div>
                        <span className='value'>50%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>node js</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "40%"}}></div>
                        </div>
                        <span className='value'>40%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>express js</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "30%"}}></div>
                        </div>
                        <span className='value'>30%</span>
                    </div>
                </div>
                <div className="SkillStyle">
                    <div className='skills'>
                        <span className='Name'>mongodb</span>
                        <div className='percent'>
                            <div className='progress' style={{width: "25%"}}></div>
                        </div>
                        <span className='value'>25%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;