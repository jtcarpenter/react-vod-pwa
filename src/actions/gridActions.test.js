import * as actions from './gridActions'
import * as types from '../constants/ActionTypes'

describe('actions', () => {
    it('should create an action to increment counter', () => {
        const expectedAction = {
          type: types.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    })
})
