import React from 'react';
import GridItem from '../gridItem/GridItem.jsx';

const style = {
    width: '330px',
    height: '110px',
    margin: '5px',
    border: '1px dashed #666'
}

export function GridRow({row, handleSelect}) {
    return (
        <div style={style}>
            {row.map((item, index) =>
                <GridItem
                    key={index}
                    item={item}
                    handleSelect={handleSelect}
                >
                </GridItem>
            )}
        </div>
    )
}

export default GridRow;
