
import {React} from "react";
import '../Register/Register.css'
import registerLogo from "../../images/header_logo.svg";
import {useFormWithValidation} from "../FormValidator/FormValidator";
import '../../styles/error.css'



function Register ({ signOut, signMain, onRegister }) {

    const { values, handleChange, errors, isValid,  } = useFormWithValidation();
    const handleSubmit = (e) => {
        e.preventDefault();
        onRegister(values.name, values.email, values.password);
    }



    let disabled;
    let classDisabled

    if (isValid===false){
        disabled = 'disabled'
        classDisabled = 'form__button_auth_disabled'
    }

    return (
        <div className="page">

            <div className="auth">
                <div className="auth__wrapper">
                <img onClick={signMain} alt="Лого" className="auth__logo" src={registerLogo}/>
                <h3 className="auth__text">Добро пожаловать!</h3>
                <form onSubmit={handleSubmit} className="form form__auth" noValidate>
                    <div className="form__input-wrapper">
                        <p className="form__auth-text">Имя</p>
                        <input value={values.name} onChange={handleChange} className="form__input form__input_auth"  name="name" type="text" required minLength="2" maxLength="40" />
                        <span id="name-error" className="error">{errors.name}</span>
                        <p className="form__auth-text">E-mail</p>
                        <input value={values.email} onChange={handleChange} className="form__input form__input_auth"  name="email" type="email" required minLength="2" maxLength="40"  />
                        <span id="email-error" className="error">{errors.email}</span>
                        <p className="form__auth-text">Пароль</p>
                        <input  value={values.password} onChange={handleChange} className="form__input form__input_auth"  name="password" type="password" required minLength="2" maxLength="200" />
                        <span id="password-error" className="error">{errors.password}</span>
                    </div>
                    <button className={`form__button form__button_auth ${classDisabled}`} disabled={disabled}type="submit">
                        Зарегистрироваться
                    </button>
                </form>
                </div>
                <div className="auth__link-wrapper">
                <p className="auth__link">Уже зарегистрированы?</p>
                <p onClick={signOut} className="auth__link auth__link_blue">Войти</p>
                </div>
        </div>

        </div>
    );
}
export default Register;