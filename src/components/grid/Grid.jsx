import React from 'react';
import GridRow from '../gridRow/GridRow.jsx';

export function Grid({cols, data = {items: []}, handleSelect}) {
    const rows = [];
    data.items.forEach((item, index) => {
        if (index % cols === 0) {
            rows.push([item]);
        } else {
            rows[rows.length - 1].push(item);
        }
    });
    return (
        <div>
            {rows.map((row, index) =>
                <GridRow
                    key={index}
                    row={row}
                    handleSelect={handleSelect}
                >
                </GridRow>
            )}
        </div>
    )
}

export default Grid;
