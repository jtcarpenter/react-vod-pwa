import {call, put, takeEvery} from 'redux-saga/effects'
import * as types from '../constants/playerActionTypes';

const PLAYER_DATA_URL = '/item-data';
const request = (opts) => fetch(`${PLAYER_DATA_URL}-${opts.id}.json`)
    .then((response) => {
        if (response.status / 100 !== 2) {
            return {error: 'error'};
        }
        return response.json()
            .then((data) => data);
    })
    .catch((error) => {
        throw error;
    })

// Our worker Saga: will perform the async task
export function *loaded(opts) {
    const data = yield call(request, opts.data);
    if (data.error) {
        // TODO: handle error
    }
    yield put({
        type: types.LOADED,
        data
    })
}

// Our watcher Saga: spawn a new loaded task on each LOAD
export function *watchLoad() {
    yield takeEvery(types.LOAD, loaded)
}