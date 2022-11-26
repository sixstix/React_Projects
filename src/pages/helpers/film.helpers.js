

export function filterFilmsByDirector(list, searchDirector){
    return list.filter(movie => movie.director === searchDirector);

}    

export function getListOf(list, prop){

    let seenMovies = {};
    list.forEach(item => {
        if (!seenMovies[item[prop]]){
            seenMovies[item[prop]] = 1;
        }
    });
    return Object.keys(seenMovies);
    
}   