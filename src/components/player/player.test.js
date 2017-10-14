import React from 'react';
import {shallow} from 'enzyme';
import {Player} from './Player';

const playerData = {
    id: 1,
    src: 'test'
};
const player = (
    <Player
        data={playerData}
    >
    </Player>
)

describe('Player', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
});