import React from 'react';
import {shallow} from 'enzyme';
import {Player} from 'components/player/Player';

const playerData = {
    id: 1,
    src: 'test'
};
const mockVideoState = 'test';
const onDidPlay = () => {};
const onDidPause = () => {};
const player = (
    <Player
        data={playerData}
        videoState={mockVideoState}
        onDidPlay={onDidPlay}
        onDidPause={onDidPause}
    >
    </Player>
)

describe('Player', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
});