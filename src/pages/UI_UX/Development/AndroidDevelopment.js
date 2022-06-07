import React from "react";
import watch from '../../../service-android-watch.svg'
import phone from '../../../service-android-phone.svg';
import tv from'../../../service-android-tv.svg';
import './Development.css';
import Contactform from "../../../Components/Contactform";
import Testimony from "../../../Components/Testimony";


function Android() {
    return(
        <div>
            <div className="main">
                <div className="Android">
                    <div className="development_hero">
                        <h1>Android Development</h1>
                        <div className="hero_text">Our mobile app developers know how to create top-notch user experiences on Android. We design applications with attention to detail, and have deep expertise in every aspect of Android app development, resulting in extraordinary digital experiences.</div>
                    </div>
                    
                    <div className="development_devices">
                        <div className="devices">
                            <img src={watch}/>
                            <div>wearOS</div>
                        </div>

                        <div className="devices">
                            <img src={phone}/>
                            <div>android OS</div>
                        </div>

                        <div className="devices">
                            <img src={tv}/>
                            <div>android TV</div>
                        </div>
                    </div>

                    <div className="technology">
                        <div className="title">Technology stack for Android platform</div>
                        <div className="highlight_text">Without limiting your functional requirements, we use tools and services that deliver the best user experience to your final product.</div>
                        <div className="tech_stack">
                            <div className="stack">
                                <div className="element">
                                    <div className="tech_title">Core</div>
                                    <div>Kotlin / Java</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">FRP and Networking</div>
                                    <div>RxJava 2 / RxAndroid / RxBinding / Retrofit / Gson / OkHttp / Coroutines / Volley / Socket API</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Image Video Processing</div>
                                    <div>Universal Image Loader / Picasso / Glide / Fresco / OpenCV / FFmpeg</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Product Quality & Analytics</div>
                                    <div>Google Analytics / Firebase / Analytics / Flurry / Mobile App Tracking / Branch / AppsFlyer / LeakCanary / CI-CD</div>
                                </div>
                            </div>

                            <div className="stack">
                                <div className="element">
                                    <div className="tech_title">Databases</div>
                                    <div>Room / SQLite / Realm / Firebase</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Video Streaming</div>
                                    <div>MediaPlayer / PlayerRed5 / Twilio / OpenTok</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Testing</div>
                                    <div>Espresso / Robolectric / JUnit / UI Automator</div>
                                </div>

                                <div className="element">
                                    <div className="tech_title">Architecture patterns and frameworks</div>
                                    <div>MVP / MVVM / MVI / VIPER / Databinding / Moxy</div>
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

export default Android;