import {combineReducers} from 'redux'
import episodeReducer from 'reducers/episodeReducer'
import playerReducer from 'reducers/playerReducer'
import onlineReducer from 'reducers/onlineReducer'

export default combineReducers({
    episodeReducer,
    playerReducer,
    onlineReducer
});