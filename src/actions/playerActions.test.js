import * as actions from 'actions/playerActions'
import * as playerTypes from 'constants/playerActionTypes'

const playerOpts = {id: 0};
const playerData = {
    id: 0,
    title: 'test',
    src: 'test'
}
const error = 'an error';

describe('playerActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: playerTypes.LOAD,
            payload: playerOpts
        }
        expect(actions.load(playerOpts)).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: playerTypes.LOADED,
            payload: playerData
        }
        expect(actions.loaded(playerData)).toEqual(expectedAction);
    });

    it('should create an action to return an error', () => {
        const expectedAction = {
            type: playerTypes.FAILED,
            payload: error
        }
        expect(actions.failed(error)).toEqual(expectedAction);
    });
})