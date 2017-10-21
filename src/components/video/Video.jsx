import React, {Component} from 'react';
import * as playerStates from 'constants/playerStates';
import PropTypes from 'prop-types';

const VIDEO_REF = 'VIDEO_REF';

export class Video extends Component {

    constructor(props) {
        super();
        this.props = props;
        this.onWillPlay = this.onWillPlay.bind(this);
        this.onWillPause = this.onWillPause.bind(this);
    }

    onWillPlay() {
        this.refs[VIDEO_REF].play();
    }

    onWillPause() {
        this.refs[VIDEO_REF].pause();
    }

    render() {
        const {data, videoState, onDidPlay, onDidPause} = this.props;
        if (videoState === playerStates.WILL_PLAY) {
            this.onWillPlay();
        }
        if (videoState === playerStates.WILL_PAUSE) {
            this.onWillPause();
        }
        return (
            <video
                className="player-video"
                ref={VIDEO_REF}
                src={data.src}
                onPlay={onDidPlay}
                onPause={onDidPause}
            />
        )
    }
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
    videoState: PropTypes.string,
    onDidPlay: PropTypes.func.isRequired,
    onDidPause: PropTypes.func.isRequired,
}

export default Video;