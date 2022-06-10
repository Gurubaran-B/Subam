import React from "react";
import '../pages/UI_UX/Development/Development.css'
import Typewriter from 'typewriter-effect';

function Contactform() {
    return(
        <div className="ad" style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}}>
        <div className="bd" style={{padding:'0px 100px 40px 100px  ',width: "100%", display:'flex', alignItems:'baseline', justifyContent:"space-between"}}>

            <div>
                <div  className="title">
                    Stay in Touch, 
                                    <Typewriter
                                        options={{
                                        strings: ['Contact us',"Will we team up?","Let’s discuss your project!"],
                                        autoStart: true,
                                        loop: true, }}
                                    />
                </div>

            </div>
            <div >
                <div   class="formcontainer">
                    <form>
                        <div  className="formcontent">
                            <label >
                                <input style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}} name="name" type="text" placeholder="Full Name"/>
                            </label>

                            <label>
                                <input style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}} name="company" type="text" placeholder="Company (optional)"/>
                            </label>
                        </div>

                        <div className="formcontent">
                            <label>
                                <input style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}} name="email" type="text" placeholder="Email address"/>
                            </label>

                            <label>
                                <input style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}} name="name" type="text" placeholder="Phone number (optional)"/>
                            </label>
                        </div>

                        <div className="formcontent1">
                            <label>
                                <input style={{backgroundColor:"rgb(44, 38, 38)",color: 'white'}}name="project" type="text" placeholder="Describe your project"/>
                            </label>
                        </div>

                        <button style={{border: '1px solid white', backgroundColor:"rgb(44, 38, 38)",color: 'white', padding : '0px 10px', margin: '0px 10px'}}>Send Message</button>
                        
                    </form>
                </div>

            </div>
        </div>
        </div>
    );

};

export default Contactform;