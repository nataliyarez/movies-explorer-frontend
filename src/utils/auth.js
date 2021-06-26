class Auth {
    constructor(options) {
        this._baseUrl = options.baseUrl;

    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json(); // возвращаем результат работы метода и идём в следующий then
        }

        // если ошибка, отклоняем промис

        res.json().then(r => Promise.reject(r));
        return Promise.reject(`Ошибка: ${res.status} `);
    }
    registerUser (name, password, email){
        return  fetch(this._baseUrl+'/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        })
            .then(this._getResponseData);

    }
    authorizeUser(password, email) {
        return  fetch(this._baseUrl+'/signin', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
            .then(this._getResponseData)


    }
    getValidationToken (token) {
        return fetch(this._baseUrl+'/users/me',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : `${token}`
            }
        })
            .then(this._getResponseData);
    }
}

const auth = new Auth({ // подключение к api
    baseUrl: 'http://localhost:3005'

});



export {auth};