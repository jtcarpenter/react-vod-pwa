import React from 'react';
import styled from 'styled-components';
import BackButton from
    'components/backButton/BackButton.jsx';
import PlayButton from
    'components/playButton/PlayButton.jsx';
import Video from
    'components/video/Video.jsx';
import PlayerCtrls from 'components/playerCtrls/PlayerCtrls.jsx';
import PlayerTitle from 'components/playerTitle/PlayerTitle.jsx';
import {media} from 'helpers/styleHelper';

const StyledDiv = styled.div`
    border-radius: 10px;
    overflow: hidden;
    padding: 10px 0 15px 0;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.4);
    width: 80%;
    margin: 0 10%;
    bottom: 30%;
    ${media.PORTRAIT`
        bottom: 50%;
    `};
    ${media.LANDSCAPE`
        bottom: 10%;
    `};
`

export function Player({
        data,
        videoState,
        handleBack,
        handlePlay,
        handlePause,
        onDidPlay,
        onDidPause
    }) {

    return [
        <Video
            key="video"
            data={data}
            videoState={videoState}
            onDidPlay={onDidPlay}
            onDidPause={onDidPause}
        />,
        <StyledDiv key="player-ctrls">
            <PlayerTitle>
                {data.title}
            </PlayerTitle>
            <PlayerCtrls>
                <BackButton
                    handleBack={handleBack}
                />
                <PlayButton
                    videoState={videoState}
                    handlePlay={handlePlay}
                    handlePause={handlePause}
                />
            </PlayerCtrls>
        </StyledDiv>
    ]
}

export default Player;