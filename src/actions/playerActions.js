import * as playerTypes from 'constants/playerActionTypes';

export function failed(payload) {
    return {
        type: playerTypes.FAILED,
        payload
    }
}

export function playVideo() {
    return {
        type: playerTypes.PLAY_VIDEO
    }
}

export function pauseVideo() {
    return {
        type: playerTypes.PAUSE_VIDEO
    }
}

export function didPlayVideo() {
    return {
        type: playerTypes.DID_PLAY_VIDEO
    }
}

export function didPauseVideo() {
    return {
        type: playerTypes.DID_PAUSE_VIDEO
    }
}