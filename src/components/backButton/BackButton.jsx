import React from 'react';
import PlayerCtrl from 'components/playerCtrl/PlayerCtrl.jsx';
import * as copy from 'constants/copy';

export function BackButton({handleBack}) {

    return (
        <PlayerCtrl
            type="button"
            icon={copy.ICON_BACK}
            borderRadius="10px"
            onClick={handleBack}
        >
        </PlayerCtrl>
    );
}

export default BackButton;