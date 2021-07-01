import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory} from "react-router-dom";

import '../../styles/page.css';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies'
import {auth} from "../../utils/auth";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import {apiMain} from "../../utils/MainApi";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isInfoTooltip, setInfoTooltip] = useState(false);
    const [userDataLogin, setUserDataLogin] = useState({password: '', email: ''});
    const [userDataRegister, setUserDataRegister] = useState({name: '', password: '', email: ''});
    const [search, setSearch] = useState([]);


    const history = useHistory();

    useEffect(() => {
        tokenCheck()
        setSearch(JSON.parse(localStorage.getItem("search")));

    }, [])
    useEffect(() => {
        if (isLoggedIn) {
            history.push("/movies")
        }
    }, [isLoggedIn])

    const [currentUser, setCurrentUser] = useState({name: 'Имя', email: 'Значение'});


    useEffect(() => {
        apiMain.getInitialInfo()
            .then((info) => {
                setCurrentUser(info);

            })
            .catch(err => console.log(err))

    }, [isLoggedIn])


    const handleAuthorizeUser = (email, password) => {

        // setEmail(userDataLogin.email);
        return auth.authorizeUser(password, email)
            .then((data) => {
                if (data.token) {
                    setUserDataLogin({name: '', password: '', email: ''});
                    setIsLoggedIn(true);
                    localStorage.setItem('token', data.token);
                    history.push("/movies")
                    return;

                }
            })
            .catch((err) => {
                console.log(err);
                setUserDataLogin({password: '', email: ''});

            })
    }

    const handleRegister = (name, email, password) => {

        return auth.registerUser(name, password, email)

            .then(() => {
                history.push("/movies")
                setUserDataRegister({name: '', password: '', email: ''});

            })
            .catch((err) => {
                setUserDataRegister({name: '', password: '', email: ''});
                console.log(err);
            })
    }
    const tokenCheck = () => {
        if (localStorage.getItem('token')) {
            let token = localStorage.getItem('token');
            auth.getValidationToken(token)
                .then((data) => {
                    if (data) {
                        //  setEmail(data.email);
                        setIsLoggedIn(true);
                    }
                });
        }
    }


    const handleUpdateUser = (name, email) => {
        apiMain.editInfo(name, email)
            .then((data) => {
                setMessage(true);
                setInfoTooltip(true);
                setCurrentUser(data);


            })
            .catch((err) => {
                setMessage(false);
                setInfoTooltip(true);
                console.log(err)
            });
    }

    const handleChangeRegister = (e) => {
        const {name, value} = e.target;
        setUserDataRegister({
            ...userDataRegister,
            [name]: value
        })
    }

    const handleChangeLogin = (e) => {
        const {name, value} = e.target;
        setUserDataLogin({
            ...userDataLogin,
            [name]: value
        })
    }

    const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);


    const handleMenuClick = () => {

        setIsProfilePopupOpen(true);
    }


    const closePopup = () => {
        setIsProfilePopupOpen(false);
        setInfoTooltip(false);


    }


    function signMain() {
        history.push('/');
    }

    function signOut() {
        localStorage.removeItem('token');
        history.push('/signin');
    }


    function signRegister() {
        history.push('/signup');
    }

    function signProfile() {
        history.push('/profile');
    }

    function signMovies() {
        history.push('/movies');

    }

    function signSavedMovies() {
        history.push('/saved-movies');

    }

    function singHeader() {
        if (isLoggedIn) {
            history.push("/movies")
        } else {
            history.push('/signin');
        }

    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>

                <Switch>

                    <ProtectedRoute
                        path="/movies"
                        loggedIn={isLoggedIn}
                        component={Movies}
                        signOut={signOut}
                        // email={email}
                        signMain={signMain}
                        signProfile={signProfile}
                        signMovies={signMovies}
                        signSavedMovies={signSavedMovies}
                        singHeader={singHeader}
                        search={search}
                        onClose={closePopup}
                        isOpen={isProfilePopupOpen}
                        onMenu={handleMenuClick}

                    />

                    <ProtectedRoute
                        path="/profile"
                        component={Profile}
                        onMenu={handleMenuClick} loggedIn={isLoggedIn} isOpen={isProfilePopupOpen}
                        isOpenInfo={isInfoTooltip} message={message} onClose={closePopup} signOut={signOut}
                        signProfile={signProfile} signMain={signMain} signMovies={signMovies}
                        signSavedMovies={signSavedMovies} onUpdateUser={handleUpdateUser}/>


                    <Route path="/signin">
                        <Login signOut={signRegister} onLogin={handleAuthorizeUser} userData={userDataLogin}
                               onChange={handleChangeLogin}
                        />
                    </Route>
                    <Route path="/signup">
                        <Register signOut={signOut} onRegister={handleRegister} userData={userDataRegister}
                                  onChange={handleChangeRegister}
                        />
                    </Route>


                    <Route exact path="/">
                        <Main onMenu={handleMenuClick} onClose={closePopup} isOpen={isProfilePopupOpen}
                              loggedIn={isLoggedIn} signProfile={signProfile} signMovies={signMovies}
                              signSavedMovies={signSavedMovies} singHeader={singHeader} signOut={signOut}
                              signMain={signMain} signRegister={signRegister}/>
                    </Route>

                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={isLoggedIn} signProfile={signProfile} signMain={signMain}
                        signMovies={signMovies}
                        signSavedMovies={signSavedMovies}/>


                </Switch>
            </CurrentUserContext.Provider>
        </>

    );

}


export default App;

