import './MoviesCardList.css';
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';



function MoviesCardList({savedMovies, numberOfRender, cardsMovies, onCardLike, myCard, onCardDelete}) {


    return (
        <div>
            <section className="movies-card-list">
                <ul className="elements">
                    {cardsMovies.slice(0, numberOfRender).map((card) => {
                        return (<MoviesCard  myCard={myCard} onCardDelete={onCardDelete} onCardLike={onCardLike} savedMovies={savedMovies} card={card} key={card._id}/>)
                    })}
                </ul>
            </section>
        </div>
    )
};


export default MoviesCardList;



