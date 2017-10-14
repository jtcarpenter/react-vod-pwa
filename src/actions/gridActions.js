import * as gridTypes from '../constants/gridActionTypes';

export function load() {
    return {
        type: gridTypes.LOAD,
    };
}

export function loaded(payload) {
    return {
        type: gridTypes.LOADED,
        payload
    }
}

export function failed(payload) {
    return {
        type: gridTypes.FAILED,
        payload
    }
}