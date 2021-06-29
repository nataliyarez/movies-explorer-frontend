import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, { useState, useEffect} from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {apiMain} from "../../utils/MainApi";
import filter from "../Filter/Filter";


function SavedMovies({  signMain, signProfile, signMovies, signSavedMovies}) {
    const currentUser = React.useContext(CurrentUserContext);
    const moviesPage = true;

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
    const [cardsMoviesSave, setCardsMoviesSave] = useState([]);


    const handleMenuClick = () => {
        setIsProfilePopupOpen(true);
    }


    const closePopup = () => {
        setIsProfilePopupOpen(false);

    }


    useEffect(() => {
        apiMain.getInitialCards()
            .then((cards) => {
                setCardsMoviesSave(cards);
            })
            .catch((err) => {
                console.log(err);

            })

    }, [])

    function handleCardDelete(card) {
        const ownerCards = cardsMoviesSave.filter(e => e.owner === currentUser._id);
        const isLiked = ownerCards.find(i => i.movieId === card.movieId);
        apiMain.deleteCard(isLiked._id)
            .then(() => {
                function deleteCard(value) {
                    return value._id !== isLiked._id;
                }
                setCardsMoviesSave(cardsMoviesSave.filter(deleteCard));
            })
            .catch(err => console.log(err));
    }


    function searchCards (request, chooseShortMovies) {
        setCardsMoviesSave(filter(request, chooseShortMovies, cardsMoviesSave));
    }

    return (
        <>

            <div className="page">
                <main className="content">
                    <Header moviesPage={moviesPage} onMenu={handleMenuClick} signMain={signMain} signMovies={signMovies} signSavedMovies={signSavedMovies} signProfile={signProfile} />
                    <SearchForm searchCards={searchCards}/>
                    {cardsMoviesSave !== undefined && <MoviesCardList onCardDelete={handleCardDelete} cardsMovies={cardsMoviesSave} savedMovies='true'/>}
                    <Footer/>
                </main>
            </div>
            <Navigation signProfile={signProfile} signMain={signMain} signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>
        </>

    );


}

export default SavedMovies;