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

    getInitialCards() {//закбираем карточки с сервера
        return  fetch(this._baseUrl+'/cards',{
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
    addCard (name, link) { // добавляем новую карточку
        return  fetch(this._baseUrl+'/cards', {
            method: 'POST',
            headers: {
                Authorization: `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._getResponseData);
    }
    deleteCard (cardId){ // удаляем карточку
        return  fetch(this._baseUrl+'/cards/'+cardId, {
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
    likeCard (cardId, isLike) { // лайкам и дизлайкам карточку
        if (isLike === false) {
            return  fetch(this._baseUrl+'/cards/'+cardId + '/likes/', {
                method: 'PUT',
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(this._getResponseData);

        } else {
            return  fetch(this._baseUrl+'/cards/'+cardId + '/likes/', {
                method: 'DELETE',
                headers: {
                    Authorization: `${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            })
                .then(this._getResponseData);
        }


    }

}

let token = localStorage.getItem('token');

const apiMain = new Api({ // подключение к api
    baseUrl: 'http://localhost:3005',
    headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json'
    }

});



export {apiMain};