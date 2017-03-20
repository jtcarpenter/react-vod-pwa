import * as actions from './playerActions'
import * as types from '../constants/playerActionTypes'

const playerOpts = {id: 0};
const playerData = {
    id: 0,
    title: 'test',
    src: 'test'
}

describe('playerActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: types.LOAD,
            data: playerOpts
        }
        expect(actions.load(playerOpts)).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: types.LOADED,
            data: playerData
        }
        expect(actions.loaded(playerData)).toEqual(expectedAction);
    })
})
