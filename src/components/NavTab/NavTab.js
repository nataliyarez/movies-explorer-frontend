
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
                            <li className="nav-tab__list"><a href="#test" className="nav-tab__link"
                                                            >О проекте</a>
                            </li>
                            <li className="nav-tab__list"><a href="https://github.com/" className="nav-tab__link"
                                                            target="_blank" rel="noreferrer">Технологии</a>
                            </li>
                            <li className="nav-tab__list"><a href="https://www.facebook.com/" className="nav-tab__link"
                                                            target="_blank" rel="noreferrer">Студент</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>

    );


}

export default NavTab;