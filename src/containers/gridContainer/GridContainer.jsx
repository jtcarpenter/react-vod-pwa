import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid.jsx';
import {load} from 'actions/gridActions';
import Error from 'components/error/Error.jsx';

export class GridContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        this.props.load();
    }

    render() {
        const {gridState} = this.props;
        if (gridState.error) {
            return <Error errorMessage={gridState.error} />
        }
        return (
            <Grid
                data={gridState.data}
            >
            </Grid>
        )
    }
}

GridContainer.propTypes = {
    gridState: PropTypes.object.isRequired,
    load: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        gridState: state.gridReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(load());
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(GridContainer);