import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Player from 'components/player/Player.jsx';
import {load} from 'actions/playerActions';
import Error from 'components/error/Error.jsx';

export class PlayerContainer extends Component {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
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
}

PlayerContainer.propTypes = {
    playerState: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        playerState: state.playerReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: (opts) => {
            dispatch(load(opts));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerContainer);