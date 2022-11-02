import React, {useEffect} from 'react';
import {gsap} from "gsap/dist/gsap";
import {useMobxStores} from "../../store/store";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScrubAnimation = () => {
    const {nextStore} = useMobxStores();

    useEffect(()=>{
        setTimeout(()=>{
             let scrubAnimation = gsap.timeline({
                   scrollTrigger:{
                       trigger: '.animation-2',
                       // markers: true,
                       scrub: true,
                       start: "top 50%",
                       end: 'bottom 50%',
                       scroller: "#smooth-scroll",
                   }
               }).fromTo('.home-circle', {
                   y: -150
               }, {
                   y: 150,
               })

            ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

            ScrollTrigger.refresh();
        },200);
    }, [])
    return (
        <div className='home-animation-wrapper animation-2'>
            <div className='home-animation-text'>
                Scrub анимация
            </div>
            <div className='home-animation-wrap'>
                <div className='home-circle'/>
            </div>
        </div>
    );
};

export default ScrubAnimation;