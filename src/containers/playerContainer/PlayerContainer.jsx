import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Player from 'components/player/Player.jsx';
import {
    load,
    playVideo,
    pauseVideo,
    didPlayVideo,
    didPauseVideo
} from 'actions/playerActions';
import Error from 'components/error/Error.jsx';

export class PlayerContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        const {match} = this.props;
        this.props.load(match.params);
        this.handleBack = this.handleBack.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
    }

    handleBack() {
        this.setState({
            shouldDoBack: true
        });
    }

    handlePlay() {
        this.props.playVideo();
    }

    handlePause() {
        this.props.pauseVideo();
    }

    render() {
        const {playerState} = this.props;
        if (playerState.error) {
            return <Error errorMessage={playerState.error} />
        }
        if (this.state && this.state.shouldDoBack) {
            return <Redirect push to="/" />
        }
        return (
            <Player
                data={playerState.data}
                videoState={playerState.videoState}
                handleBack={this.handleBack}
                handlePlay={this.handlePlay}
                handlePause={this.handlePause}
                onDidPlay={this.props.onDidPlay}
                onDidPause={this.props.onDidPause}
            >
            </Player>
        )
    }
}

PlayerContainer.propTypes = {
    playerState: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired,
    playVideo: PropTypes.func.isRequired,
    pauseVideo: PropTypes.func.isRequired,
    onDidPlay: PropTypes.func.isRequired,
    onDidPause: PropTypes.func.isRequired,
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
        },
        playVideo: () => {
            dispatch(playVideo());
        },
        pauseVideo: () => {
            dispatch(pauseVideo());
        },
        onDidPlay: () => {
            dispatch(didPlayVideo());
        },
        onDidPause: () => {
            dispatch(didPauseVideo());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PlayerContainer);