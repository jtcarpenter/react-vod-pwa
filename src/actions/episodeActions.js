import * as episodeTypes from 'constants/episodeActionTypes';

export function load(payload) {
    return {
        type: episodeTypes.LOAD,
        payload
    };
}

export function loaded(payload) {
    return {
        type: episodeTypes.LOADED,
        payload
    }
}

export function failed(payload) {
    return {
        type: episodeTypes.FAILED,
        payload
    }
}