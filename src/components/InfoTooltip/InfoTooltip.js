import loginOk from "../../images/true.svg";
import loginFail from "../../images/false.svg";
import "../Navigation/Navigation.css";
import '../InfoTooltip/InfoTooltip.css'

function InfoTooltip(props) {
    let text;
    let image;
    if (props.message===true){
        image = loginOk;
        text= 'Данные сохранены';
    }else{
        image = loginFail;
        text= 'Что-то пошло не так!\n' +
            'Попробуйте ещё раз.';
    }
    let visible;
    if (props.isOpenInfo===true){
        visible = 'popup_visible'
    }

    return (
        <div className={`popup popup_info ${visible}`} >
            <div className="popup__window popup__window_info">
                <button onClick={props.onClose} aria-label="закрыть" className="popup__close-button popup__close-button_info" type="button"></button>
                <div className="popup__image-wrapper">
                    <img className="popup__info-image" alt="Ок" src={image}></img>
                    <h3 className="popup__info-text">{text}</h3>
                </div>
            </div>
        </div>
    )
}
export default InfoTooltip;