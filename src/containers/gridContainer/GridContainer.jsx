import React, {Component} from 'react';
import {connect} from 'react-redux';
import Grid from '../../components/grid/Grid.jsx';
import {load} from '../../actions/gridActions';
import Error from '../../components/error/Error.jsx';

export class GridContainer extends Component {

    constructor(props) {
        super();
        this.load = this.load.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.props = props;
        this.load();
    }

    render() {
        const {gridState} = this.props;
        if (gridState.error) {
            return <Error errorMessage={gridState.error} />
        }
        return (
            <div>
                <Grid
                    data={gridState.data}
                    handleSelect={this.handleSelect}
                ></Grid>
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
    gridState: state.gridReducer
}))(GridContainer);