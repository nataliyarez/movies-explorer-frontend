import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Footer from "../Footer/Footer";
import '../../styles/page.css';


function Movies(props) {

    return (
        <>

            <div className="page">
                <main className="content">
                    <Header register='header__register' className='header__menu-button' label='Меню'/>
                    <SearchForm/>
                    <MoviesCardList/>
                    <MoviesMore/>
                    <Footer/>
                </main>
            </div>

        </>

    );


}

export default Movies;