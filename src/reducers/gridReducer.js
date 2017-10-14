import * as homeTypes from 'constants/gridActionTypes';

const defaultState = {
    data: {
        items: []
    }
}

export default function gridReducer(state = defaultState, action) {
    switch (action.type) {
        case homeTypes.LOADED:
            return Object.assign({}, state, {
                data: action.payload
            });
        case homeTypes.FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state;
    }
}