import React from 'react';
import {shallow} from 'enzyme';
import {GridContainer} from 'containers/gridContainer/GridContainer';

const gridData = {data: {items: []}};
const mockLoad = () => ({});
const gridContainer = (
    <GridContainer
        gridState={gridData}
        load={mockLoad}
    >
    </GridContainer>
);

describe('GridContainer', () => {
    it('should render', () => {
        const wrapper = shallow(gridContainer);
        expect(wrapper.exists()).toBe(true);
    })
});