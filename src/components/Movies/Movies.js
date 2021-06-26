import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, { useState, useEffect} from "react";
import {apiMovies} from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";



function Movies({  signMain, signProfile, signMovies, signSavedMovies, isLoggedIn, singHeader}) {
    const moviesPage = true;

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);


    const handleMenuClick = () => {
        setIsProfilePopupOpen(true);
    }


    const closePopup = () => {
        setIsProfilePopupOpen(false);

    }

    const [numberOfRender, setNumberOfRender] = useState('');


    function definitionWidth() {
        if (window.innerWidth >= 1280) {
            setNumberOfRender(12 );
        } else if (window.innerWidth >= 768) {
            setNumberOfRender(8 );
        } else if (window.innerWidth >= 481) {
            setNumberOfRender(8  );
        } else if (window.innerWidth >= 320){
            setNumberOfRender(5);
        }

    }
function handleAddCards (){

    if (window.innerWidth >= 1280) {
        setNumberOfRender(numberOfRender + 3);
    } else if (window.innerWidth >= 768) {
        setNumberOfRender(numberOfRender + 2);
    } else if (window.innerWidth >= 320){
        setNumberOfRender(numberOfRender + 2);
    }
}

    const delay = 1000;
    let throttled = false;
    window.addEventListener('resize', function () {

        if (!throttled) {

            console.log("ширина", window.innerWidth)
            definitionWidth();
            throttled = true;

            setTimeout(function () {
                throttled = false;
            }, delay);
        }
    });

    function formatCardMovies(item) {
        return {
            id: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            director: item.director,
            country: item.country,
            year: item.year,
            duration: item.duration,
            description: item.description,
            trailerLink: item.trailerLink,
            image: item.image.url
        }
    }

    const [cardsMovies, setCardsMovies] = useState([]);

    useEffect(() => {
        apiMovies.getMoviesInfo()
            .then((data) => {

                const cards = data.map(formatCardMovies);
                setCardsMovies(cards);
                definitionWidth();
            })
            .catch(err => console.log(err))
    }, [])

    const [filterValues, setFilterValues] = useState(undefined);

    function searchCards (request){

        const filterValues = (name) => {
            return cardsMovies.filter(data => {
                return data.nameRU.toLowerCase().indexOf(name.toLowerCase()) > -1;
            });
        }

        setFilterValues(filterValues(request));
    }



    return (
        <>

            <div className="page">
                <main className="content">
                    <Header singHeader={singHeader} signProfile={signProfile} onMenu={handleMenuClick} signMain={signMain}  moviesPage={moviesPage} signSavedMovies={signSavedMovies}/>
                    <SearchForm  searchCards={searchCards} />
                    {filterValues != undefined && <MoviesCardList cardsMovies={filterValues} definitionWidth={definitionWidth}
                                     numberOfRender={numberOfRender} savedMovies='false'/>}
                    {filterValues != undefined && <MoviesMore numberOfRender={numberOfRender} cardsMovies={filterValues}
                                 onButtonClick={handleAddCards}/>}
                    {filterValues === undefined && <Preloader/>}
                    <Footer/>

                </main>
            </div>
<Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies} signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>


</>

    );


}

export default Movies;