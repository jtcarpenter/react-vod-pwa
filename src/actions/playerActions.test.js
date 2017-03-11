import * as actions from './playerActions'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
    it('should create an action to increment counter', () => {
        const expectedAction = {
          type: types.LOAD_PLAYER_DATA
        }
        expect(actions.load()).toEqual(expectedAction);
    })
})
