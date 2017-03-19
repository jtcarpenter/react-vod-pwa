import {watchLoad as watchLoadGrid} from './grid'
import {watchLoad as watchLoadItem} from './player'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
  yield [
    watchLoadGrid(),
    watchLoadItem()
  ]
}