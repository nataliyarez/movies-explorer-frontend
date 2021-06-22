import '../Techs/Techs.css'

import React from "react";


function Techs(props) {

    return (
        <>

            <div>
                <div className="techs" id="techs">
                    <h2 className="techs__heading">Технологии</h2>
                    <div className="techs__wrapper">
                    <div className="techs__text-wrapper">
                            <h3 className="techs__title">7 технологий</h3>
                            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили
                                в дипломном проекте.</p>
                    </div>
                    <div className="techs__teg-wrapper">
                        <p className="techs__teg">HTML</p>
                        <p className="techs__teg">CSS</p>
                        <p className="techs__teg">JS</p>
                        <p className="techs__teg">React</p>
                        <p className="techs__teg">Git</p>
                        <p className="techs__teg">Express.js</p>
                        <p className="techs__teg">mongoDB</p>
                    </div>

                </div>

            </div>
            </div>

        </>

    );


}

export default Techs;