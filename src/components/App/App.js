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
    //const [message, setMessage] = useState('');
   // const [isInfoTooltip, setInfoTooltip] = useState(false);
    const [userDataLogin, setUserDataLogin] = useState({password: '', email: ''});
    const [userDataRegister, setUserDataRegister] = useState({name: '', password: '', email: ''});



    const history = useHistory();

    useEffect(() => {
        tokenCheck()
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




    const handleAuthorizeUser = (email, password ) => {

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
              //  setMessage(true);
              //  setInfoTooltip(true);
                history.push("/movies")
                setUserDataRegister({name: '', password: '', email: ''});

            })
            .catch((err) => {
              //  setMessage(false);
              //  setInfoTooltip(true);
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
                setCurrentUser(data);
                history.push("/movies");

            })
            .catch(err => console.log(err));
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
        }else {
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

                />


                    <Route path="/profile">
                        <Profile signOut={signOut} signProfile={signProfile} signMain={signMain} signMovies={signMovies}
                                 signSavedMovies={signSavedMovies} onUpdateUser={handleUpdateUser} />
                    </Route>



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
                    <Main  singHeader={singHeader} signOut={signOut} signMain={signMain} signRegister={signRegister}/>
                </Route>



                <Route path="/saved-movies">
                    <SavedMovies signProfile={signProfile} signMain={signMain} signMovies={signMovies}
                                 signSavedMovies={signSavedMovies}/>
                </Route>

            </Switch>
            </CurrentUserContext.Provider>
        </>

    );

}


export default App;

