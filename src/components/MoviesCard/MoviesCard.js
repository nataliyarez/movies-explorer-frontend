import './MoviesCard.css';



function MoviesCard(props) {

return (


    <li className="element">
        <img  alt={props.name} className="element__image"
             src={props.card.link}/>
             <div className="element__info-wrapper">
                 <div className="element__text-wrapper">
            <h3 className="element__text-name">{props.card.name}</h3>
                 <h4 className="element__text-duration">{props.card.duration}</h4>
                     </div>
                 <div className="element__likes-wrapper">
                <button aria-label="сердечко" className="element__like"
                        type="button"></button>
                 </div>
        </div>
    </li>


)};
export default MoviesCard;