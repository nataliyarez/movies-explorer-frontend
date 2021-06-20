import './MoviesCard.css';

import React, {useState} from "react";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = useState(false);
    let visible;
    let visibleCross;
    let visibleLiked;
    if (props.savedMovies==='true'){
        visibleCross = 'element__cross-wrapper_visible'
        visible = 'element__likes-wrapper'
    } else {
        visible = 'element__likes-wrapper_visible'
        visibleCross = 'element__cross-wrapper'
    }

if (isLiked===true) {
    visibleLiked = 'element__like_active'
} else {
    visibleLiked = 'element__like'
}


    const handleLikeClick = () => {
    if (isLiked===false){
        setIsLiked(true)
    } else {
        setIsLiked(false)
    }

    }

return (


    <li className="element">
        <img  alt={props.name} className="element__image"
             src={props.card.link}/>
             <div className="element__info-wrapper">
                 <div className="element__text-wrapper">
            <h3 className="element__text-name">{props.card.name}</h3>
                 <h4 className="element__text-duration">{props.card.duration}</h4>
                     </div>
                 <div className={`element__likes-wrapper ${visible}`}>
                <button onClick={handleLikeClick} aria-label="сердечко" className={`element__like ${visibleLiked}`}
                        type="button"></button>
                 </div>
                 <div className={`element__cross-wrapper ${visibleCross}`}>
                     <button aria-label="крестик" className="element__cross"
                             type="button"></button>
                 </div>
        </div>
    </li>


)};
export default MoviesCard;