import * as types from '../constants/gridActionTypes';

export function load() {
    return {
        type: types.LOAD
    };
}

export function loaded(data) {
    return {
        type: types.LOADED,
        data
    }
}
