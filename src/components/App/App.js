// import '../index.css';
//import Header from '../Header/Header';

// import Main from './Main';
// import Footer from './Footer';
// import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
import React from "react";
import {Route, Switch} from "react-router-dom";

import '../../styles/page.css';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';


function App() {
    return (
        <>

                <Switch>
                    <Route exact path="/">
                     <Main />
                    </Route>

                    <Route  path="/movies">
                        <Movies />
                    </Route>


                </Switch>


        </>

    );

}


export default App;

