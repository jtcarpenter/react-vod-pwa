import React from 'react';
import GridItem from '../gridItem/GridItem.jsx';

export function Grid({data = {items: []}, handleSelect}) {
    return (
        <div className="grid">
            {data.items.map((item, index) =>
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

export default Grid;
