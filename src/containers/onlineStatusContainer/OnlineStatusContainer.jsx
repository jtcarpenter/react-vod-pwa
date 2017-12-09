import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import OnlineStatus from 'components/onlineStatus/OnlineStatus.jsx';
import {online, offline} from 'actions/onlineActions';

export class OnlineStatusContainer extends PureComponent {

    constructor(props) {
        super();
        this.props = props;
        window.addEventListener('offline', () => {
            this.props.offline();
        });
        window.addEventListener('online', () => {
            this.props.online();
        });
    }

    render() {
        const {onlineStatus} = this.props;
        return (
            <OnlineStatus onlineStatus={onlineStatus}/>
        )
    }
}

OnlineStatusContainer.propTypes = {
    onlineStatus: PropTypes.bool.isRequired,
    online: PropTypes.func.isRequired,
    offline: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        onlineStatus: state.onlineReducer.online
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        online: () => {
            dispatch(online())
        },
        offline: () => {
            dispatch(offline())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OnlineStatusContainer);