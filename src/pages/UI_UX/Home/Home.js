import React from "react";
import './Home.css';

function Home() {
    return(
        <div className="home">
            <div className="home_container">
                <div className="home_banner">
                    <h1>Breathing tech into your ideas</h1>
                    <h2>We build <span>web apps</span> that people love</h2>
                </div>
            </div>

            <div className="about container">
                <div className="title">About us</div>
                <div className="about_text">Subam Tech was founded in early 2019 as a mobile and web app development company. The company has successfully developed more than 30 projects.
                    Our goal is to provide our partners with service par excellence.
                    We've done it before. And we can do it again.
                </div>
            </div>

            <div className="service container">
                <div className="title">Our development services</div>
                <div className="service_list">
                    <ul>
                        <li>iOS Development</li>
                        <li>Android Development</li>
                        <li>Web App Development</li>
                        <li>UI/UX Design</li>
                        <li>Quality Assurance</li>
                        <li>MVP App Development for Startups</li>
                        <li>Project Management</li>
                        <li>Tech Consulting</li>
                    </ul>
                </div>
            </div>

            <div className="client container">
                <div className="title"> Our Clients</div>
                <div></div>
            </div>

            <div className="testimony contianer">
                <div className="title">Testimony</div>
                <div></div>
            </div>
        </div>
        

    );

};

export default Home;