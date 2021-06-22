import '../AboutMe/AboutMe.css'

import React from "react";
import aboutMePhoto from "../../images/aboutMe_Photo.png";


function AboutMe(props) {

    return (
        <>

            <div>
                <div className="about-me" id="about-me">
                    <h2 className="about-me__heading">Студент</h2>
                    <div className="about-me__wrapper">
                        <img alt="фото" className="about-me__photo" src={aboutMePhoto}/>
                    <div className="about-me__text-wrapper">
                        <h3 className="about-me__title">Виталий</h3>
                        <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                            начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>

                    <nav className="about-me__nav">
                        <ul className="about-me__links">
                            <li className="about-me__list"><a href="https://www.facebook.com/"
                                                              className="about-me__link"
                                                              target="_blank" rel="noreferrer">Facebook</a>
                            </li>

                            <li className="about-me__list"><a href="https://github.com/" className="about-me__link"
                                                              target="_blank" rel="noreferrer">Github</a>
                            </li>

                        </ul>
                    </nav>
                    </div>
                    </div>
                </div>

            </div>

        </>

    );


}

export default AboutMe;