import React, {useEffect} from "react";
import '../Register/Register.css'
import Header from "../Header/Header";
import '../Profile/Profile.css';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from "../FormValidator/FormValidator";
import '../../styles/error.css'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import Navigation from "../Navigation/Navigation";


function Profile({signMain, signProfile, onMenu, signMovies, signSavedMovies, signOut, onUpdateUser, isOpen, isOpenInfo, message, onClose, loggedIn}) {

    const moviesPage = true;
    const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

    const currentUser = React.useContext(CurrentUserContext);


    useEffect(() => {
        if (currentUser !== undefined){
            setValues(currentUser);
        }

    }, [currentUser]);


    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser(
            values.name, values.email
        );
    }


    let disabled;


    if (isValid===false){
        disabled = 'disabled'

    }


    return (
        <>
        <div className="page">

            <div className="profile">
                <Header onMenu={onMenu} loggedIn={loggedIn} moviesPage={moviesPage} signMain={signMain} signProfile={signProfile} signMovies={signMovies}
                        signSavedMovies={signSavedMovies}/>
                <div className="auth">
                    <div className="auth__wrapper auth__wrapper_profile">

                        <h3 className="auth__text">Привет, {values.name}!</h3>
                        <form onSubmit={handleSubmit} className="form form__profile" noValidate>
                            <div className="form__input-wrapper">
                                <div className="form__profile-text-wrapper">
                                    <p className="form__profile-text">Имя</p>
                                    <input value={values.name} onChange={handleChange}
                                           className="form__input form__input_profile" name="name" type="test" required
                                           minLength="2" maxLength="40"/>
                                </div>
                                <span id="name-error" className="error">{errors.name}</span>
                                <div className="form__profile-text-wrapper form__profile-text-wrapper_email">
                                    <p className="form__profile-text">E-mail</p>
                                    <input value={values.email} onChange={handleChange}
                                           className="form__input form__input_profile" name="email" type="email"
                                           required minLength="2" maxLength="40"/>
                                </div>
                                <span id="email-error" className="error">{errors.email}</span>
                            </div>

                    <div className="auth__link-wrapper auth__link-wrapper_profile">

                        <button className="auth__link auth__link_white" disabled={disabled} type="submit">
                            Редактировать
                        </button>
                        <p onClick={signOut} className="auth__link auth__link_red" >Выйти из аккаунта</p>
                    </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <InfoTooltip isOpenInfo={isOpenInfo} message={message} onClose={onClose}/>
            <Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies}
                        signMovies={signMovies} onClose={onClose} isOpen={isOpen}/>
    </>
    );
}

export default Profile;