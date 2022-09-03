// IMPORT ACTIONS HERE

import { 
   POST_USER,
   GET_USER,
   GET_COMICS,
   GET_REVIEWS
} from "../actions"


const initialState = {
    user: {},
    reviews: [],
    comics:[],
    orders: []
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        case GET_COMICS: return {...state, comics: action.payload }

        case GET_REVIEWS: return {...state, reviews: action.payload }
        
        case POST_USER: return {...state}

        case GET_USER: return {...state, user: action.payload}

        // case GET_SEARCH_COMICS: return { ...state, allProductsFiltered: action.payload }

        default: return {...state}

    }
}
