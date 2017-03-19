import * as types from '../constants/playerActionTypes';

export function load(opts) {
    return {
        type: types.LOAD,
        data: opts
    };
}
