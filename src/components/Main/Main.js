import Footer from "../Footer/Footer";
import  '../../styles/page.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import React from "react";
import Navigation from "../Navigation/Navigation";


function Main({ signOut, signMain, signRegister, singHeader,loggedIn, signProfile, signMovies, signSavedMovies, onClose, isOpen, onMenu }) {



    return (
        <>
            <div className="page">
                <main className="content">
                    <Promo onMenu={onMenu} signSavedMovies={signSavedMovies} signProfile={signProfile} signMovies={signMovies} loggedIn={loggedIn} singHeader={singHeader} signOut={signOut} signMain={signMain} signRegister={signRegister} />
                    <NavTab />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Portfolio />
                    <Footer/>
                </main>
            </div>

            <Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies}
                        signMovies={signMovies} onClose={onClose} isOpen={isOpen}/>
        </>


    );


}

export default Main;