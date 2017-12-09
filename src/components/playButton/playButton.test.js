import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {PlayButton} from 'components/playButton/PlayButton';

const handlePlay = () => {};
const handlePause = () => {};
const mockPlayButton = (
    <PlayButton
        handlePlay={handlePlay}
        handlePause={handlePause}
    />
)

describe('PlayButton', () => {
    it('should render', () => {
        const wrapper = shallow(mockPlayButton);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const playButton = renderer.create(mockPlayButton);
        expect(playButton.toJSON()).toMatchSnapshot();
    });
});