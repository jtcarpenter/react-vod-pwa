import * as onlineActionTypes from 'constants/onlineActionTypes';

const defaultState = {
    online: navigator.onLine
}

export default function reducerReducer(state = defaultState, action) {
    switch (action.type) {
        case onlineActionTypes.ONLINE:
            return Object.assign({}, state, {
                online: true
            });
        case onlineActionTypes.OFFLINE:
            return Object.assign({}, state, {
                online: false
            });
        default:
            return state;
    }
}