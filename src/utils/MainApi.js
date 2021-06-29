class Api {

    constructor(options) {
        this._baseUrl = options.baseUrl;

    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json(); // возвращаем результат работы метода и идём в следующий then
        }

        // если ошибка, отклоняем промис
        res.json().then(r => Promise.reject(r));
    }

    getInitialCards() {//закбираем карточки с сервера
        return  fetch(this._baseUrl+'/movies',{
            method: 'GET',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }


        })
            .then(this._getResponseData);

    }

    getInitialInfo () {// забираем данные пользователя с сервера
        return fetch(this._baseUrl+'/users/me',{
            method: 'GET',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponseData);
    }

    editInfo (name, email){ // меняем данные пользователя
        return  fetch(this._baseUrl+'/users/me', {
            method: 'PATCH',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
            .then(this._getResponseData);
    }

    deleteCard (cardId){ // удаляем карточку
        return  fetch(this._baseUrl+'/movies/'+cardId, {
            method: 'DELETE',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResponseData);
    }

    editAvatar (avatar) { // меняем аватар
        return  fetch(this._baseUrl+'/users/me/avatar', {
            method: 'PATCH',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then(this._getResponseData);

    }
    likeCard (card) { // лайкам и дизлайкам карточку
            return  fetch(this._baseUrl+'/movies/', {
                method: 'POST',
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    country: card.country,
                    director: card.director,
                    duration: card.duration,
                    year: card.year,
                    description: card.description,
                    image: card.image,
                    trailer: card.trailer,
                    thumbnail: card.thumbnail,
                    movieId: card._id,
                    nameRU: card.nameRU,
                    nameEN: card.nameEN,
        })
            })
                .then(this._getResponseData);




    }

}

let token = localStorage.getItem('token');

const apiMain = new Api({ // подключение к api
    baseUrl: 'https://api.movies.rezvushkina.nomoredomains.icu',
    headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
    }

});



export {apiMain};