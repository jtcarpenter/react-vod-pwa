import * as types from '../constants/playerActionTypes';

// TODO: change to async request action
export function load(opts) {
    return {
        type: types.LOAD,
        data: opts
    };
}
