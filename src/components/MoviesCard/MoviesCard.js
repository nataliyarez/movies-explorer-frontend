import './MoviesCard.css';
import React, {useState} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function getHours(time) {
    let hours = Math.trunc(time/60);
    let minutes = time % 60;
    return hours + 'ч ' + minutes + 'м';
}

function MoviesCard(props) {
    const currentUser = React.useContext(CurrentUserContext);

    let visible;
    let visibleCross;

    if (props.savedMovies==='true'){
        visibleCross = 'element__cross-wrapper_visible'
        visible = 'element__likes-wrapper'
    } else {
        visible = 'element__likes-wrapper_visible'
        visibleCross = 'element__cross-wrapper'
    }


    let cardLikeButtonClassName;

    if (props.myCard===undefined){
        cardLikeButtonClassName = 'element__like'
    } else {
        const ownerCards = props.myCard.filter(e => e.owner === currentUser._id);
        const isLiked = ownerCards.find(i => i.movieId === props.card.id);
        if (isLiked === undefined) {
            cardLikeButtonClassName = 'element__like'
        } else {
            cardLikeButtonClassName = 'element__like element__like_active'
        }
    }

    const handleLikeClick = () => {
        props.onCardLike(props.card);
    }

    const handleDeleteClick = () => {
        props.onCardDelete(props.card);
        console.log('карточка', props.card)
    }
   const time = getHours(props.card.duration);


return (


    <li className="element">
        <a href={props.card.trailerLink}  target="_blank" rel="noreferrer"> <img   alt={props.card.nameRU} className="element__image"
                                      src={props.card.image}/> </a>
             <div className="element__info-wrapper">
                 <div className="element__text-wrapper">
            <h3 className="element__text-name">{props.card.nameRU}</h3>
                 <h4 className="element__text-duration">{time}</h4>
                     </div>
                 <div className={`element__likes-wrapper ${visible}`}>
                <button onClick={handleLikeClick} aria-label="сердечко" className={cardLikeButtonClassName}
                        type="button"></button>
                 </div>
                 <div className={`element__cross-wrapper ${visibleCross}`}>
                     <button onClick={handleDeleteClick} aria-label="крестик" className="element__cross"
                             type="button"></button>
                 </div>
        </div>
    </li>


)};
export default MoviesCard;