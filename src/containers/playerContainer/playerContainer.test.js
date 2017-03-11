import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from './PlayerContainer';

test('PlayerContainer', () => {
    const playerContainer = shallow(
      <PlayerContainer></PlayerContainer>
    );

    expect(playerContainer.exists()).toBe(true);
});