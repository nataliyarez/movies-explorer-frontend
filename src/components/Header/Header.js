import React from "react";
import  '../Header/Header.css';
import headerLogo from "../../images/header_logo.svg";
import headerMenu from "../../images/header_icon.svg";

function Header() {
    return (
        <div>
            <header className="header">
                <img alt="Лого" className="header__logo" src={headerLogo}/>
                <img alt="Меню" className="header__menu" src={headerMenu}/>
            </header>
        </div>
    );
}

export default Header;