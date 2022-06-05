import logo from '../../logo.svg'
import './Header.css'

function Header() {
    return (
        <div className="header">

            <div className="header_logo">
                <img src={logo} className="siteLogo" />
            </div>

            <div className="header_links">
                <div>About us</div>
                <div>Services</div>
                <div>Technologies</div>
                <div>Career</div>
                <div>Contact Us</div>
            </div>
            
        </div>
    );
}

export default Header;