import logo from '../../logo.svg'
import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">

            <div className="header_logo">
                <Link to='/'><img src={logo} className="siteLogo" /></Link>
            </div>

            <div className="header_links">
                <Link to='/About'><div className='hover-underline-animation'>About us</div></Link>
                <Link to='/Service'><div className='hover-underline-animation'>Services</div></Link>
                <Link to='/Careers'><div className='hover-underline-animation'>Career</div></Link>
                <Link to='/Contact'><div className='hover-underline-animation'>Contact Us</div></Link>
            </div>
            
        </div>
    );
}

export default Header;