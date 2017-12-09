import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {OnlineStatus} from 'components/onlineStatus/OnlineStatus';

const mockOnlineStatus = (
    <OnlineStatus onlineStatus={true}/>
)

describe('OnlineStatus', () => {
    it('should render', () => {
        const wrapper = shallow(mockOnlineStatus);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const onlineStatus = renderer.create(mockOnlineStatus);
        expect(onlineStatus.toJSON()).toMatchSnapshot();
    });
});