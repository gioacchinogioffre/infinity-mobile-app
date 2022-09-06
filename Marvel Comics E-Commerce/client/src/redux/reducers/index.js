// IMPORT ACTIONS HERE

import { 
   POST_USER,
   GET_USER,
   GET_COMICS,
   GET_REVIEWS,
   UPDATE_USER,
   POST_REVIEW
} from "../actions"


const initialState = {
    user: {},
    reviews: [],
    comics:[],
    orders: []
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        //USERS
            case POST_USER: return {...state}

            case GET_USER: return {...state, user: action.payload}

            case UPDATE_USER: return {...state, user: action.payload}


        case GET_COMICS: return {...state, comics: action.payload }

        //REVIEWS
            case GET_REVIEWS: return {...state, reviews: action.payload }

            case POST_REVIEW: return {...state}

        
        // case GET_SEARCH_COMICS: return { ...state, allProductsFiltered: action.payload }

        default: return {...state}

    }
}
