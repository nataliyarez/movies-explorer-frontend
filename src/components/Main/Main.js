import Footer from "../Footer/Footer";
import  '../../styles/page.css';
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject"


function Main(props) {

    return (
        <>
            <div className="page">
                <main className="content">
                    <Promo />
                    <NavTab />
                    <AboutProject />
                    <Footer/>
                </main>
            </div>

        </>

    );


}

export default Main;