import React from 'react'
import './Preloader.css'

const Preloader = ({preloaderVisible}) => {

    let hiddenPreloader;
    if (preloaderVisible === true){
        hiddenPreloader = 'preloader preloader_visible'
    } else {
        hiddenPreloader = 'preloader'
    }
    return (
        <div className='preloader'>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
