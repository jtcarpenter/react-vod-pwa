import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {GridItemThumb} from
    'components/gridItemThumb/GridItemThumb.jsx';

const mockGridItemThumb = (
    <GridItemThumb />
)

describe('GridItemThumb', () => {
    it('should render', () => {
        const wrapper = shallow(mockGridItemThumb);
        expect(wrapper.exists()).toBe(true);
    });

    it('should display correctly', () => {
        const gridItemThumb = renderer.create(mockGridItemThumb);
        expect(gridItemThumb.toJSON()).toMatchSnapshot();
    });
});
