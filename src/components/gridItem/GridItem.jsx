import React from 'react';

const style = {
    width: '100px',
    height: '100px',
    margin: '5px',
    border: '1px solid #666',
    boxSizing: 'border-box',
    float: 'left'
}

export const GridRow = ({item, handleSelect}) => {

    function handleClick(event) {
        handleSelect(item.id);
    }

    return (
        <div
            style={style}
            id={item.id}
            onClick={handleClick}
        >
            {item.title}
        </div>
    )
}

export default GridRow;
