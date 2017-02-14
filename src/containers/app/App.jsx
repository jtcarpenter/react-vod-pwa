import React, {PropTypes, Component} from 'react';
import {Provider, connect} from 'react-redux';
import Counter from '../../components/counter/Counter.jsx';
import Grid from '../../components/grid/Grid.jsx';

let data = {
    items: []
}
for (let i = 0; i < 10; i++) {
    data.items.push({
        id: i,
        title: `item_${i}`
    });
}

export class App extends React.Component {

    render() {
        return (
            <div>
                <Counter></Counter>
                <Grid cols="3" data={data}></Grid>
            </div>
        )
    }
}

export default App;