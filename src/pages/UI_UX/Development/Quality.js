import React from "react";
import './Development.css';


function Quality() {
    return(
        <div className="Quality">
            <div className="development_hero">
                <h1>Quality Assurance</h1>
                <div className="hero_text">Our expert quality assurance team tests and iterates on functionalities to make sure the entire product works flawlessly and users get exactly what they love.</div>
                <div className="hero_text">We never let any piece of our code be considered as done and sent to live before being manually tested by our QA engineers. We've got more than 40 models of smartphones and tablets in our QA department.</div>
            </div>
            
            <div className="technology">
                <div className="title">Testing tools we use</div>
                <div className="highlight_text">We use only reliable software tools to guarantee our clients the highest quality of testing</div>
                <div className="tech_stack">
                    <div className="quality_stack">
                        <div>
                            <div>Jira / Testrail / Charles proxy / Postman / iTools Pro / Browser’s developer tools / Xcode / Android Studio / Genymotion</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Contactform /> */}
        </div>
    );
};

export default Quality;