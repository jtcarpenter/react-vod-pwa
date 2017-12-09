import * as onlineActions from 'actions/onlineActions'
import * as onlineActionTypes from 'constants/onlineActionTypes'

describe('onlineActions', () => {
    it('should create an action when online', () => {
        const expectedAction = {
            type: onlineActionTypes.ONLINE
        }
        expect(onlineActions.online()).toEqual(expectedAction);
    });

    it('should create an action when offline', () => {
        const expectedAction = {
            type: onlineActionTypes.OFFLINE
        }
        expect(onlineActions.offline()).toEqual(expectedAction);
    });
});