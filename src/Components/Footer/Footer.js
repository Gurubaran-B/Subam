import logo from '../../Group 1.svg'
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
                                <li>Android App Development</li>
                                <li>Web App Development</li>
                                <li>iOS App Development</li>
                                <li>UI/UX Design</li>
                                <li>Quality Assurance</li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer_sub'>
                        <div className='footer_sub_title'>Company</div>
                        <div className='footer_sub_links'>
                            <ul>
                                <li>About</li>
                                <li>Technology</li>
                                <li>Career</li>
                                <li>Values</li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer_sub'>
                        <div className='footer_sub_title'>Contact us</div>
                        <div className='footer_sub_links'>
                            <ul>
                                <li>Android App Development</li>
                                <li>Web App Development</li>
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