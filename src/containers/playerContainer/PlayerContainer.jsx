import React, {Component} from 'react';
import {connect} from 'react-redux';
import Player from '../../components/player/Player.jsx';
import {load} from '../../actions/playerActions';

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.load = this.load.bind(this);
        this.props = props;
        const {match} = this.props;
        this.load(match.params);
    }

    render() {
        const {player} = this.props;
        return (
            <div>
                <Player data={player.data}></Player>
            </div>
        )
    }

    load(opts) {
        this.props.dispatch(load(opts));
    }
}

export default connect((state) => ({
    player: state.playerReducer
}))(PlayerContainer);