import React from 'react';
import GridRow from '../gridRow/GridRow.jsx';

export class Grid extends React.Component {

    constructor() {
        super();
        this.handleSelect = this.handleSelect.bind(this);
        this.navigate = this.navigate.bind(this);
    }

    render() {
        const {cols, data} = this.props;
        let rows = [];
        data.items.forEach((item, index) => {
            if (index % cols === 0) {
                rows.push([item]);
            } else {
                rows[rows.length - 1].push(item);
            }
        });
        return (
            <div>
                {rows.map((row, index) => {
                    return (
                        <GridRow
                            key={index}
                            row={row}
                            handleSelect={this.handleSelect}
                        >
                        </GridRow>
                    )
                })}
            </div>
        )
    }

    handleSelect(index) {
        console.log(index + ' selected');
    }

    navigate() {
        console.log('navigate')
    }
}

export default Grid;
