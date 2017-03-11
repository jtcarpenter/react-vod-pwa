import React, {PropTypes, Component} from 'react';
import {Provider, connect} from 'react-redux';
import Counter from '../../components/counter/Counter.jsx';
import Grid from '../../components/grid/Grid.jsx';
import Player from '../../components/player/Player.jsx';
import {Router, Route, browserHistory, hashHistory} from 'react-router';


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

    consructor() {
        this.handleSelect = this.handleSelect.bind(this);
    }

    // <Provider store={appStore}>
    //     <Router history={hashHistory}>
    //         <Route path="/(:id)" component={App}></Route>
    //     </Router>
    // </Provider>

    render() {
        return (
            <div>
                <Counter></Counter>
                <Grid cols="3" data={data} handleSelect={this.handleSelect}></Grid>
                <Player></Player>
            </div>
        )
    }

    handleSelect(index) {
        console.log(index + ' selected');
    }
}

export default App;