import {action_key} from '../actions/index';

const inisialState = {
    allMovieRecomande: [],
    allMovieSearch : [],
    MovieFavories:[]
};

export default function(state = inisialState,action){

    switch(action.type){

        case action_key.ALL_MOVIE:
        return {
            ...state,
            allMovieRecomande: action.payload
        }

        case action_key.ALL_MOVIE_SEARCH:
        return {
            ...state,
            allMovieSearch: action.payload
        }

        case action_key.ALL_MOVIE_SEARCH_AFTER: 
        return {
            ...state,
            allMovieSearch: [...state.allMovieSearch,...action.payload]
        }

        case action_key.FOLLOWING_THE_MOVIE:
        return{
            ...state,
            allMovieRecomande:[...state.allMovieRecomande,...action.payload]
        }

        case action_key.KEY_MOIVE_FAVORIES:

            const exist_favorieBoolean = state.MovieFavories.findIndex(elm => elm.id === action.payload.id);
            
            if(exist_favorieBoolean !== -1){

                return {
                    ...state,
                    MovieFavories:state.MovieFavories.filter((elm,index) => elm.id !== action.payload.id)
                }

            }

            return {
                ...state,
                MovieFavories:[...state.MovieFavories,action.payload]
            }
           
            
    }


    return state;
}
