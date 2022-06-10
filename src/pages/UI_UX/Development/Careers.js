import React from "react";
import './Development.css';
import team from '../../../team.jpg';

function Careers() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div className="development_hero af" style={{width: '100%',display: 'flex', gap: '50px'}}>
                        <div style={{width:'100%'}}>
                            <h1>Join our team</h1>
                            <div className="hero_text">Our people make us who we are. We offer growth opportunities to each family member and provide them with the freedom to create products people love.</div>
                            <div className="hero_text">We’re looking for passionate, goal-oriented, and forward-minded IT specialists. Let’s do great things together.</div>
                        </div>

                        <div className="careerteam"><img src={team} /></div>
                        
                    </div>

                    <div className="title"> Job Openings</div>
                    <div className="highlight_text"> Currently there is no job position available.</div>
                </div>
                {/* <Contactform /> */}
            </div>


        </div>
    );
};

export default Careers;