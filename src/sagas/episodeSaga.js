import {call, put, takeEvery} from 'redux-saga/effects'
import * as episodeTypes from 'constants/episodeActionTypes'
import * as actions from 'actions/episodeActions'
import {api} from 'services/api'

// Our worker Saga: will perform the async task
export function *loaded(action) {
    const data = yield call(api.episodes.get, action.payload);
    if (data.error) {
        yield put(actions.failed(data));
    } else {
        yield put(actions.loaded(data));
    }
}

// Our watcher Saga: spawn a new loaded task on each LOAD
export function *watchLoad() {
    yield takeEvery(episodeTypes.LOAD, loaded)
}