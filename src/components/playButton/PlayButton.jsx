import React from 'react';
import * as playerStates from 'constants/playerStates';

export function PlayButton({videoState, handlePlay, handlePause}) {

    const className = videoState === playerStates.PLAYING
        ? 'icon-pause player-ctrl player-ctrl__play'
        : 'icon-play player-ctrl player-ctrl__play';

    const handleClick = () => {
        if (videoState === playerStates.PLAYING) {
            return handlePause();
        }
        return handlePlay();
    }

    return (
        <button
            type="button"
            className={className}
            onClick={handleClick}
        >
        </button>
    );
}

export default PlayButton;