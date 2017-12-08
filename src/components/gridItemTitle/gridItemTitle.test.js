import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {GridItemTitle} from
    'components/gridItemTitle/GridItemTitle';

const mockGridItemTitle = (
    <GridItemTitle/>
)

describe('GridItemTitle', () => {
    it('should render', () => {
        const wrapper = shallow(mockGridItemTitle);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const gridItemTitle = renderer.create(mockGridItemTitle);
        expect(gridItemTitle.toJSON()).toMatchSnapshot();
    });
});
