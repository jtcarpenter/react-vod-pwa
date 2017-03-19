import React from 'react';
import {shallow, mount} from 'enzyme';
import {GridItem} from './GridItem';

const gridItemData = {
    id: 1,
    title: 'test'
};
const gridItemSelectHandler = () => null;
const gridItem = (
    <GridItem
        item={gridItemData}
        handleSelect={gridItemSelectHandler}
    >
    </GridItem>
)

describe('GridItem', () => {
    it('should render', () => {
        const wrapper = shallow(gridItem);
        expect(wrapper.exists()).toBe(true);
    })

    it('should render correct title', () => {
        const wrapper = mount(gridItem);
        expect(wrapper.find(`#${gridItemData.id}`).text())
            .toEqual(gridItemData.title);
    })
})
