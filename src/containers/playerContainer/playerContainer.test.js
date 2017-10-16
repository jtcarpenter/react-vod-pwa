import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from 'containers/playerContainer/PlayerContainer';

const playerData = {data: {id: 1}};
const mockMatch = {params: {}}
const mockLoad = () => ({});
const playerContainer = (
    <PlayerContainer
        load={mockLoad}
        match={mockMatch}
        playerState={playerData}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
})