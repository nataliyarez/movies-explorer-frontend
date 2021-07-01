import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesMore from "../MoviesMore/MoviesMore";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation"
import '../../styles/page.css';
import React, {useState, useEffect} from "react";
import {apiMovies} from "../../utils/MoviesApi";
import {apiMain} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import MoviesError from "../MoviesError/MoviesError";
import filter from "../Filter/Filter";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';



function Movies({signMain, signProfile, signMovies, signSavedMovies, loggedIn, singHeader, search, onClose, isOpen, onMenu}) {
    const currentUser = React.useContext(CurrentUserContext);
    const moviesPage = true;



    const [numberOfRender, setNumberOfRender] = useState('');


    function definitionWidth() {
        if (window.innerWidth >= 1280) {
            setNumberOfRender(12);
        } else if (window.innerWidth >= 768) {
            setNumberOfRender(8);
        } else if (window.innerWidth >= 481) {
            setNumberOfRender(8);
        } else if (window.innerWidth >= 320) {
            setNumberOfRender(5);
        }

    }

    function handleAddCards() {

        if (window.innerWidth >= 1280) {
            setNumberOfRender(numberOfRender + 3);
        } else if (window.innerWidth >= 768) {
            setNumberOfRender(numberOfRender + 2);
        } else if (window.innerWidth >= 320) {
            setNumberOfRender(numberOfRender + 2);
        }
    }



        const delay = 1000;
        let throttled = false;
       window.addEventListener('resize', function () {

            if (!throttled) {
                definitionWidth();
                throttled = true;

                setTimeout(function () {
                    throttled = false;
                }, delay);
            }
        });



    function formatCardMovies(item) {
        return {
            _id: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN,
            director: item.director,
            country: item.country,
            year: item.year,
            duration: item.duration,
            description: item.description,
            trailer: item.trailerLink,
            thumbnail: `https://api.nomoreparties.co${item.image.url}`,
            image: `https://api.nomoreparties.co${item.image.url}`
        }
    }

    const [cardsMovies, setCardsMovies] = useState([]);
    const [cardsMoviesSave, setCardsMoviesSave] = useState([]);
    const [error, setError] = useState([]);


    useEffect(() => {
        Promise.all([apiMovies.getMoviesInfo(), apiMain.getInitialCards()])
            .then(([movies, cards]) => {
                const data = movies.map(formatCardMovies);
                setCardsMovies(data);
                setCardsMoviesSave(cards);
                definitionWidth();
                setFilterValues(search);

            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })

    }, [])


    const [filterValues, setFilterValues] = useState(undefined);
    const [preloader, setPreloader] = useState(false);


    function searchCards(request, chooseShortMovies) {
        setPreloader(true);
        setTimeout(function () {
            setFilterValues(filter(request, chooseShortMovies, cardsMovies));
            setPreloader(false);
        }, 1000);


    }



    function handleCardLike(card) {

        if (cardsMoviesSave === undefined) {
            apiMain.likeCard(card)
                .then((newCard) => {
                    setCardsMoviesSave([newCard]);
                })
                .catch(err => console.log(err));
        } else {
            const ownerCards = cardsMoviesSave.filter(e => e.owner === currentUser._id);
            const isLiked = ownerCards.find(i => i.movieId === card._id);

            if (isLiked === undefined) {
                apiMain.likeCard(card)
                    .then((newCard) => {
                        setCardsMoviesSave([newCard, ...cardsMoviesSave]);
                    })
                    .catch(err => console.log(err));
            } else {
                apiMain.deleteCard(isLiked._id)
                    .then(() => {
                        function deleteCard(value) {
                            return value._id !== isLiked._id;
                        }

                        setCardsMoviesSave(cardsMoviesSave.filter(deleteCard));
                    })
                    .catch(err => console.log(err));
            }
        }
    }



    return (
        <>

            <div className="page">
                <main className="content">
                    <Header loggedIn={loggedIn} singHeader={singHeader} signProfile={signProfile} onMenu={onMenu}
                            signMain={signMain} moviesPage={moviesPage} signSavedMovies={signSavedMovies}/>
                    <SearchForm searchCards={searchCards}/>
                    {filterValues !== undefined & filterValues !==null & preloader === false &&
                    <MoviesCardList myCard={cardsMoviesSave} onCardLike={handleCardLike} cardsMovies={filterValues}
                                    definitionWidth={definitionWidth}
                                    numberOfRender={numberOfRender} savedMovies='false'/>}
                    {filterValues !== undefined & filterValues !==null &&
                    <MoviesMore numberOfRender={numberOfRender} cardsMovies={filterValues}
                                onButtonClick={handleAddCards}/>}
                    {preloader === true  && <Preloader/>}
                    {filterValues !== undefined & filterValues !==null && <MoviesError cardsMovies={filterValues} error={error}/>}
                    <Footer/>

                </main>
            </div>
            <Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies}
                        signMovies={signMovies} onClose={onClose} isOpen={isOpen}/>


        </>

    );


}

export default Movies;