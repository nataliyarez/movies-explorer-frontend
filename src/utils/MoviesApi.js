class Api {

    constructor(options) {
        this._baseUrl = options.baseUrl;

    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json(); // возвращаем результат работы метода и идём в следующий then
        }

        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMoviesInfo () {// забираем фильмы с сервера
        return fetch(this._baseUrl,{
            method: 'GET'

        })
            .then(this._getResponseData);
    }

}


const apiMovies = new Api({ // подключение к api
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'

});



export {apiMovies};