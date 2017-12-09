import onlineReducer from 'reducers/onlineReducer';
import * as onlineActionTypes from 'constants/onlineActionTypes';

const mockState = {online: false}
const onlineAction = {
    type: onlineActionTypes.ONLINE
};
const offlineAction = {
    type: onlineActionTypes.OFFLINE
};

describe('onlineReducer', () => {
    it('should create state with online true', () => {
        const actual = onlineReducer(mockState, onlineAction);
        expect(actual).toEqual({online: true})
    });

    it('should create state with online false', () => {
        const actual = onlineReducer(mockState, offlineAction);
        expect(actual).toEqual({online: false});
    });
});