import React from 'react';
import {Link} from 'react-router';

const style = {
    width: '100px',
    height: '100px',
    margin: '5px',
    border: '1px solid #666',
    boxSizing: 'border-box',
    float: 'left'
}

export function GridItem({item, handleSelect}) {

    function handleClick() {
        handleSelect(item.id);
    }

    return (
        <Link to={`/player/${item.id}`}>
            <div
                style={style}
                id={item.id}
                onClick={handleClick}
            >
                {item.title}
            </div>
        </Link>
    )
}

export default GridItem;
