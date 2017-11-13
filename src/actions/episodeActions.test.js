import * as actions from 'actions/episodeActions'
import * as episodeTypes from 'constants/episodeActionTypes'

const episodeData = {items: []};
const error = 'an error';

describe('episodeActions', () => {
    it('should create an action to load data', () => {
        const expectedAction = {
            type: episodeTypes.LOAD
        }
        expect(actions.load()).toEqual(expectedAction);
    });

    it('should create an action to return data', () => {
        const expectedAction = {
            type: episodeTypes.LOADED,
            payload: episodeData
        }
        expect(actions.loaded(episodeData)).toEqual(expectedAction);
    });

    it('should create an action to return an error', () => {
        const expectedAction = {
            type: episodeTypes.FAILED,
            payload: error
        }
        expect(actions.failed(error)).toEqual(expectedAction);
    });
})