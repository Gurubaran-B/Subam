import React from "react";
import Carousel from "./Carousel/Carousel";
import testi from '../quotation.svg'

function Testimony() {
    return(
        <div style={{marginBottom:'40px'}}>
            <div className="testimony contianer">
                <div className="title">Testimony</div>
                <div>
                    <Carousel>
                        <div style={{width: '100%', height:'300px',position: 'relative', borderRadius:"15px",boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}>
                            <div style={{position:'absolute', top: '0px', left:'-40%',display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}><img src={testi} style={{width: '20%', opacity: '0.1'}}/></div>
                            <div style={{padding:'10px',position:'absolute', top: '40%', display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>"The guys from Subam deliver quality results through a collaborative process, taking an active role in feedback cycles. They are fast, flexible, communicative, and always striving to do everything necessary to help the customer."</div>
                            <div style={{position:'absolute', bottom: '10%',right:'5%'}}>Barath, <i>Assitant Manager</i>, <b>Shanthi Gears</b></div>
                        </div>

                        <div style={{width: '100%', height:'300px', position: 'relative', borderRadius:"15px",boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}>
                            <div style={{position:'absolute', top: '0px', left:'-40%',display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}><img src={testi} style={{width: '20%', opacity: '0.1'}}/></div>
                            <div style={{padding:'10px',position:'absolute', top: '40%', display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} >"Subam delivered a compelling web app with superior operability and continues to produce deliverables that satisfy expectations. The team manages deadlines adeptly and provides tools that encourage collaboration and transparency."</div>
                            <div style={{position:'absolute', bottom: '10%',right:'5%'}}>Simone Di Cola, <i>Co-Founder</i>, <b>property.xyz</b></div>
                        </div>

                        <div style={{width: '100%', height:'300px',position: 'relative', borderRadius:"15px",boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"}}>
                            <div style={{position:'absolute', top: '0px', left:'-40%',display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}><img src={testi} style={{width: '20%', opacity: '0.1'}}/></div>
                            <div style={{padding:'10px',position:'absolute', top: '40%', display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>"They were very flexible and accommodating to our sometimes rather unusual needs and circumstances. Unlike many other vendors I have experience with, they are very trusting and prepared to take risks for the sake of building a solid business relationship."</div>
                            <div style={{position:'absolute', bottom: '10%',right:'5%'}}>Balamurugan, <i>Team-lead</i>, <b>Oracle</b></div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    );

};

export default Testimony;