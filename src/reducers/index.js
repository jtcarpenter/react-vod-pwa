import {combineReducers} from 'redux'
import counter from './counter'
import grid from './grid'
import player from './player'

export default combineReducers({
    counter,
    grid,
    player
});