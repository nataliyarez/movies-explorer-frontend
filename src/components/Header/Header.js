import React from "react";
import  '../Header/Header.css';
import headerLogo from "../../images/header_logo.svg";

function Header(props) {


    return (
        <div>
            <header className="header">
                <img alt="Лого" className="header__logo" src={headerLogo}/>
                <div className="header__login">
                <p className={props.register}>Регистрация</p>
                <button aria-label={props.label} className={props.className}
                        type="button">{props.title}</button>
                </div>
            </header>
        </div>
    );
}

export default Header;