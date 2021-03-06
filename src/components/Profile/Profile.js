import {React} from "react";
import '../Register/Register.css'
import Header from "../Header/Header";
import '../Profile/Profile.css';



function Profile ({  signMain, signProfile, signMovies, signSavedMovies}) {

    const moviesPage = true;



    return (
        <div className="page">

            <div className="profile">
                <Header moviesPage={moviesPage} signMain={signMain} signProfile={signProfile} signMovies={signMovies} signSavedMovies={signSavedMovies}/>
                <div className="auth">
                <div className="auth__wrapper auth__wrapper_profile">

                    <h3 className="auth__text">Привет, Виталий!</h3>
                    <form  className="form form__profile" noValidate>
                        <div className="form__input-wrapper">
                            <div className="form__profile-text-wrapper">
                            <p className="form__profile-text">Имя</p>
                            <input className="form__input form__input_profile"  name="name" type="email" required minLength="2" maxLength="40" />
                            </div>
                            <span id="name-error" className="error"></span>
                            <div className="form__profile-text-wrapper form__profile-text-wrapper_email">
                            <p className="form__profile-text">E-mail</p>
                            <input className="form__input form__input_profile"  name="email" type="email" required minLength="2" maxLength="40"  />
                            </div>
                            <span id="email-error" className="error"></span>
                        </div>
                    </form>
                </div>
                <div className="auth__link-wrapper auth__link-wrapper_profile">
                    <p className="auth__link auth__link_white">Редактировать</p>
                    <p onClick={signMain} className="auth__link auth__link_red">Выйти из аккаунта</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Profile;