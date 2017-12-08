import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {BackButton} from 'components/backButton/BackButton';

const mockBackButton = (
    <BackButton />
)

describe('BackButton', () => {
    it('should render', () => {
        const wrapper = shallow(mockBackButton);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const backButton = renderer.create(mockBackButton);
        expect(backButton.toJSON()).toMatchSnapshot();
    });
});
