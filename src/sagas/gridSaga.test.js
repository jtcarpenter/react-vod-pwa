import {loaded} from './gridSaga'
import * as actions from '../actions/gridActions'
import {call, put} from 'redux-saga/effects'
import {api} from '../services/api'

const gridData = {items: []};

describe('gridSaga', () => {

    const generator = loaded()

    it('should yield actions.load', () => {
        const next = generator.next(actions.load())
        expect(next.value).toEqual(call(api.grid.get));
    });

    it('should yield actions.loaded(gridData)', () => {
        const next = generator.next(gridData);
        expect(next.value).toEqual(put(actions.loaded(gridData)));
    })
});
