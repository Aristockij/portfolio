import React from 'react';

const Preloader = (props)=>{

    return (
        <div className={props.active ? 'preloader active':'preloader'}>
            <div className={props.active ? 'preloader-wrapper active':'preloader-wrapper'}>
                {/*<div className={props.active ? 'preloader-text active':'preloader-text'}>*/}
                {/*    <span>LOADING</span>*/}
                {/*    <span className="preloader-dots"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Preloader;