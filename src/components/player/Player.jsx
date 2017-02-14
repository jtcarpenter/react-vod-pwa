import React from 'react';

//http://camendesign.co.uk/code/video_for_everybody/test.html

export const Player = () => {

    const src = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
    return (
        <div>
            <video controls>
                <source src={src}>
                </source>
            </video>
        </div>
    )
}

export default Player;



