import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, { useState} from "react";


function Movies({  signMain, signProfile, signMovies, signSavedMovies}) {
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
                    <Header  signProfile={signProfile} onMenu={handleMenuClick} signMain={signMain}  moviesPage={moviesPage} signSavedMovies={signSavedMovies}/>
                    <SearchForm/>
                    <MoviesCardList savedMovies='false'/>
                    <MoviesMore/>
                    <Footer/>
                </main>
            </div>
<Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies} signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>
        </>

    );


}

export default Movies;