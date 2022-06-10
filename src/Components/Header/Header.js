import logo from '../../logo.svg'
import menu from '../../men.svg'
import close from '../../cls.svg'
import './Header.css'
import { Link } from "react-router-dom";
import {useState} from 'react';


function Header() {

    const [open, setOpen] = useState(false);
    return (
        <div>
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

                <div onClick={() => setOpen(!open)}><img className='nav' src={!open ? menu : close}/></div>

            </div>

            {open && <div className='mobilenav'>
                <div className='hover-underline-animation'><Link to='/About'><div onClick={() => setOpen(!open)} className='colorfont'>About us</div></Link></div>
                <div className='hover-underline-animation'><Link to='/Service'><div onClick={() => setOpen(!open)} className='colorfont'>Services</div></Link></div>
                <div className='hover-underline-animation'><Link to='/Careers'><div onClick={() => setOpen(!open)} className='colorfont'>Career</div></Link></div>
                <div className='hover-underline-animation'><Link to='/Contact'><div onClick={() => setOpen(!open)} className='colorfont'>Contact Us</div></Link></div>
            </div>}
        </div>
    );
}

export default Header;