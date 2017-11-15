import React from 'react';
import {shallow} from 'enzyme';
import {GridItemThumb} from
    'components/gridItemThumb/GridItemThumb.jsx';

const gridItemThumb = (
    <GridItemThumb />
)

describe('GridItemThumb', () => {
    it('should render', () => {
        const wrapper = shallow(gridItemThumb);
        expect(wrapper.exists()).toBe(true);
    })
})