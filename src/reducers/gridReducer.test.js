import gridReducer from './gridReducer'
import * as gridTypes from '../constants/gridActionTypes'

const state = {
    data: {
        items: []
    }
}
const loadedAction = {
    type: gridTypes.LOADED,
    payload: {items: []}
}
const error = 'an error';
const failedAction = {
    type: gridTypes.FAILED,
    payload: {error}
}

describe('gridReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = gridReducer(state, loadedAction);
        expect(actual.data).toEqual(loadedAction.payload);
    });

    it('should create return state with error on after fail action', () => {
        const actual = gridReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });
});