import React from 'react';
import {Link} from 'react-router';

export function GridItem({item, handleSelect}) {

    function handleClick() {
        handleSelect(item.id);
    }

    return (
        <Link to={`/player/${item.id}`}>
            <div
                className="grid-item"
                id={item.id}
                onClick={handleClick}
            >
                {item.title}
            </div>
        </Link>
    )
}

export default GridItem;
