import React from 'react';
import {shallow} from 'enzyme';
import {GridContainer} from './GridContainer';

test('GridContainer', () => {
    const gridContainer = shallow(
      <GridContainer></GridContainer>
    );

    expect(gridContainer.exists()).toBe(true);
});