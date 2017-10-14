import React from 'react';
import {shallow} from 'enzyme';
import {Grid} from 'components/grid/Grid';

const gridData = {data: {items: []}};
const grid = (
    <Grid
        grid={gridData}
    >
    </Grid>
);

describe('Grid', () => {
    it('should render', () => {
        const wrapper = shallow(grid);
        expect(wrapper.exists()).toBe(true);
    })
})
