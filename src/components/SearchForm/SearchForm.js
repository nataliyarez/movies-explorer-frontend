import React from "react";
import '../SearchForm/SearchForm.css';
import '../../fonts/InterWeb/inter.css'


function SearchForm() {
    return (
        <div>
            <div className="search">
                <form className="search-form">
                    <input className="search-form__text" id="name" name="name" type="text" required minLength="2"
                           placeholder="Фильм"/>
                    <button className="search-form__button" type="submit"></button>
                </form>
                <div className="search__switch-wrapper">
                    <label className="search__switch">
                        <input className="search__checkbox" type="checkbox"/>
                        <span className="search__slider"></span>
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>

        </div>
    );
}

export default SearchForm;