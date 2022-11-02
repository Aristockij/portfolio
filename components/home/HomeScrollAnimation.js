import React from 'react';
import GsapAnimation from "./GsapAnimation";

const HomeScrollAnimation = () => {
    return (
        <section>
            <h1 className='home-title'data-scroll data-scroll-speed='1' data-scroll-repeat>
                Привет
            </h1>
            <div className='home-subtitle' data-scroll data-scroll-speed='3' data-scroll-repeat>
                Несколько примеров управления анимацией по скроллу
            </div>
            <GsapAnimation/>
        </section>
    );
};

export default HomeScrollAnimation;