import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, { useState} from "react";


function SavedMovies({  signMain, signProfile, signMovies, signSavedMovies}) {
    const moviesPage = true;

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

    const handleMenuClick = () => {
        setIsProfilePopupOpen(true);
    }


    const closePopup = () => {
        setIsProfilePopupOpen(false);

    }

    return (
        <>

            <div className="page">
                <main className="content">
                    <Header moviesPage={moviesPage} onMenu={handleMenuClick} signMain={signMain} signMovies={signMovies} signSavedMovies={signSavedMovies} signProfile={signProfile} />
                    <SearchForm/>
                    <MoviesCardList savedMovies='true'/>
                    <Footer/>
                </main>
            </div>
            <Navigation signProfile={signProfile} signMain={signMain} signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>
        </>

    );


}

export default SavedMovies;