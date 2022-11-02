import React, {useEffect, useRef, useState} from 'react';
import lottie from "lottie-web";
import anim1 from '../animation/anim1.json';
import anim2 from '../animation/anim2.json';
import anim3 from '../animation/anim3.json';

const HoverAnimation = () => {

    const card1 =  useRef();
    const card2 =  useRef();
    const card3 =  useRef();

    const [hoverAnimation1, setHoverAnimation1] = useState(false);
    const [hoverAnimation2, setHoverAnimation2] = useState(false);
    const [hoverAnimation3, setHoverAnimation3] = useState(false);

    const [onHoverAnimation1, setOnHoverAnimation1] = useState(false);
    const [onHoverAnimation2, setOnHoverAnimation2] = useState(false);
    const [onHoverAnimation3, setOnHoverAnimation3] = useState(false);

    useEffect(()=>{
        let animation1 = lottie.loadAnimation({
            container: card1.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: anim1,
        })
        let animation2 = lottie.loadAnimation({
            container: card2.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: anim2,
        });

        let animation3 = lottie.loadAnimation({
            container: card3.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: anim3,
        });

        setHoverAnimation1(animation1)

        setHoverAnimation2(animation2)

        setHoverAnimation3(animation3)

        return()=>{
            animation1.destroy();
            animation2.destroy();
            animation3.destroy();
        }
    }, []);
    const controlAnimation = (anim, anim2) =>{
        anim.addEventListener('loopComplete', ()=>{
            anim.goToAndStop(0, true);
        })
        anim2.addEventListener('loopComplete', ()=>{
            anim2.goToAndStop(0, true);
        })
    }
    const controlCompleteAnimation = (anim)=>{
        anim.play();
        anim.addEventListener('loopComplete', ()=>{
            anim.goToAndPlay(0, true);
        })
    }
    return (
         <>
             <div className="home-animation-text">
                 запуск lottie анимации по ховеру
             </div>
             <br/>
             <br/>
             <div className='home-animation-wrapper home-animation-hover home-animation-4'>
                 <div className='home-animation-wrap' ref={card1}
                      onMouseEnter={()=> {
                          setOnHoverAnimation1(true);
                          controlAnimation(hoverAnimation2,  hoverAnimation3);
                          controlCompleteAnimation(hoverAnimation1);

                          setOnHoverAnimation2(false);
                          setOnHoverAnimation3(false);
                      }}
                 >

                 </div>
                 <div className='home-animation-wrap' ref={card2}
                      onMouseEnter={()=> {
                          setOnHoverAnimation2(true);
                          controlAnimation(hoverAnimation1,  hoverAnimation3);
                          controlCompleteAnimation(hoverAnimation2);

                          setOnHoverAnimation1(false);
                          setOnHoverAnimation3(false);
                      }}
                 >

                 </div>
                 <div className='home-animation-wrap' ref={card3}
                      onMouseEnter={()=> {
                          setOnHoverAnimation3(true);
                          controlAnimation(hoverAnimation1,  hoverAnimation2);
                          controlCompleteAnimation(hoverAnimation3);

                          setOnHoverAnimation1(false);
                          setOnHoverAnimation2(false);
                      }}
                 >

                 </div>
             </div>

         </>
    );
};

export default HoverAnimation;