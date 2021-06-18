
import {React} from "react";
import '../Register/Register.css'
import registerLogo from "../../images/header_logo.svg";



function Login ({ signOut, signMain }) {





    return (
        <div className="page">

            <div className="auth">
                <div className="auth__wrapper">
                    <img onClick={signMain} alt="Лого"  className="auth__logo" src={registerLogo}/>
                    <h3 className="auth__text">Рады видеть!</h3>
                    <form  className="form form__auth" noValidate>
                        <div className="form__input-wrapper">
                            <p className="form__auth-text">E-mail</p>
                            <input className="form__input form__input_auth"  name="email" type="email" required minLength="2" maxLength="40"  />
                            <span id="email-error" className="error"></span>
                            <p className="form__auth-text">Пароль</p>
                            <input  className="form__input form__input_auth"  name="password" type="password" required minLength="2" maxLength="200" />
                            <span id="password-error" className="error"></span>
                        </div>
                        <button  className="form__button form__button_auth" type="submit">
                            Зарегистрироваться
                        </button>
                    </form>
                </div>
                <div className="auth__link-wrapper">
                    <p className="auth__link">Уже зарегистрированы?</p>
                    <p onClick={signOut} className="auth__link auth__link_blue">Регистрация</p>
                </div>
            </div>

        </div>
    );
}
export default Login;