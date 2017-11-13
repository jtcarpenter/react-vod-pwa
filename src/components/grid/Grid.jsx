import React from 'react';
import GridItem from 'components/gridItem/GridItem.jsx';

export function Grid({items = []}) {
    return (
        <div className="grid">
            {items.map((item, index) =>
                <GridItem
                    key={index}
                    item={item}
                >
                </GridItem>
            )}
        </div>
    )
}

export default Grid;