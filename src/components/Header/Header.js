import React from "react";
import  '../Header/Header.css';
import headerLogo from "../../images/header_logo.svg";
import popupImg from "../../images/popup_img.svg";
import '../Navigation/Navigation.css'

function Header(props) {
    let visibleMenu;
    let visibleRegister;
    let visibleEntry;
    let visibleSavedMovies;
    let visibleMovies;
    let visibleAccount;
    if (props.moviesPage===true){

        visibleMenu = 'header__menu-button_visible'
        visibleSavedMovies = 'header__saved-movies_visible'
        visibleMovies = 'header__movies_visible'
        visibleAccount = 'header__account_visible'
    } else {

        visibleRegister = 'header__register_visible'
        visibleEntry = 'header__entry-button_visible'
    }
    function handleSubmit(e) {
        e.preventDefault();

    }




    return (
        <div>
            <header className="header">
                <img onClick={props.signMain} alt="Лого" className="header__logo" src={headerLogo}/>
                <div className="header__login">
                    <div className='header__movies-wrapper'>
                    <p onClick={props.signMovies} className={`header__movies ${visibleMovies}`}>Фильмы</p>
                    <p onClick={props.signSavedMovies} className={`header__saved-movies ${visibleSavedMovies}`}>Сохранённые фильмы</p>
                </div>
                <p onClick={props.signRegister} className={`header__register ${visibleRegister}`}>Регистрация</p>
                <button onClick={props.singHeader} aria-label='войти' className={`header__entry-button ${visibleEntry}`}
                        type="button">Войти</button>
                    <button onClick={props.onMenu} onSubmit={handleSubmit}  aria-label='меню' className={`header__menu-button ${visibleMenu}`}
                            type="button"></button>

                    <div className={`header__account ${visibleAccount}`}>
                        <p onClick={props.signProfile} className="header__account-text">Аккаунт</p>
                        <div className="header__account-img-wrapper">
                            <img alt="Аккаунт" className="header__account-img" src={popupImg}/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;