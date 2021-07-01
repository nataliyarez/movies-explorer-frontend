import Header from "../Header/Header";
import '../Promo/Promo.css'
import '../../styles/page.css';
import promoPic from "../../images/promo_pic_3.svg";
import React from "react";


function Promo({signOut, signMain, signRegister, singHeader, loggedIn, signProfile, signMovies, signSavedMovies, onMenu }) {

    return (
        <>

            <div>
                <div className="promo">
                    <Header onMenu={onMenu} signSavedMovies={signSavedMovies} signProfile={signProfile} signMovies={signMovies}  loggedIn={loggedIn} singHeader={singHeader} signOut={signOut} signMain={signMain} signRegister={signRegister} />
                    <div className="promo__info">
                        <h1 className="promo__text">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                        <img alt="Картинка" className="promo__pic" src={promoPic}/>
                    </div>
                </div>
            </div>

        </>

    );


}

export default Promo;