import {hello} from './hello'
import {watchLoad} from './grid'

// Single entry point to start all Sagas at once
export default function *rootSaga() {
  yield [
    hello(),
    watchLoad()
  ]
}