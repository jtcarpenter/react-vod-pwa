import React from 'react';
import {Link} from 'react-router-dom';

export function GridItem({item, handleSelect}) {

    function handleClick() {
        handleSelect(item.id);
    }

    return (
        <Link to={`/player/${item.id}`} className="grid-item">
            <div
                id={`item-${item.id}`}
                onClick={handleClick}
            >
                {item.title}
            </div>
        </Link>
    )
}

export default GridItem;