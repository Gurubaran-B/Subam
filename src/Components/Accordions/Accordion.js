import React, {useState} from 'react';
import Angle from '../../Icons/angle.svg';
import './Accordion.css';

function Accordion() {

    const [hide, setHide] = useState(false);

    return (
        <div className='accordion'>
            <div className='accordion_title'>
                <button onClick={() => setHide(!hide)}>
                    <div>A Title</div>
                    <div className='icon'><img src={Angle} className={hide ? '' : 'hidden'}/></div>
                </button>
            </div>

            {hide && <div className='accordion_text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </div>}
        </div>
    );

};

export default Accordion;