import * as actions from './gridActions'
import * as gridTypes from '../constants/gridActionTypes'

const gridData = {items: []};
const error = 'an error';

describe('gridActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: gridTypes.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: gridTypes.LOADED,
            payload: gridData
        }
        expect(actions.loaded(gridData)).toEqual(expectedAction);
    });

    it('should create an action to return an error', () => {
        const expectedAction = {
            type: gridTypes.FAILED,
            payload: error
        }
        expect(actions.failed(error)).toEqual(expectedAction);
    });
})