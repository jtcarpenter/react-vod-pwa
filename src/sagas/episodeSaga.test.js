import {loaded} from 'sagas/episodeSaga'
import * as actions from 'actions/episodeActions'
import {call, put} from 'redux-saga/effects'
import {api} from 'services/api'

const episodeData = {episodes: []};
const episodeError = {error: 'an error'};
const actionPayload = {};

describe('episodeSaga', () => {

    let generator = null;

    beforeEach(() => {
        generator = loaded({payload: actionPayload});
    });

    it('should yield actions.load', () => {
        const next = generator.next(actions.load(actionPayload))
        expect(next.value).toEqual(call(api.episodes.get, actionPayload));
    });

    it('should yield actions.loaded(episodeData)', () => {
        generator.next(actions.load(actionPayload));
        const next = generator.next(episodeData);
        expect(next.value).toEqual(put(actions.loaded(episodeData)));
    });

    it('should yield actions.failed(episodeError)', () => {
        generator.next(actions.load(actionPayload));
        const next = generator.next(episodeError);
        expect(next.value).toEqual(put(actions.failed(episodeError)));
    });
});