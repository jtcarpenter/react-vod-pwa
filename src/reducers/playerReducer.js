import * as playerTypes from 'constants/playerActionTypes';
import * as playerStates from 'constants/playerStates';

const defaultState = {
    videoState: null
}

export default function playerReducer(state = defaultState, action) {
    switch (action.type) {
        case playerTypes.PLAY_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.WILL_PLAY
            });
        case playerTypes.PAUSE_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.WILL_PAUSE
            });
        case playerTypes.DID_PLAY_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.PLAYING
            });
        case playerTypes.DID_PAUSE_VIDEO:
            return Object.assign({}, state, {
                videoState: playerStates.PAUSED
            });
        default:
            return state;
    }
}