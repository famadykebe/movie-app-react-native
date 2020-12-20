export const action_key = {
    ALL_MOVIE_SEARCH:'ALL_MOVIE_SEARCH',
    ALL_MOVIE:'ALL_MOVIE',
    FOLLOWING_THE_MOVIE:'FOLLOWING_THE_MOVIE',
    ALL_MOVIE_SEARCH_AFTER:'ALL_MOVIE_SEARCH_AFTER',
    KEY_MOIVE_FAVORIES: 'KEY_MOIVE_FAVORIES',
}

const URL_POINT_BASE = 'https://api.themoviedb.org';
const API_KEY = 'ed7a7f837813bd9a1990c5b08885df80';

export function actionMovieFavories(movie){

    return function(dispatch){

        dispatch({type:action_key.KEY_MOIVE_FAVORIES,payload:movie})

    }

}

export function recupeAllmovieData_search(textSearch,page = 1){

    return function(dispatch){

        fetch(`${URL_POINT_BASE}/3/search/movie?api_key=${API_KEY}&language=fr&query=${textSearch}&page=${page}`)
        .then(response => response.json())
        .then(responseJson => {
    
            dispatch({type:action_key.ALL_MOVIE_SEARCH,payload:responseJson.results})
            
        })
    }
        
}

export function recupeAllmovieData_search_after(textSearch,page){

  
    return function(dispatch){

        fetch(`${URL_POINT_BASE}/3/search/movie?api_key=${API_KEY}&language=fr&query=${textSearch}&page=${page}`)
        .then(response => response.json())
        .then(responseJson => {

            dispatch({type:action_key.ALL_MOVIE_SEARCH_AFTER,payload:responseJson.results})
            
        })
    }
        
}

export function recupe_Allmovie(){

    return function(dispatch){

        fetch(`https://api.themoviedb.org/3/discover/movie?language=fr&api_key=ed7a7f837813bd9a1990c5b08885df80&page=1`).then(response => response.json())
        .then(responseJson => {
            
            dispatch({type:action_key.ALL_MOVIE,payload:responseJson.results})

        })

    }

}


export function recupe_Allmovie_following(page){

    console.log('nbr page',page)

    return function(dispatch){

        fetch(`https://api.themoviedb.org/3/discover/movie?language=fr&api_key=ed7a7f837813bd9a1990c5b08885df80&page=${page}`).then(response => response.json())
        .then(responseJson => {
            
            dispatch({type:action_key.FOLLOWING_THE_MOVIE,payload:responseJson.results})

        })

    }

}