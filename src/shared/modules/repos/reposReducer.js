import {
    fromJS
} from 'immutable'
import * as reposTypes from './actions/reposTypes'

const initialState = fromJS({ repos: [] })

export const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case reposTypes.REPOS_LIST_REQUEST:
            return state
        case reposTypes.REPOS_LIST_SUCCESS:
            return fromJS(state).set('repos', fromJS(action.payload.items))
        case reposTypes.REPOS_LIST_FAILURE:
            return state
        default: return state
    }
}