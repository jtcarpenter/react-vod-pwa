import * as types from '../constants/actionTypes';

const defaultState = {
    data: {
        items: []
    }
}

export default function grid(state = defaultState, action) {
    switch (action.type) {
        case types.LOAD_GRID_DATA:
            return Object.assign({}, state, {
                data: action.data
            });
        default:
            return state;
    }
};