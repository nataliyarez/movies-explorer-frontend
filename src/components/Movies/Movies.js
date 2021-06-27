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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Movies({signMain, signProfile, signMovies, signSavedMovies, isLoggedIn, singHeader}) {
    const currentUser = React.useContext(CurrentUserContext);
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
            id: item.id,
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

            })
            .catch((err) => {
                console.log(err);
                setError(err);
            })

    }, [])


            const [filterValues, setFilterValues] = useState(undefined);

    function searchCards(request, chooseShortMovies) {
        if (chooseShortMovies === true && request !== '') {

            const filterValues = (name) => {
                return cardsMovies.filter(data => {
                    return data.nameRU.toLowerCase().indexOf(name.toLowerCase()) > -1;
                });
            }
            const arrayMovies = filterValues(request).filter(e => e.duration <= 40);
            setFilterValues(arrayMovies);
        } else if (request !== '') {
            const filterValues = (name) => {
                return cardsMovies.filter(data => {
                    return data.nameRU.toLowerCase().indexOf(name.toLowerCase()) > -1;
                });
            }
            setFilterValues(filterValues(request));
        }

    }




    function handleCardLike(card) {

        console.log(' тут', cardsMoviesSave[0].owner)
        console.log(' жопа', cardsMoviesSave)
        console.log(' пиздец', currentUser)


        const isLiked = cardsMoviesSave.find(i => i === cardsMovies.id);
        console.log('что тут', isLiked)
        if (isLiked === false){
            apiMain.likeCard(card)
                .then((newCard) => {
                    console.log('сохраняю',newCard)
                    setCardsMoviesSave((state) => state.map((c) => c._id === card._id ? formatCardMovies(newCard) : c));
                })
                .catch(err => console.log(err));
        } else if (isLiked === true){
            apiMain.deleteCard(card.id)

                .then(() => {
                    console.log('удаляю',)
                    function deleteCard (value){
                        return value._id !== card._id;
                    }
                    setCardsMovies(cardsMovies.filter(deleteCard));

                })
                .catch(err => console.log(err));
        }

    }


    return (
        <>

            <div className="page">
                <main className="content">
                    <Header singHeader={singHeader} signProfile={signProfile} onMenu={handleMenuClick}
                            signMain={signMain} moviesPage={moviesPage} signSavedMovies={signSavedMovies}/>
                    <SearchForm searchCards={searchCards}/>
                    {filterValues !== undefined &&
                    <MoviesCardList myCard={cardsMoviesSave} onCardLike={handleCardLike} cardsMovies={filterValues} definitionWidth={definitionWidth}
                                    numberOfRender={numberOfRender} savedMovies='false'/>}
                    {filterValues !== undefined &&
                    <MoviesMore numberOfRender={numberOfRender} cardsMovies={filterValues}
                                onButtonClick={handleAddCards}/>}
                    {filterValues === undefined && <Preloader/>}
                    {filterValues !== undefined && <MoviesError cardsMovies={filterValues} error={error}/>}
                    <Footer/>

                </main>
            </div>
            <Navigation signProfile={signProfile} signMain={signMain} signSavedMovies={signSavedMovies}
                        signMovies={signMovies} onClose={closePopup} isOpen={isProfilePopupOpen}/>


        </>

    );


}

export default Movies;