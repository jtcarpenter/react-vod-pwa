import React from 'react';

export function Player({data}) {
    return (
        <div className="player">
            <span>[playing asset with id: {data.id}]</span>
            <video controls src={data.src}>
            </video>
        </div>
    )
}

export default Player;