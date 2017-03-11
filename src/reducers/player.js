import * as types from '../constants/playerActionTypes';

const defaultState = {
    data: {
        id: null,
        src: null
    }
}

export default function grid(state = defaultState, action) {
    switch (action.type) {
        case types.LOAD:
            return Object.assign({}, state, {
                data: {
                    id: action.data.id,
                    src: action.data.src
                }
            });
        default:
            return state;
    }
};