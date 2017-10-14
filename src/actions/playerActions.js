import * as playerTypes from '../constants/playerActionTypes';

export function load(payload) {
    return {
        type: playerTypes.LOAD,
        payload
    };
}

export function loaded(payload) {
    return {
        type: playerTypes.LOADED,
        payload
    }
}

export function failed(payload) {
    return {
        type: playerTypes.FAILED,
        payload
    }
}