import React from 'react'
import './MoviesError.css'

const MoviesError = ({error, cardsMovies}) => {
let visibleError;


    let notFound;
if (error === 'Ошибка: 404'){

    notFound = 'movies-error__text_not-found'
} else if (cardsMovies.length === 0){
    notFound = 'movies-error__text_not-found'

} else if (error.length !== 0) {
    visibleError = 'movies-error__text_error'
}


    return (
        <div className='movies-error'>
            <p className={`movies-error__text ${notFound}`}>Ничего не найдено</p>
            <p className={`movies-error__text ${visibleError}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или
                сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        </div>
    )
};

export default MoviesError;