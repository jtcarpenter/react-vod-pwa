import React from 'react';

export function BackButton({handleBack}) {

    return (
        <button
            type="button"
            className="icon-arrow-left player-ctrl player-ctrl__back"
            onClick={handleBack}
        >
        </button>
    );
}

export default BackButton;