import {call, put, takeEvery} from 'redux-saga/effects'
import * as types from '../constants/gridActionTypes'
import * as actions from '../actions/gridActions'
import {api} from '../services/api'

// Our worker Saga: will perform the async task
export function *loaded() {
    const data = yield call(api.grid.get);
    if (data.error) {
        // TODO: handle error
    }
    yield put(actions.loaded(data));
}

// Our watcher Saga: spawn a new loaded task on each LOAD
export function *watchLoad() {
    yield takeEvery(types.LOAD, loaded)
}