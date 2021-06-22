import '../Portfolio/Portfolio.css'

import React from "react";


function Portfolio(props) {

    return (
        <>

            <div>
                <div className="portfolio">
                    <p className="portfolio__text">Портфолио</p>
                    <nav>
                        <ul className="portfolio__links">
                            <li className="portfolio__list"><a
                                href="https://nataliyarez.github.io/russian-travel/"
                                className="portfolio__link"
                                target="_blank" rel="noreferrer">Статичный сайт</a>
                            </li>

                            <li className="portfolio__list"><a
                                href="https://nataliyarez.github.io/mesto/index.html"
                                className="portfolio__link"
                                target="_blank" rel="noreferrer">Адаптивный сайт</a>
                            </li>
                            <li className="portfolio__list"><a
                                href="https://mesto.rezvushkina.nomoredomains.club/"
                                className="portfolio__link"
                                target="_blank" rel="noreferrer">Одностраничное приложение</a>
                            </li>

                        </ul>
                    </nav>

                </div>

            </div>

        </>

    );


}

export default Portfolio;