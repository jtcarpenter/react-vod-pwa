import {watchLoad as watchLoadGrid} from './gridSaga'
import {watchLoad as watchLoadItem} from './playerSaga'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
  yield [
    watchLoadGrid(),
    watchLoadItem()
  ]
}