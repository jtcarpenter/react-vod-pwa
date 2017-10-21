import React from 'react';
import {shallow} from 'enzyme';
import {Video} from 'components/video/Video';

const videoData = {
    src: 'test'
};
const mockVideoState = 'test';
const onDidPlay = () => {};
const onDidPause = () => {};
const player = (
    <Video
        data={videoData}
        videoState={mockVideoState}
        onDidPlay={onDidPlay}
        onDidPause={onDidPause}
    />
)

describe('Video', () => {
    it('should render', () => {
        const wrapper = shallow(player);
        expect(wrapper.exists()).toBe(true);
    })
})