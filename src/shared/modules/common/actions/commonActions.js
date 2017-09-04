import * as actionTypes from './commonTypes'

export function bookListRequest(payload) {
    return {
        type: actionTypes.BOOK_LIST_REQUEST,
        payload,
    }
}

export function bookListSuccess(payload) {
    return {
        type: actionTypes.BOOK_LIST_SUCCESS,
        payload,
    }
}

export function bookListFailure(payload) {
    return {
        type: actionTypes.BOOK_LIST_FAILURE,
        payload,
    }
}


export const bookListFetch = () => (dispatch, getState) => {
    dispatch(bookListRequest());
    return fetch("http://localhost:3000/api/news")
        .then(response => response.json())
        .then(books => dispatch(bookListSuccess(books)))
        .catch(err => dispatch(bookListFailure(err)));
};
