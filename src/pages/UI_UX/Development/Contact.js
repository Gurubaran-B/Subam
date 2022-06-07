import React from "react";
import './Development.css';

function Contact() {
    return(
        <div>
            <div className="main">
                <div className="iOS">
                    <div >
                        <div className="title" style={{padding : '0px 10px'}}>Let's talk about your project!</div>
                        <div className="highlight_text" style={{padding : '0px 10px', marginTop: '-20px', marginBottom: '15px'}}>hello@subam.co | +91-959-197-7331</div>
                        <div class="formcontainer">
                            <form>
                                <div className="formcontent">
                                    <label>
                                        <input name="name" type="text" placeholder="Full Name"/>
                                    </label>

                                    <label>
                                        <input name="company" type="text" placeholder="Company (optional)"/>
                                    </label>
                                </div>

                                <div className="formcontent">
                                    <label>
                                        <input name="email" type="text" placeholder="Email address"/>
                                    </label>

                                    <label>
                                        <input name="name" type="text" placeholder="Phone number (optional)"/>
                                    </label>
                                </div>

                                <div className="formcontent1">
                                    <label>
                                        <input name="project" type="text" placeholder="Describe your project"/>
                                    </label>
                                </div>

                                <button style={{padding : '0px 10px', margin: '0px 10px'}}>Send Message</button>
                                
                            </form>
                        </div>

                        <div>
                            <div className="title">General contacts</div>
                            <div className="genContact">
                                <div className="genElement">
                                    <div className="tit">Enquiries</div>
                                    <ul>
                                        <li>hello@subam.co</li>
                                    </ul>
                                </div>

                                <div className="genElement">
                                    <div className="tit">Careers</div>
                                    <ul>
                                        <li>career@subam.co</li>
                                    </ul>
                                </div>

                                <div className="genElement">
                                    <div className="tit">Address</div>
                                    <ul>
                                        <li>No: 205 Malibu Sparkling Wings</li>
                                        <li>Doddanekundi Main road</li>
                                        <li>KR Puram, Hobli</li>
                                        <li>Bangalore KA 560037 IN</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
                {/* <Contactform /> */}
            </div>


        </div>
    );
};

export default Contact;