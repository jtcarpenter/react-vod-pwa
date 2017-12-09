import * as onlineTypes from 'constants/onlineActionTypes';

export function online() {
    return {
        type: onlineTypes.ONLINE
    };
}

export function offline() {
    return {
        type: onlineTypes.OFFLINE
    };
}