import React, {PropTypes, Component} from 'react';
import {Provider, connect} from 'react-redux';
import Counter from '../../components/counter/Counter.jsx';

export class App extends React.Component {

    render() {
        return <div>
            <Counter></Counter>
        </div>
    }
}

export default App;