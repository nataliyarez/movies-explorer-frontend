// import '../index.css';
import Header from '../Header/Header';

// import Main from './Main';
// import Footer from './Footer';
// import PopupWithForm from "./PopupWithForm";
// import ImagePopup from "./ImagePopup";
// import EditProfilePopup from "./EditProfilePopup";
// import EditAvatarPopup from "./EditAvatarPopup";
// import AddPlacePopup from "./AddPlacePopup";
// import React, {useEffect, useState} from "react";

import  '../../styles/page.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesMore from '../MoviesMore/MoviesMore';
import Footer from '../Footer/Footer';



function App() {
  return (
      <>
        <div className="page">

          <Header/>
          <SearchForm />
          <MoviesCardList />
          <MoviesMore/>
          <Footer/>


        </div>


      </>

  );

}


export default App;

