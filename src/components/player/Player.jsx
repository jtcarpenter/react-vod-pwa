import React from 'react';
import {Link} from 'react-router';

export function Player({data}) {
    return (
        <div>
            <span>[playing asset with id: {data.id}]</span>
            <Link to={'/'}>[&#9668; BACK]</Link>
            <video controls src={data.src}>
            </video>
        </div>
    )
}

export default Player;



