import './MoviesCardList.css';
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';



function MoviesCardList({savedMovies, numberOfRender, cardsMovies, yes}) {

    let hiddenCardList;
    if (yes === true){
        hiddenCardList = 'movies-card-list movies-card-list_visible'
    } else {
        hiddenCardList = 'movies-card-list'
    }



    return (
        <div>
            <section className="movies-card-list">
                <ul className="elements">
                    {cardsMovies.slice(0, numberOfRender).map((card) => {
                        return (<MoviesCard savedMovies={savedMovies} card={card} key={card.id}/>)
                    })}
                </ul>
            </section>
        </div>
    )
};


export default MoviesCardList;



