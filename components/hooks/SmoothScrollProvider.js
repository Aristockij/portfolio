import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { createContext, useEffect, useRef, useState } from "react";
import {useMobxStores} from "../../store/store";

gsap.registerPlugin(ScrollTrigger);

export const SmoothScrollContext = createContext({
    scroll: null
});

export const SmoothScrollProvider = ({ children }) => {
    const [scroll, setScroll] = useState(null);

    const scrollWrapper = useRef();
    const {nextStore} = useMobxStores();

    useEffect(() => {
        let mobLerp = 0.08;
        if(window.innerWidth < 800){
            mobLerp=0.1;
        }

        if (!scroll) {
            (async () => {
                try {
                    const LocomotiveScroll = (await import("locomotive-scroll")).default;

                    const locoScroll = new LocomotiveScroll({
                        el: scrollWrapper.current,
                        smooth: true,
                        //делай lerp меньше для пущщей плавности ;) 0.08 - 0.07 оптимально
                        lerp: mobLerp,
                        smoothMobile: true,
                        smartphone: {
                            smooth: true,
                        },
                        scrollFromAnywhere: true,
                        class: "is-reveal",
                    });

                    nextStore.setLocoScroll(locoScroll);
                    setScroll(locoScroll);

                    locoScroll.on("scroll", ScrollTrigger.update);

                    gsap.to('.c-scrollbar_thumb',{
                        backgroundColor: '#FD50A7'
                    })
                    ScrollTrigger.scrollerProxy(scrollWrapper.current, {
                        scrollTop(value) {
                            return arguments.length
                                ? locoScroll.scrollTo(value, 0, 0)
                                : locoScroll.scroll.instance.scroll.y;

                        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
                        getBoundingClientRect() {
                            return {
                                top: 0,
                                left: 0,
                                width: window.innerWidth,
                                height: window.innerHeight
                            };
                        },

                        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                        pinType: scrollWrapper.current.style.transform
                            ? "transform"
                            : "fixed"
                    });
                    ScrollTrigger.addEventListener("refresh", () => nextStore.locoScroll.update());

                    ScrollTrigger.refresh();
                } catch (error) {
                    throw Error(`[SmoothScrollProvider]: ${error}`);
                }
            })();
        }

        return () => {
            scroll && scroll.destroy();
        };
    }, [scroll]);


    useEffect(()=>{
        if(nextStore.locoScroll){
            const resize = new ResizeObserver(()=>{
                if(nextStore.locoScroll){
                    setTimeout(()=>{
                        nextStore.locoScroll.update();
                    },10)
                }
            });

            resize.observe(document.querySelector("[data-scroll-container]"))
        }
    }, [nextStore.locoScroll]);

    return (
        <SmoothScrollContext.Provider value={{ scroll }}>
            <div id="smooth-scroll" data-scroll-container ref={scrollWrapper}>
                {children}
            </div>
        </SmoothScrollContext.Provider>
    );
};
