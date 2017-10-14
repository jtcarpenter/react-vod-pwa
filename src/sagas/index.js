import {watchLoad as watchLoadGrid} from 'sagas/gridSaga'
import {watchLoad as watchLoadItem} from 'sagas/playerSaga'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
    yield [
        watchLoadGrid(),
        watchLoadItem()
    ]
}