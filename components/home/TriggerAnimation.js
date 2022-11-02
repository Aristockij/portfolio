import React, {useEffect} from 'react';
import {gsap} from "gsap/dist/gsap";
import {useMobxStores} from "../../store/store";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TriggerAnimation = () => {
    const {nextStore} = useMobxStores();

    useEffect(()=>{
        setTimeout(()=>{
            let triggerAnimation = gsap.timeline({
                scrollTrigger:{
                    trigger: '.animation-1',
                    // markers: true,
                    start: "50% 50%",
                    end: '50% 50%',
                    scroller: "#smooth-scroll",
                    toggleActions: 'play none resume reverse'
                }
            }).to('.home-block', {
                top: '50%',
                left: '50%',
                translateY: "-50%",
                translateX: '-50%',
                transition:.3,
            }).to('.home-block',{
                rotate: 360,
            })
            ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

            ScrollTrigger.refresh();
        },100);
    }, [])
    return (
        <div className='home-animation-wrapper animation-1'>
            <div className='home-animation-text'>
                Старт gsap анимации по триггеру
            </div>
            <div className='home-animation-wrap'>
                <div className='home-block-1 home-block'/>
                <div className='home-block-2 home-block'/>
                <div className='home-block-3 home-block'/>
            </div>
        </div>
    );
};

export default TriggerAnimation;