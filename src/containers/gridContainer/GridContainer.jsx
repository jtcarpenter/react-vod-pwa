import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'components/grid/Grid.jsx';
import {load} from 'actions/episodeActions';
import Error from 'components/error/Error.jsx';
import {episodesSelector} from 'reducers/episodeReducer';

export class GridContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        this.props.load();
    }

    render() {
        const {episodes, error} = this.props;
        if (error) {
            return <Error errorMessage={error} />
        }
        return (
            <Grid
                items={episodes}
            >
            </Grid>
        )
    }
}

GridContainer.propTypes = {
    episodes: PropTypes.array.isRequired,
    error: PropTypes.string,
    load: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        episodes: episodesSelector(state.episodeReducer.byId),
        error: state.episodeReducer.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        load: () => {
            dispatch(load());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GridContainer);