import React from "react";
import './Development.css';
import agile from "../../../service-pm-agile.svg"
import budget from "../../../service-pm-budget.svg"
import qa from "../../../service-pm-qa.svg"
import risks from "../../../service-pm-risks.svg"
import schedule from "../../../service-pm-schedule.svg"
import scope from "../../../service-pm-scope.svg"
import teamwork from "../../../service-pm-teamwork.svg"
import transparency from "../../../service-pm-transparency.svg"
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";


function Project() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div className="development_hero">
                        <h1>Project Management</h1>
                        <div className="hero_text">Our Project Managers follow the best Agile practices delivering the projects. Such an approach helps us to adapt to changes quicker yet maintain the quality of the products we develop at its highest.</div>
                        <div className="hero_text">We deliver the most value by implementing iterative efforts and taking care of all the impediments appearing on the way.</div>
                    </div>
                </div>
            </div>

            <div style={{backgroundColor:"rgb(44, 38, 38)",color: 'white', textAlign:'justify'}}>
                <div className="technology" style={{padding: '50px 100px 60px 100px'}}>
                    <div className="title">Agile benefits</div>
                    <div className="tech_stack">
                        <div className="stack">
                            <div className="element">
                                <div className="tech_title">Agile products are built iteratively and incrementally</div>
                                <div>Instead of planning, developing, and releasing the product all at once, small valuable increments are delivered. Our sprint-based approach allows us to deliver products that match your business objectives and your users’ needs.</div>
                            </div>

                            <div className="element">
                                <div className="tech_title">Agile works great when the projects involve a lot of uncertainty</div>
                                <div>If you don’t have all your requirements well documented, it’s not a problem. We will help you to organize the Backlog to start. All you need is to provide constant feedback and prioritize the most important features. Such collaboration will help us continually improve the product together.</div>
                            </div>

                        </div>

                        <div className="stack">
                            <div className="element">
                                <div className="tech_title">Agile products cost less than traditional ones</div>
                                <div>Firstly, we are constantly receiving feedback from you and are focusing on value. Secondly, at each sprint, the team reflects on product quality and progress, making the product more efficient. This helps us eliminate unnecessary steps and save your budget.</div>
                            </div>

                            <div className="element">
                                <div className="tech_title">Agile products adapt to changes quickly</div>
                                <div>The market is susceptible to changes; your product should resonate accordingly. The benefit of the Agile approach is that no matter what changes in requirements occur throughout the project’s lifecycle, they can be easily integrated into the flow thanks to the task prioritization and iterative approach.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invert" style={{color:'black', backgroundColor: 'white'}}>
                <div className="title">Project Manager’s responsibilities</div>
                <div>
                    <div className="stack2" >
                        <div className="stacker">
                            <div><img src={scope}/></div>
                            <div className="stacker_title">Scope control</div>
                            <div className="stacker_text">We gather requirements and set priorities to meet the project’s objectives</div>
                        </div>

                        <div className="stacker">
                            <div><img src={qa}/></div>
                            <div className="stacker_title">Quality Assurance</div>
                            <div className="stacker_text">We guarantee code review and testing, so no bug can slip into production</div>
                        </div>

                        <div className="stacker">
                            <div><img src={schedule}/></div>
                            <div className="stacker_title">Schedule</div>
                            <div className="stacker_text">We provide project estimation and an accurate Time Plan adjusted to your needs</div>
                        </div>

                        <div className="stacker">
                            <div><img src={risks}/></div>
                            <div className="stacker_title">Risks management</div>
                            <div className="stacker_text">We identify and track all the possible risks to minimize their impact on the project</div>
                        </div>
                    </div>
                    
                    <div className="stack2">
                            <div className="stacker">
                                <div><img src={transparency}/></div>
                                <div className="stacker_title">Transparency</div>
                                <div className="stacker_text">We provide clear status reports and live demos, making sure everyone is on the same page</div>
                            </div>

                            <div className="stacker">
                                <div><img src={budget}/></div>
                                <div className="stacker_title">Budget control</div>
                                <div className="stacker_text">We control your project costs through proper planning, requirements adaptation, and resource allocation</div>
                            </div>

                            <div className="stacker" >
                                <div><img src={teamwork}/></div>
                                <div className="stacker_title">Teamwork</div>
                                <div className="stacker_text">We ensure productive communication and interaction between stakeholders and team members</div>
                            </div>

                            <div className="stacker">
                                <div><img src={agile}/></div>
                                <div className="stacker_title">Agile way</div>
                                <div className="stacker_text">We are flexible and proactive, constantly adapting to ever-changing market rules</div>
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

export default Project;