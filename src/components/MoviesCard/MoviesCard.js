import './MoviesCard.css';



function MoviesCard(props) {

    let visible;
    let visibleCross;
    if (props.savedMovies==='true'){
        visibleCross = 'element__cross-wrapper_visible'
        visible = 'element__likes-wrapper'
    } else {
        visible = 'element__likes-wrapper_visible'
        visibleCross = 'element__cross-wrapper'
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
                <button aria-label="сердечко" className="element__like"
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