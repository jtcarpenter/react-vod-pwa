import React from 'react';
import {shallow} from 'enzyme';
import {Counter} from './Counter';

test('Counter', () => {
    const COUNT = 1;
    const counter = shallow(
      <Counter counter={COUNT}></Counter>
    );

    expect(counter.text()).toContain('counter: ' + COUNT);
});
