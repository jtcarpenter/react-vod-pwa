import React from 'react';
import * as playerStates from 'constants/playerStates';
import PlayerCtrl from 'components/playerCtrl/PlayerCtrl.jsx';
import * as copy from 'constants/copy';

export function PlayButton({videoState, handlePlay, handlePause}) {

    const icon = videoState === playerStates.PLAYING
        ? copy.ICON_PAUSE
        : copy.ICON_PLAY;

    const handleClick = () => {
        if (videoState === playerStates.PLAYING) {
            return handlePause();
        }
        return handlePlay();
    }

    return (
        <PlayerCtrl
            type="button"
            icon={icon}
            borderRadius="50%"
            borderColor="none"
            onClick={handleClick}
        >
        </PlayerCtrl>
    );
}

export default PlayButton;