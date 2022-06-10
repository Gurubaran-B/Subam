import React from "react";
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";
import './Development.css';


function About() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div>
                        <div className="title">About us</div>
                        <div className="highlight_text" style={{marginBottom:"40px"}}>If you’re looking for the development partner that “gets it”, has a strong technology stack and a few brilliant ideas up their sleeves, read on.</div>
                        <div className="hero_text">Subam is a mobile app & web development сompany. We started guiding companies into mobile and web development in 2020 and have successfully completed more than 30 wireframe projects ever since. Over the years, we have become a full-cycle development company delivering highly productive and cost-effective applications across various domains.</div>
                        
                    </div>

                </div>

            </div>

            <div style={{backgroundColor:"rgb(44, 38, 38)",color: 'white',padding:'20px'}}>
            <div className="technology" style={{padding:'0px 100px', textAlign:'justify'}}>
                <div className="title" >Our values</div>
                <div className="highlight_text" style={{marginBottom:"-40px"}}>Why hire us</div>
                <div className="tech_stack" style={{alignItems:'baseline'}}>
                    <div className="stack">
                        <div>
                            <div className="tech_title">Focus</div>
                            <div>You get a fully dedicated team assigned directly to your project, which gives you the possibility to work closely with them and successfully shape your idea into a solid, meaningful digital product.</div>
                        </div>

                        <div>
                            <div className="tech_title">Quick results</div>
                            <div>Thanks to Agile methodology your product will be released really fast. After each iteration, you’ll get another piece of your app to test it, make improvements and give some feedback.</div>
                        </div>
                    </div>

                    <div className="stack">
                        <div>
                            <div className="tech_title">Transparency</div>
                            <div>Our clients have constant access to the development process from start to finish, receiving a comprehensive report and a working build every 2 weeks. We also use daily reports, calls, email updates, and onsite visits to address all your ideas and concerns.</div>
                        </div>

                        <div>
                            <div className="tech_title">Partnership</div>
                            <div>We are a reliable partner, managing app development. Our experience is illustrated by satisfied customers and a large portfolio of successfully delivered projects. We have clients that have been working with us since the company was founded.</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div className="main">
                <div className="iOS">

                    <div>
                        <div className="title"> Our 3Q Bullets</div>
                        <div className="Q3">
                            <div className="element" style={{width:'50%'}}>
                                <div className="tech_title">Quality code</div>
                                <div>We write our code as clear, readable and flexible as possible. Every code line is reviewed by our experienced Tech Leads to ensure a top-quality application. All code is written fully by Orangesoft developers. We do not outsource.</div>
                            </div>

                            <div className="element" style={{width:'50%'}}>
                                <div className="tech_title">Quality service</div>
                                <div>Before writing the first line of an app source code, we want to be sure that we completely understand client requirements and we have made everything to improve them. While developing we want our clients to know everything about the progress and intermediate results.</div>
                            </div>

                            <div className="element" style={{width:'50%'}}>
                                <div className="tech_title">Quality applications</div>
                                <div>We want to be proud of our applications. We want them to be bug-free, stylish and convenient. To achieve this, we work together with clients to improve UX.</div>
                            </div>
                        </div>
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

export default About;


