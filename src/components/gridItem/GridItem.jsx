import React from 'react';
import {Link} from 'react-router-dom';

export function GridItem({item}) {

    return (
        <Link to={`/player/${item.id}`} className="grid-item">
            <div
                id={`item-${item.id}`}
            >
                <h2 className="grid-item__title">
                    {item.title}
                </h2>
                <img
                    className="grid-item__thumb"
                    src={item.thumb}
                />
            </div>
        </Link>
    )
}

export default GridItem;