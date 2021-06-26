import React, {useEffect, useState} from "react";
import '../Register/Register.css'
import Header from "../Header/Header";
import '../Profile/Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';


function Profile({signMain, signProfile, signMovies, signSavedMovies, signOut, onUpdateUser}) {

    const moviesPage = true;

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser(
            name, email
        );
    }

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }


    return (
        <div className="page">

            <div className="profile">
                <Header moviesPage={moviesPage} signMain={signMain} signProfile={signProfile} signMovies={signMovies}
                        signSavedMovies={signSavedMovies}/>
                <div className="auth">
                    <div className="auth__wrapper auth__wrapper_profile">

                        <h3 className="auth__text">Привет, Виталий!</h3>
                        <form onSubmit={handleSubmit} className="form form__profile" noValidate>
                            <div className="form__input-wrapper">
                                <div className="form__profile-text-wrapper">
                                    <p className="form__profile-text">Имя</p>
                                    <input value={name} onChange={handleNameChange}
                                           className="form__input form__input_profile" name="name" type="email" required
                                           minLength="2" maxLength="40"/>
                                </div>
                                <span id="name-error" className="error"></span>
                                <div className="form__profile-text-wrapper form__profile-text-wrapper_email">
                                    <p className="form__profile-text">E-mail</p>
                                    <input value={email} onChange={handleEmailChange}
                                           className="form__input form__input_profile" name="email" type="email"
                                           required minLength="2" maxLength="40"/>
                                </div>
                                <span id="email-error" className="error"></span>
                            </div>

                    <div className="auth__link-wrapper auth__link-wrapper_profile">

                        <button className="auth__link auth__link_white" type="submit">
                            Редактировать
                        </button>
                        <p onClick={signOut} className="auth__link auth__link_red">Выйти из аккаунта</p>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;