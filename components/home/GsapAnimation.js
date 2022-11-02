import React, from 'react';
import {observer} from "mobx-react";
import TriggerAnimation from "./TriggerAnimation";
import ScrubAnimation from "./ScrubAnimation";
import LottieAnimation from "./LottieAnimation";
import HoverAnimation from "./HoverAnimation";

const GsapAnimation = () => {

    return (
        <div className='home-animation'>
            <TriggerAnimation/>
            <ScrubAnimation/>
            <LottieAnimation/>
            <HoverAnimation/>
        </div>
    );
};

export default observer(GsapAnimation);