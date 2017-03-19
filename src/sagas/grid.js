import {call, put, takeEvery} from 'redux-saga/effects'
import * as types from '../constants/gridActionTypes';

const GRID_DATA_URL = '/grid-data.json';
const request = (opts) => fetch(GRID_DATA_URL)
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

// Our worker Saga: will perform the async increment task
export function *loaded() {
    const data = yield call(request, {});
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