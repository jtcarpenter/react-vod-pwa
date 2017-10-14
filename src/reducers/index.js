import {combineReducers} from 'redux'
import gridReducer from 'reducers/gridReducer'
import playerReducer from 'reducers/playerReducer'

export default combineReducers({
    gridReducer,
    playerReducer
});