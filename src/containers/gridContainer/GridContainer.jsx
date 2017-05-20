import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '../../components/grid/Grid.jsx';
import {load} from '../../actions/gridActions';

export class GridContainer extends Component {

    constructor(props) {
        super();
        this.load = this.load.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.load();
    }

    render() {
        const {grid} = this.props;
        let content = <h2>Couldn't load any assets</h2>;
        if (grid.data.items) {
            content = <Grid
                data={grid.data}
                handleSelect={this.handleSelect}
            ></Grid>;
        }
        return (
            <div>
                {content}
            </div>
        )
    }

    load() {
        this.props.dispatch(load());
    }

    handleSelect(index) {
        console.log(`${index} selected`);
    }
}

export default connect((state) => ({
    grid: state.gridReducer
}))(GridContainer);