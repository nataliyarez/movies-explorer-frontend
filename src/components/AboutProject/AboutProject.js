import '../AboutProject/AboutProject.css'

import React from "react";


function AboutProject(props) {

    return (
        <>

            <div>
                <div className="about-project" id="about-project">
                    <h2 className="about-project__heading">О проекте</h2>
                    <div className="about-project__text-wrapper">
                        <div className="about-project__column">
                        <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
                            функциональности и финальные
                            доработки.</p>
                        </div>
                        <div className="about-project__column">
                        <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                            было соблюдать, чтобы успешно
                            защититься.</p>
                        </div>
                    </div>
                        <div className="about-project__strip-wrapper">
                            <div className="about-project__strip">
                                <p className="about-project__strip-text">1 неделя</p>
                                <p className="about-project__comment">Back-end</p>
                            </div>
                            <div className="about-project__strip">
                                <p className="about-project__strip-text about-project__strip-text_white">4 недели</p>
                                <p className="about-project__comment">Front-end</p>
                            </div>
                        </div>

                    </div>

            </div>

        </>

    );


}

export default AboutProject;