import React from "react";
import './Development.css';
import FlowCarousel from "../../../Components/FlowCarousel/FlowCarousel";
import { Link } from "react-router-dom";
import taxi from "../../../taxi.svg"
import social  from "../../../social.svg"
import iot from "../../../iot.svg"
import health  from "../../../health.svg"
import finance  from "../../../finance.svg"
import entertainment from "../../../entertainment.svg"
import ecommerce  from "../../../e-commerce.svg"
import enterprise   from "../../../enterprise.svg"
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";


function Service() {
    return(
        <div>
            <div className="service container" style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}}>
                    <div className="service" style={{padding: '50px 100px 60px 100px'}}>
                            <div>
                                <div className="title" style={{fontSize:'40px'}}>What we do</div>
                                <div className="highlight_text">We offer a full cycle of development services</div>
                            </div>
                            <div className="service_list">
                                <ul>
                                    <li ><Link  to='/iOS'><div className='colorfont fhover-underline-animation'>iOS Development</div></Link></li>
                                    <li><Link to='/Android'><div className='colorfont fhover-underline-animation'>Android Development</div></Link></li>
                                    <li><Link to='/WebApp'><div className='colorfont fhover-underline-animation'>Web app Development</div></Link></li>
                                    <li><Link to='/Quality'><div className='colorfont fhover-underline-animation'>Quality Assurance</div></Link></li>
                                    <li><Link to='/mvp'><div className='colorfont fhover-underline-animation'>MVP App Development for Startups</div></Link></li>
                                    <li><Link to='/ProjectManagement'><div className='colorfont fhover-underline-animation'>Project Management</div></Link></li>
                                    <li><Link to='/Tech'><div className='colorfont fhover-underline-animation'>Tech Consulting</div></Link></li>
                                </ul>
                            </div>
                    </div>
                </div>
            
            
            <div className="invert" style={{color:'black', backgroundColor: 'white'}}>
                        <div className="title">We develop solutions for a range of business domains</div>
                        <div>
                            <div className="stack2" >
                                <div className="stacker">
                                    <div><img src={taxi}/></div>
                                    <div className="stacker_title">Taxi Booking</div>
                                    
                                </div>

                                <div className="stacker">
                                    <div><img src={social}/></div>
                                    <div className="stacker_title">Social Networking</div>
                                    
                                </div>

                                <div className="stacker">
                                    <div><img src={health}/></div>
                                    <div className="stacker_title">Health & Fitness</div>
                                    
                                </div>

                                <div className="stacker">
                                    <div><img src={finance}/></div>
                                    <div className="stacker_title">Finances</div>
                                    
                                </div>
                            </div>
                            
                            <div className="stack2">
                                    <div className="stacker">
                                        <div><img src={enterprise}/></div>
                                        <div className="stacker_title">Enterprise</div>
                                        
                                    </div>

                                    <div className="stacker">
                                        <div><img src={ecommerce}/></div>
                                        <div className="stacker_title">E-commerce</div>
                                        
                                    </div>

                                    <div className="stacker" >
                                        <div><img src={iot}/></div>
                                        <div className="stacker_title">Iot</div>
                                        
                                    </div>

                                    <div className="stacker">
                                        <div><img src={entertainment}/></div>
                                        <div className="stacker_title">Entertainment</div>
                                        
                                    </div>
                            </div>
                        </div>
            </div>

            <div className="main">
                <div className="iOS">
                    <div className="title">How we work</div>
                    <div className="highlight_text">From ideation to publishing – we have you covered all the way</div>
                    <div className="flow_contianer">
                        <FlowCarousel>
                            <div className="flowchart">
                                <div className="flowchart_title">01.PLANNING</div>
                                <div className="flowchart_text">We analyze your vision and find out everything about your goals, product, industry, audience, and competitors. Then we translate our learnings into product specification, wireframes, and other project documents.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">02.DESIGN</div>
                                <div className="flowchart_text">Based on the app strategy we created during the research phase, we prepare the interactive prototype that responds to user interactions. We then design the user interface of your product.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">03.DEVELOPMENT</div>
                                <div className="flowchart_text">We follow agile development methodologies and master the latest technologies for iOS and Android to provide an efficient and effective collaboration.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">04. TESTING</div>
                                <div className="flowchart_text">We thoroughly test the performance of every project we take on to ensure its responsiveness, user-friendliness, and bulletproof security.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">05. LAUNCH & SUPPORT</div>
                                <div className="flowchart_text">You can count on our post-release support because we aim for long-term success. We are constantly tracking the market changes and continue improving our apps accordingly.</div>
                            </div>
                        </FlowCarousel>

                    </div>

                </div>
            </div>

            <Contactform text='Contact us'/>
            <div className="main">
                <div className="home">
                  <Testimony/>
                </div>     
            </div>
        </div>

    );
};

export default Service;