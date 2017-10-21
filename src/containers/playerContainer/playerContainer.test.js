import React from 'react';
import {shallow} from 'enzyme';
import {PlayerContainer} from 'containers/playerContainer/PlayerContainer';

const playerData = {data: {id: 1}};
const mockMatch = {params: {}}
const mockLoad = () => ({});
const mockPlayVideo = () => ({})
const mockPauseVideo = () => ({})
const mockOnDidPlay = () => {};
const mockOnDidPause = () => {};
const playerContainer = (
    <PlayerContainer
        load={mockLoad}
        match={mockMatch}
        playerState={playerData}
        playVideo={mockPlayVideo}
        pauseVideo={mockPauseVideo}
        onDidPlay={mockOnDidPlay}
        onDidPause={mockOnDidPause}
    >
    </PlayerContainer>
);

describe('PlayerContainer', () => {
    it('should render', () => {
        const wrapper = shallow(playerContainer);
        expect(wrapper.exists()).toBe(true);
    })
})