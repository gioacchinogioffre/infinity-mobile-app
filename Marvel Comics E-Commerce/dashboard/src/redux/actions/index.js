import axios from 'axios';

export const GET_USER = 'GET_USER'

// USER

export function getUser(input) {
    return async function (dispatch) {
        try {
            const user = await axios.post('/auth/signin', input);

            return dispatch({
                type: GET_USER,
                payload: user.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}
