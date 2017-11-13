import {combineReducers} from 'redux'
import episodeReducer from 'reducers/episodeReducer'
import playerReducer from 'reducers/playerReducer'

export default combineReducers({
    episodeReducer,
    playerReducer
});