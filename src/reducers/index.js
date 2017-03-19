import {combineReducers} from 'redux'
import gridReducer from './gridReducer'
import playerReducer from './playerReducer'

export default combineReducers({
    gridReducer,
    playerReducer
});