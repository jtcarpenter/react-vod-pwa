import React from 'react';
import {shallow} from 'enzyme';
import {OnlineStatusContainer} from
    'containers/onlineStatusContainer/OnlineStatusContainer';

const onlineStatusContainer = (
    <OnlineStatusContainer
        onlineStatus={false}
        online={() => {
            return {online: true}
        }}
        offline={() => {
            return {online: false}
        }}
    >
    </OnlineStatusContainer>
);

describe('OnlineStatusContainer', () => {
    it('should render', () => {
        const wrapper = shallow(onlineStatusContainer);
        expect(wrapper.exists()).toBe(true);
    });
});