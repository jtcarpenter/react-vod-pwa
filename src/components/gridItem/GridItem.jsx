import React from 'react';
import {Link} from 'react-router-dom';

export function GridItem({item}) {

    return (
        <Link to={`/player/${item.id}`} className="grid-item">
            <div
                id={`item-${item.id}`}
            >
                {item.title}
            </div>
        </Link>
    )
}

export default GridItem;