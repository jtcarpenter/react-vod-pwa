import * as types from '../constants/gridActionTypes';

const defaultState = {
    data: {
        items: []
    }
}

export default function grid(state = defaultState, action) {
    switch (action.type) {
        case types.LOADED:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
}