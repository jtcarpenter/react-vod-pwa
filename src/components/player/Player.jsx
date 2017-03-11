import React from 'react';

export const Player = ({data}) => {

    return (
        <div>
            <span>[playing asset with id: {data.id}]</span>
            <video controls>
                <source src={data.src}>
                </source>
            </video>
        </div>
    )
}

export default Player;



