import React from 'react';
import {shallow} from 'enzyme';
import {GridContainer} from 'containers/gridContainer/GridContainer';

const episodeData = {data: {episodes: []}};
const mockLoad = () => ({});
const gridContainer = (
    <GridContainer
        episodes={episodeData.data.episodes}
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