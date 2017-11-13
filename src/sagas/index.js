import {watchLoad as watchLoadEpisode} from 'sagas/episodeSaga'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
    yield [
        watchLoadEpisode()
    ]
}