import React, {useEffect, useRef} from 'react';
import {useMobxStores} from "../../store/store";
import lottie from "lottie-web";
import animationPath from "../animation/sphere.json";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LottieAnimation = () => {
    const {nextStore} = useMobxStores();
    const ref = useRef();

    useEffect(()=>{
        let startFrame = {frame: 0},
            animation = lottie.loadAnimation({
                container: ref.current,
                renderer: 'svg',
                loop: true,
                autoplay: false,
                animationData: animationPath,
            });
            setTimeout(()=>{
                let lottieTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.animation-3',
                        start: "top 50% ",
                        end: 'bottom 50% ',
                        scrub: 1,
                        // markers: true,
                        scroller: "#smooth-scroll",
                    }
                })
                lottieTl.to(startFrame, {
                    frame: animation.totalFrames - 1,
                    duration: 4,
                    ease: "none",
                    onUpdate: () => animation.goToAndStop(startFrame.frame, true),
                })
            }, 100)
        return ()=>{
            animation.destroy();
        }
    }, [])
    return (
        <div className='home-animation-wrapper animation-3'>
            <div className='home-animation-text'>
                Lottie анимация, scrub эффект
            </div>
            <div className='home-animation-wrap'>
                <div ref={ref}/>
            </div>
        </div>
    );
};

export default LottieAnimation;