import episodeReducer, {episodesSelector, episodesToHash, episodeSelector}
    from 'reducers/episodeReducer';
import * as episodeTypes from 'constants/episodeActionTypes';

const state = {
    byId: {},
    allIds: []
}
const mockEpisode = {id: 'test'};
const mockEpisode2 = {id: 'test2'};
const error = 'an error';
const loadedAction = {
    type: episodeTypes.LOADED,
    payload: {episodes: [mockEpisode]}
}
const failedAction = {
    type: episodeTypes.FAILED,
    payload: {error}
}
const mockEpisodeArray = [mockEpisode, mockEpisode2];
const mockEpisodesHash = {
    [mockEpisode.id]: mockEpisode,
    [mockEpisode2.id]: mockEpisode2
}

describe('episodeReducer', () => {
    it('should create return state with loaded data', () => {
        const actual = episodeReducer(state, loadedAction);
        expect(actual).toEqual({
            byId: {[mockEpisode.id]: mockEpisode},
            allIds: [mockEpisode.id]});
    });

    it('should create return state with error on after fail action', () => {
        const actual = episodeReducer(state, failedAction);
        expect(actual.error).toEqual(failedAction.payload.error);
    });
});

describe('episodesToHash', () => {
    it('should create a hash of array of data', () => {
        const actual = episodesSelector(mockEpisodesHash);
        expect(actual).toEqual(mockEpisodeArray);
    })
});

describe('episodesSelector', () => {
    it('should return an array of data from a hash', () => {
        const actual = episodesToHash(mockEpisodeArray);
        expect(actual).toEqual(mockEpisodesHash);
    })
});

describe('episodeSelector', () => {
    it('should return an array of data from a hash', () => {
        const actual = episodesToHash(mockEpisodeArray);
        expect(actual).toEqual(mockEpisodesHash, 'test');
    })
});