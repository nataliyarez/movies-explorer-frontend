function filter (request, chooseShortMovies, cardsMovies) {
    if (chooseShortMovies === true && request !== '') {

        const filterValues = (name) => {
            return cardsMovies.filter(data => {
                return data.nameRU.toLowerCase().indexOf(name.toLowerCase()) > -1;
            });
        }
        const arrayMovies = filterValues(request).filter(e => e.duration <= 40);

        return arrayMovies;
    } else if (request !== '') {
        const filterValues = (name) => {
            return cardsMovies.filter(data => {
                return data.nameRU.toLowerCase().indexOf(name.toLowerCase()) > -1;
            });
        }
        return filterValues(request);

    }

}

export default filter;