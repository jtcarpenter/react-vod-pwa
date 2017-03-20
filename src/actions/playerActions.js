import * as types from '../constants/playerActionTypes';

export function load(opts) {
    return {
        type: types.LOAD,
        data: opts
    };
}

export function loaded(data) {
    return {
        type: types.LOADED,
        data
    }
}
