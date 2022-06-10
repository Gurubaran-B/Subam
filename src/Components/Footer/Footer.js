import logo from '../../Group 1.svg'
import {Link } from "react-router-dom";
import './Footer.css'

function Footer() {
    return(
        <div className='footer'>
            <div className='footer_contact'>
                <div className='footer_logo'>
                    <img src={logo}/>
                </div>

                <div className='footer_links'>
                    <div className='footer_sub'>
                        <div className='footer_sub_title'>Services</div>
                        <div className='footer_sub_links'>
                            <ul>
                                <li><Link to='/Android'><div className='fhover-underline-animation'>Android App Development</div></Link></li>
                                <li><Link to='/WebApp'><div className='fhover-underline-animation'>Web App Development</div></Link></li>
                                <li><Link to='/iOS'><div className='fhover-underline-animation'>iOS App Development</div></Link></li>
                                <li><Link to='/Quality'><div className='fhover-underline-animation'>Quality Assurance</div></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer_sub'>
                        <div className='footer_sub_title'>Company</div>
                        <div className='footer_sub_links'>
                            <ul>
                            <Link to='/About'><li><div className='fhover-underline-animation'>About</div></li></Link>
                            <Link to='/Careers'><li><div className='fhover-underline-animation'>Career</div></li></Link>
                            <Link to='/Contact'><li><div className='fhover-underline-animation'>Contact</div></li></Link>
                            </ul>
                        </div>
                    </div>

                    <div className='footer_sub'>
                        <div className='footer_sub_title'>Contact us</div>
                        <div className='footer_sub_links'>
                            <ul>
                                <li>hello@subam.tech</li>
                                <li>+91-959-197-7331</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyrights'>© Copyright 2020 SUBAM TECH SOLUTIONS PRIVATE LIMITED. All rights reserved. Privacy Policy</div>
        </div>
    );
};

export default Footer;