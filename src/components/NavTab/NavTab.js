
import '../NavTab/NavTab.css'
import '../../styles/page.css';
import React from "react";


function NavTab(props) {

    return (
        <>

            <div>
                <div className="nav-tab">

                    <nav>
                        <ul className="nav-tab__links">
                            <li className="nav-tab__list"><a href="#about-project" className="nav-tab__link"
                                                            >О проекте</a>
                            </li>
                            <li className="nav-tab__list"><a href="#techs" className="nav-tab__link">Технологии</a>
                            </li>
                            <li className="nav-tab__list"><a href="#about-me" className="nav-tab__link">Студент</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>

    );


}

export default NavTab;