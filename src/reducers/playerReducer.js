import * as playerTypes from 'constants/playerActionTypes';

const defaultState = {
    data: {
        id: null,
        src: null
    }
}

export default function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case playerTypes.LOADED:
            return Object.assign({}, state, {
                data: {
                    id: action.payload.id,
                    src: action.payload.src
                }
            });
        case playerTypes.FAILED:
            return Object.assign({}, state, {
                error: action.payload.error
            });
        default:
            return state;
    }
}