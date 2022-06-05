import React from "react";
import watch from '../../../service-ios-watch.svg'
import phone from '../../../service-ios-phone.svg';
import tv from'../../../service-ios-tv.svg';
import './Development.css';


function Ios() {
    return(
        <div className="iOS">
            <div className="development_hero">
                <h1>iOS Development</h1>
                <div className="hero_text">We started building iOS apps in 2011 and we haven’t stopped since.</div>
                <div className="hero_text">We leverage the strength of the iOS platform to help our clients solve their most complicated business challenges. During these years, our dedicated iOS developers have delivered apps to over 100 customers.</div>
            </div>
            
            <div className="development_devices">
                <div className="devices">
                    <img src={watch}/>
                    <div>watchOS</div>
                </div>

                <div className="devices">
                    <img src={phone}/>
                    <div>iOS</div>
                </div>

                <div className="devices" style={{padding: '30px 0px 0px 0px' }}>
                    <img src={tv}/>
                    <div style={{marginTop: '-18px'}}>tvOS </div>
                </div>
            </div>

            <div className="technology">
                <div className="title">Technology stack for iOS platform</div>
                <div className="highlight_text">Without limiting your functional requirements, we use tools and services that deliver the best user experience to your final product.</div>
                <div className="tech_stack">
                    <div className="stack">
                        <div className="element">
                            <div className="tech_title">Core</div>
                            <div>Swift / Objective C / SwiftUI / Auto Layout</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Video Streaming</div>
                            <div>MediaPlayer / JW / PlayerRed5 / Twilio / OpenTok</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Image Video Processing</div>
                            <div>Core Image / GPUImage / Core Graphics / OpenCV / ARKit MetalPetal / FFmpeg</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Testing</div>
                            <div>XCTest / UI Test / OHHTTPStubs</div>
                        </div>
                    </div>

                    <div className="stack">
                        <div className="element">
                            <div className="tech_title">Databases</div>
                            <div>CoreData / Realm / Firebase</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">FRP and Networking</div>
                            <div>RxSwift / Alamofire / Moya / Socket.io / Combine / Promises</div>
                        </div>

                        <div className="element">
                            <div className="tech_title">Product Quality & Analytics</div>
                            <div>Google Analytics / Firebase / Analytics / Flurry / Mobile App Tracking / Branch / AppsFlyer / Adjust TestFlight / CI-CD</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Contactform /> */}
        </div>
    );
};

export default Ios;