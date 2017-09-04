import {
    fromJS,
    Map
} from 'immutable'
import * as commonTypes from './actions/commonTypes'

const initialState = fromJS({ books: [] })

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case commonTypes.BOOK_LIST_REQUEST:
            return state
        case commonTypes.BOOK_LIST_SUCCESS:
            return fromJS(state).set('books', fromJS(action.payload))
        case commonTypes.BOOK_LIST_FAILURE:
            return state
        default: return state
    }
}