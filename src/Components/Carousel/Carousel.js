import React, {useState} from 'react';
import './Carousel.css';
import right from '../../arrow_back_ios.svg';
import left from '../../arrow_forward_ios.svg';

function Carousel({children}) {

    const [current,setCurrent] = useState(0);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const minSpan = 50; 

    function onTouchStart(e) {
        setEnd(null);
        setStart(e.targetTouches[0].clientX);
    };

    function onTouchMove(e) {
        setEnd(e.targetTouches[0].clientX)
    };

    function onTouchEnd() {

        if (!start || !end) return;

        const distance = (start - end);
        const leftSwipe = distance > minSpan;
        const rightSwipe = distance < (-minSpan);

        leftSwipe && nextSlide();
        rightSwipe && prevSlide();
     
    };
    

    function prevSlide() {
        current <= 0 ? setCurrent(children.length - 1) : setCurrent(current - 1);
    };

    function nextSlide() {
        current == (children.length - 1) ? setCurrent(0) : setCurrent(current + 1);
    };

    function goTo(x) {
        setCurrent(x);
    };

    return (
        <div className='section'>
            <div className='ccontainer'>

            <div className='dots'><button onClick={() => prevSlide()}><img src={right}/></button></div>

                <div className='cslider'>
                {children.map((child, i) =>
                    (<div className={'cslide'} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} key={i} style={{transform: `translateX(${(i - current) * 100}%)`}}>
                        {child}
                    </div>))
                }
                </div>

                <div className='dots'><button onClick={() => nextSlide()}><img src={left}/></button></div>

            </div>

            <div className='dots'>
                {children.map((_, i) => 
                    (<div className={current == i ? 'dotActive' : 'dot'} key={i} onClick={() => goTo(i)}></div>))
                }
            </div>

        </div>
    );

};

export default Carousel;