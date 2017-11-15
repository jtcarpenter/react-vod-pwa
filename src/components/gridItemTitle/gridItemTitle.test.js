import React from 'react';
import {shallow} from 'enzyme';
import {GridItemTitle} from
    'components/gridItemTitle/GridItemTitle';

const gridItemTitle = (
    <GridItemTitle/>
)

describe('GridItemTitle', () => {
    it('should render', () => {
        const wrapper = shallow(gridItemTitle);
        expect(wrapper.exists()).toBe(true);
    })
})