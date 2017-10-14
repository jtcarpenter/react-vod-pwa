import playerReducer from 'reducers/playerReducer'
import * as playerTypes from 'constants/playerActionTypes'

const state = {
    data: {
        id: null,
        src: null
    }
}
const loadedAction = {
    type: playerTypes.LOADED,
    payload: {
        id: 1,
        src: 'test'
    }
}
const error = 'an error';
const failedAction = {
    type: playerTypes.FAILED,
    payload: {error}
}

describe('playerReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = playerReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    });

    it('should create return state with error on after fail action', () => {
        const actual = playerReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });
})