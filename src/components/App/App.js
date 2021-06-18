
import React from "react";
import {Route, Switch, useHistory} from "react-router-dom";

import '../../styles/page.css';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Preloader from '../Preloader/Preloader'


function App() {
    const history = useHistory();

    function signMain() {
        history.push('/');
    }

    function signOut() {
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

    return (
        <>

                <Switch>
                    <Route exact path="/">
                     <Main signOut={signOut} signMain={signMain} signRegister={signRegister}/>
                    </Route>

                    <Route  path="/movies">
                        <Movies signMain={signMain} signProfile={signProfile} signMovies={signMovies} />
                    </Route>

                    <Route  path="/signup">
                        <Register signOut={signOut} signMain={signMain}/>
                    </Route>

                    <Route  path="/signin">
                        <Login signOut={signRegister} signMain={signMain}/>
                    </Route>

                    <Route  path="/profile">
                        <Profile />
                    </Route>

                    <Route  path="/pre">
                        <Preloader />
                    </Route>

                </Switch>


        </>

    );

}


export default App;

