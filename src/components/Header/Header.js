import React from "react";
import  '../Header/Header.css';
import headerLogo from "../../images/header_logo.svg";

function Header(props) {
    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <div>
            <header className="header">
                <img onClick={props.signMain} alt="Лого" className="header__logo" src={headerLogo}/>
                <div className="header__login">
                <p onClick={props.signRegister} className={props.register}>Регистрация</p>
                <button onClick={props.onMenu} onSubmit={handleSubmit}  aria-label={props.label} className={props.className}
                        type="button">{props.title}</button>
                </div>
            </header>
        </div>
    );
}

export default Header;