// IMPORT ACTIONS HERE

import { 
   GET_USER,
} from "../actions"


const initialState = {
    user: {},
    token: ''
}

export default function rootReducer(state = initialState, action) {

    switch(action.type) {

        //USERS

            case GET_USER: 
            
            if (action.payload.token) localStorage.setItem('user', JSON.stringify(action.payload.token))
            return {...state, user: action.payload.user , token: action.payload.token}

        default: return {...state}

    }
}
