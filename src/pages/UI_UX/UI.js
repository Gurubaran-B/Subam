import React from 'react';
import UIUX from '../../../src/UI_UX.mp4';
import './UI.css';

function UI() {
    return (
        <div>
            <video className='video_background' autoPlay loop muted>
                <source src={UIUX} type='video/mp4' />
            </video>
        </div>
    );
};

export default UI;