import './MoviesMore.css';
import React from "react";


function MoviesMore({onButtonClick, cardsMovies, numberOfRender}) {

    let hiddenButton;
    if (cardsMovies.length === 0){
        hiddenButton = 'movies-more__button-wrapper'
    } else if (cardsMovies.length > numberOfRender){
        hiddenButton = 'movies-more__button-wrapper movies-more__button-wrapper_visible'
    } else if (cardsMovies.length <= numberOfRender) {
        hiddenButton = 'movies-more__button-wrapper'
    }

    return (



            <div>

                <div className={hiddenButton}>
                    <button onClick={onButtonClick} aria-label="еще" className="movies-more__button"
                            type="button">Ещё</button>
                </div>
            </div>



    )};
export default MoviesMore;