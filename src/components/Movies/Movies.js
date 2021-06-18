import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, {useEffect, useState} from "react";


function Movies({  signMain, signProfile, signMovies}) {

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
                    <Header  onMenu={handleMenuClick} signMain={signMain} register='header__register' className='header__menu-button' label='Меню'/>
                    <SearchForm/>
                    <MoviesCardList/>
                    <MoviesMore/>
                    <Footer/>
                </main>
            </div>
<Navigation signProfile={signProfile} signMain={signMain} signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>
        </>

    );


}

export default Movies;