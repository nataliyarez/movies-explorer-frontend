import popupImg from "../../images/popup_img.svg";
import '../Navigation/Navigation.css'
import React from "react";


function Navigation(props) {
    let visible;
    if (props.isOpen===true){
        visible = 'popup_visible'
    }
    console.log('dskgjkdfgjkldfg',props.isOpen)
    return (

        <div className={`popup ${visible}`} >
            <div className="popup__window">
                <button onClick={props.onClose} aria-label="закрыть" className="popup__close-button" type="button"></button>
               <div  className="popup__text-wrapper">
                <p onClick={props.signMain} className="popup__text">Главная</p>
                <p onClick={props.signMovies}  className="popup__text">Фильмы</p>
                <p className="popup__text">Сохранённые фильмы</p>
               </div>
                <div className="popup__account">
                    <p onClick={props.signProfile} className="popup__account-text">Аккаунт</p>
                    <div className="popup__account-img-wrapper">
                    <img alt="Аккаунт" className="popup__account-img" src={popupImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;