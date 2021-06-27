import './MoviesCardList.css';
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';



function MoviesCardList({savedMovies, numberOfRender, cardsMovies, onCardLike, myCard}) {


    return (
        <div>
            <section className="movies-card-list">
                <ul className="elements">
                    {cardsMovies.slice(0, numberOfRender).map((card) => {
                        return (<MoviesCard myCard={myCard} onCardLike={onCardLike} savedMovies={savedMovies} card={card} key={card.id}/>)
                    })}
                </ul>
            </section>
        </div>
    )
};


export default MoviesCardList;



