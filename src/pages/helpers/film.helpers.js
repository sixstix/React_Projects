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

export function getFilmStats(list){
    return list.reduce(
        (stats, film) => {
        stats.total++;
        
        stats.acc_score += Number(film.rt_score); 
        stats.avg_score = stats.acc_score / stats.total;
        
        if (stats.latest == null || stats.latest < film.release_date){
            stats.latest = film.release_date;
        }
        
        return stats;
    }, 
    {
        acc_score: 0,
        avg_score: 0,
        total: 0,
        latest: null, 
    }
    );
    
}

