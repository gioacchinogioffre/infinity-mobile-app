import axios from 'axios';

export const POST_USER = 'POST_USER'
export const GET_USER = 'GET_USER'
export const GET_COMICS = 'GET_COMICS'
export const GET_REVIEWS = 'GET_REVIEWS'

export function postUser(user) {
    return async function (dispatch) {
        try {
            const newUser = await axios.post("/auth/signup", user);

            return dispatch({
                type: POST_USER,
                payload: newUser.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function getUser(email) {
    return async function (dispatch) {
        try {
            const user = await axios.get(`/users/${email}`);

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

export function getComics() {
    return async function (dispatch) {
        try {
            const info = await axios("/comics")
            return dispatch({
                type: GET_COMICS,
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getReviews() {
    return async function (dispatch) {
        try {
            const info = await axios("/reviews")
            return dispatch({
                type: GET_REVIEWS,
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}