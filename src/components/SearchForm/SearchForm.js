import React, {useState} from "react";
import '../SearchForm/SearchForm.css';
import '../../fonts/InterWeb/inter.css'


function SearchForm({searchCards}) {


    const [request, setRequest] = useState('');
    const [checkbox, setCheckbox] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        searchCards(request);


    }
    function handleNameChange(evt) {

        setRequest(evt.target.value);
    }
    function handleCheckboxChange (evt){
        setCheckbox(evt.target.checked);
        searchCards(request, evt.target.checked);
    }

    return (
        <div>
            <div className="search">
                <div className="search-wrapper">
                <form onSubmit={handleSubmit} className="search-form">
                    <input value={request}  onChange={handleNameChange} className="search-form__text" id="name" name="name" type="text" required minLength="1"
                           placeholder="Фильм"/>
                    <button className="search-form__button" type="submit"></button>
                </form>
                <div className="search__switch-wrapper">
                    <label className="search__switch">
                        <input checked={checkbox} onChange={handleCheckboxChange} className="search__checkbox" type="checkbox"/>
                        <span className="search__slider"></span>
                    </label>
                    <p className="search__text">Короткометражки</p>
                </div>
            </div>
            </div>

        </div>
    );
}

export default SearchForm;