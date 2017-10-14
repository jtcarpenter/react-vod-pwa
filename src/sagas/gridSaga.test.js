import {loaded} from 'sagas/gridSaga'
import * as actions from 'actions/gridActions'
import {call, put} from 'redux-saga/effects'
import {api} from 'services/api'

const gridData = {items: []};
const gridError = {error: 'an error'};

describe('gridSaga', () => {

    let generator = null;

    beforeEach(() => {
        generator = loaded();
    });

    it('should yield actions.load', () => {
        const next = generator.next(actions.load())
        expect(next.value).toEqual(call(api.grid.get));
    });

    it('should yield actions.loaded(gridData)', () => {
        generator.next(actions.load());
        const next = generator.next(gridData);
        expect(next.value).toEqual(put(actions.loaded(gridData)));
    });

    it('should yield actions.failed(gridError)', () => {
        generator.next(actions.load());
        const next = generator.next(gridError);
        expect(next.value).toEqual(put(actions.failed(gridError)));
    });
});