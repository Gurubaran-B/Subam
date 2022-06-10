import React from "react";
import { Link } from "react-router-dom";
import property from "../../../propertyxyz.svg"
import oracle from '../../../Oracle_logo.svg'
import sg from '../../../sg.gif';
import dana from '../../../dana.png'
import './Home.css';
import Typewriter from 'typewriter-effect';
import Testimony from "../../../Components/Testimony.js";
import Contactform from "../../../Components/Contactform.js";

function Home() {
    return(
        <div>
            <div className="main">
                <div className="home">
                    <div className="home_container">
                        <div className="home_banner">
                            <h1>Planting tech into your ideas</h1>
                            <div className="type">
                                <div><h2>We build</h2></div> 
                                <div className="colorfont"><h2><Typewriter
                                        options={{
                                        strings: ['web apps', 'mobile apps', 'iOS and Android apps','UI Design'],
                                        autoStart: true,
                                        loop: true, }}
                                    /></h2>
                                </div>
                            </div>
                            <div style={{marginTop:"-40px"}}><h2>that people love.</h2></div>
                        </div>
                    </div>

                    <div className="about container">
                        <div className="title">About us</div>
                        <div className="about_text">Subam Tech was founded in early 2019 as a mobile and web app development company. The company has successfully developed more than 30 wireframe projects.
                            Our goal is to provide our partners with service par excellence.
                            We've done it before. And we can do it again.
                        </div>
                    </div>
                </div>
            </div>

                <div className="service container" style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}}>
                    <div className="service" style={{padding: '50px 100px 60px 100px'}}>
                            <div className="title" style={{fontSize:'40px'}}>Our development services</div>
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

           
                <div className="client container" style={{marginBottom:'40px'}}>
                    <div className="title"> Our Clients</div>
                    <div style={{display:'flex', justifyContent:"space-around"}}>
                        <div className="client-logo">
                            <div className="clogo"><img src={property} /></div>
                            <div className="clogo"><img src={oracle}/></div>
                            <div className="clogo"><img src={sg}/></div>
                            <div className="clogo dana" style={{filter:'invert(50)'}}><img src={dana}/></div>
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

export default Home;




