import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {PlayerCtrls} from
    'components/playerCtrls/PlayerCtrls';

const mockPlayerCtrls = (
    <PlayerCtrls/>
)

describe('PlayerCtrls', () => {
    it('should render', () => {
        const wrapper = shallow(mockPlayerCtrls);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const playerCtrls = renderer.create(mockPlayerCtrls);
        expect(playerCtrls.toJSON()).toMatchSnapshot();
    });
});
