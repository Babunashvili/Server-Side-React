import * as actionTypes from './reposTypes'

export function reposListRequest(payload) {
    return {
        type: actionTypes.REPOS_LIST_REQUEST,
        payload,
    }
}

export function reposListSuccess(payload) {
    return {
        type: actionTypes.REPOS_LIST_SUCCESS,
        payload,
    }
}

export function reposListFailure(payload) {
    return {
        type: actionTypes.REPOS_LIST_FAILURE,
        payload,
    }
}


export const reposListFetch = () => (dispatch, getState) => {
    dispatch(reposListRequest());
    return fetch("https://api.github.com/search/repositories?q=react&sort=watchers")
        .then(response => response.json())
        .then(repos => dispatch(reposListSuccess(repos)))
        .catch(err => dispatch(reposListFailure(err)));
};
