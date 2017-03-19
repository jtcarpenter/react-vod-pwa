import React from 'react';
import {shallow} from 'enzyme';
import {GridContainer} from './GridContainer';

const gridData = {data: {items: []}};
const mockDispatch = () => ({});
const gridContainer = (
    <GridContainer
        grid={gridData}
        dispatch={mockDispatch}
    >
    </GridContainer>
);

describe('GridContainer', () => {
    it('should render', () => {
        const wrapper = shallow(gridContainer);
        expect(wrapper.exists()).toBe(true);
    })
})
