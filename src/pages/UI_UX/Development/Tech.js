import React from "react";
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";
import './Development.css';

function Tech() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div className="development_hero">
                        <h1>Tech Consulting</h1>
                        <div className="hero_text">If you have an app idea but don’t know what to start with, business analysis is a good first step to take! We have business analysts who can create a business strategy for you.</div>
                        <div className="hero_text">We conduct an in-depth analysis of ongoing business processes in order to define what kind of technological decision is going to take your business to the next level.</div>
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

export default Tech;