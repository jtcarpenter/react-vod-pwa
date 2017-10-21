import React from 'react';
import BackButton from
    'components/backButton/BackButton.jsx';
import PlayButton from
    'components/playButton/PlayButton.jsx';
import Video from
    'components/video/Video.jsx';

export function Player({
        data,
        videoState,
        handleBack,
        handlePlay,
        handlePause,
        onDidPlay,
        onDidPause
    }) {

    return (
        <div className="player">
            <Video
                data={data}
                videoState={videoState}
                onDidPlay={onDidPlay}
                onDidPause={onDidPause}
            />
            <div className="player-ctrls">
                <h1 className="player-ctrls-title">
                    {data.title}
                </h1>
                <div className="player-ctrls-btns">
                    <BackButton
                        handleBack={handleBack}
                    />
                    <PlayButton
                        videoState={videoState}
                        handlePlay={handlePlay}
                        handlePause={handlePause}
                    />
                </div>
            </div>
        </div>
    )
}

export default Player;