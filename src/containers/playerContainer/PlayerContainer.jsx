import React, {Component} from 'react';
import {connect} from 'react-redux';
import Player from 'components/player/Player.jsx';
import {load} from 'actions/playerActions';
import Error from 'components/error/Error.jsx';

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.load = this.load.bind(this);
        this.props = props;
        const {match} = this.props;
        this.load(match.params);
    }

    render() {
        const {playerState} = this.props;
        if (playerState.error) {
            return <Error errorMessage={playerState.error} />
        }
        return (
            <div>
                <Player data={playerState.data}></Player>
            </div>
        )
    }

    load(opts) {
        this.props.dispatch(load(opts));
    }
}

export default connect((state) => ({
    playerState: state.playerReducer
}))(PlayerContainer);