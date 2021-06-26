import Footer from "../Footer/Footer";
import  '../../styles/page.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import React from "react";


function Main({ signOut, signMain, signRegister, singHeader }) {



    return (
        <>
            <div className="page">
                <main className="content">
                    <Promo singHeader={singHeader} signOut={signOut} signMain={signMain} signRegister={signRegister} />
                    <NavTab />
                    <AboutProject />
                    <Techs />
                    <AboutMe />
                    <Portfolio />
                    <Footer/>
                </main>
            </div>

        </>

    );


}

export default Main;