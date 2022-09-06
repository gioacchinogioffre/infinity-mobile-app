import axios from 'axios';

export const POST_USER = 'POST_USER'
export const GET_USER = 'GET_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_COMICS = 'GET_COMICS'
export const GET_REVIEWS = 'GET_REVIEWS'
export const POST_REVIEW = 'POST_REVIEW'

// USER

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

export function getUser(email, password) {
    console.log(password)
    return async function (dispatch) {
        try {
            const user = await axios.get(`/users/${email}?password=${password}`);

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

export function updateUser(userId, input) {
    return async function (dispatch) {
        try {
            const user = await axios.put(`/users/${userId}`, input);

            return dispatch({
                type: UPDATE_USER,
                payload: user.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

// COMIC

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

// REVIEW

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

export function postReview(review) {
    return async function (dispatch) {
        try {
            const newReview = await axios.post("/reviews", review);

            return dispatch({
                type: POST_REVIEW,
                payload: newReview.data
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

// ORDER