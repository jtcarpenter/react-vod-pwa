import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from './PlayerContainer';

const playerData = {data: {id: 1}};
const mockMatch = {params: {}}
const mockDispatch = () => ({});
const playerContainer = (
    <PlayerContainer
        dispatch={mockDispatch}
        match={mockMatch}
        player={playerData}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
})