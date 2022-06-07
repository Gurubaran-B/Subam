import React from "react";
import './Development.css';
import FlowCarousel from "../../../Components/FlowCarousel/FlowCarousel";
import bucket from "../../../service-mvp-code.svg"
import documents from "../../../service-mvp-documentation.svg"
import materials from "../../../service-mvp-materials.svg"
import property from "../../../service-mvp-property.svg"
import prototype from "../../../service-mvp-prototype.svg"
import publishing from "../../../service-mvp-publishing.svg"
import specification from "../../../service-mvp-specification.svg"
import uxui from "../../../service-mvp-uxui.svg"
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";


function Mvp() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div className="development_hero">
                        <h1>Turnkey MVP App Development</h1>
                        <div className="hero_text">Planning to develop an app from scratch? Need a pilot to test the market? Or thinking about creating a small in-house app or a prototype to impress potential investors? We offer a turnkey MVP development from scratch for startups and existing businesses.</div>
                    </div>
                    
                    <div className="flow_contianer">
                        <FlowCarousel>
                            <div className="flowchart">
                                <div className="flowchart_title">01. BUSINESS ANALYSIS</div>
                                <div className="flowchart_text">To start with, we will identify MVP goals and target audience.Then we will propose our ideas regarding functionality and technologies. Having all the information gathered, we will create a requirements specification approved by you.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">02. UI/UX DESIGN AND PROTOTYPING</div>
                                <div className="flowchart_text">Our designers will develop wireframes of the app key screens in Figma. When the design is approved we will also create a clickable prototype and prepare all the graphic materials for the development team.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">03. DEVELOPMENT</div>
                                <div className="flowchart_text">Under the guidance of the Project Manager responsible for your product, the team of developers will join the work. You will be receiving reports and intermediate builds biweekly.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">04. QUALITY ASSURANCE</div>
                                <div className="flowchart_text">Alongside the development, our QA engineers will test the builds.We've got more than 40 models of smartphones and tablets in our QA department. What’s more, we prepare test plans and checklists.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">05. PRODUCT DEMO</div>
                                <div className="flowchart_text">When the final version is ready, the Project Manager will conduct a demo presentation of the developed application.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">06. PUBLISHING PREPARATION</div>
                                <div className="flowchart_text">We will help you to create and configure accounts in both AppStore and Play Market, design and upload screenshots, icon and other graphic materials needed for the publishing as well as provide basic ASO consulting.</div>
                            </div>

                            <div className="flowchart">
                                <div className="flowchart_title">07. APP PUBLISHING</div>
                                <div className="flowchart_text">Everything is set! Accounts are configured, builds are uploaded and reviewed. Congrats! But we are not a goodbye. We will be in touch ever after and ready to answer your questions.</div>
                            </div>
                        </FlowCarousel>

                    </div>
                </div>
            </div>

        

                    <div className="invert">
                        <div className="title">MVP Assets</div>
                        <div className="highlight_text">All assets created by our team belong to you and only you.</div>
                        <div>
                            <div className="stack2" >
                                <div className="stacker">
                                    <div><img src={bucket}/></div>
                                    <div className="stacker_title">Source code</div>
                                    <div className="stacker_text">We will do a Bitbucket repository transfer with the source code to your account.</div>
                                </div>

                                <div className="stacker">
                                    <div><img src={property}/></div>
                                    <div className="stacker_title">Intellectual property</div>
                                    <div className="stacker_text">All intellectual property created in the process of MVP development belongs to the customer</div>
                                </div>

                                <div className="stacker">
                                    <div><img src={uxui}/></div>
                                    <div className="stacker_title">UX/UI Design</div>
                                    <div className="stacker_text">User-centred, clean, easy to use and intuitive user interface designs in Figma.</div>
                                </div>

                                <div className="stacker">
                                    <div><img src={materials}/></div>
                                    <div className="stacker_title">Graphics materials</div>
                                    <div className="stacker_text">App icon and screens compliant with App Store and Google Play Identity Guidelines</div>
                                </div>
                            </div>
                            
                            <div className="stack2">
                                    <div className="stacker">
                                        <div><img src={documents}/></div>
                                        <div className="stacker_title">Technical documentation</div>
                                        <div className="stacker_text">The document that describes app architecture, modules and components of your app</div>
                                    </div>

                                    <div className="stacker">
                                        <div><img src={prototype}/></div>
                                        <div className="stacker_title">Clickable prototype</div>
                                        <div className="stacker_text">Figma prototype with configured screens links and animations.</div>
                                    </div>

                                    <div className="stacker" >
                                        <div><img src={publishing}/></div>
                                        <div className="stacker_title">Builds for publishing</div>
                                        <div className="stacker_text">Ready-to-be-published in App Store and Google Play app builds.</div>
                                    </div>

                                    <div className="stacker">
                                        <div><img src={specification}/></div>
                                        <div className="stacker_title">Requirements specification</div>
                                        <div className="stacker_text">The source of all requirements and functionality of the app.</div>
                                    </div>
                            </div>
                        </div>
                    </div>

            <div className="main" >     
                <div className="iOS">
                    <div className="technology">
                        <div className="title">Technologies</div>
                        <div className="highlight_text">We will pick the right technology stack based on the specification of your project</div>
                        <div className="tech_stack">
                            <div className="stack">
                                <div className="element">
                                    <div className="tech_title">iOS</div>
                                    <div>Moya / Realm / RxSwift / SnapKit / IBAnimatable / Kingfisher / Promises</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Web</div>
                                    <div>React / Redux / Express / Mongoose / Material - UI</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Services</div>
                                    <div>Firebase / Picasso / Twilio / Stripe / AWS / Google Cloud</div>
                                </div>

                            </div>

                            <div className="stack">
                                <div className="element">
                                    <div className="tech_title">Android</div>
                                    <div>Retrofit / RX / Moxy / Moshi / Glide / Fresco / Room</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Backend</div>
                                    <div>Doctrine / Symfony Components / Laminas Components / PHPUnit / PHP Enqueue / Flysystem</div>
                                </div>
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

export default Mvp;