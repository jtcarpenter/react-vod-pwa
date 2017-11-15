import React from 'react';
import GridItem from 'components/gridItem/GridItem.jsx';
import {breakpoints, media} from 'helpers/styleHelper';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
    ${media.SMALL`
        grid-template-columns: repeat(3, 1fr);
    `};
    ${media.MEDIUM`
        grid-template-columns: repeat(4, 1fr);
    `};
    ${media.LARGE`
        grid-template-columns: repeat(5, 1fr);
    `};
    ${media.XLARGE`
        grid-template-columns: repeat(5, 1fr);
        width: ${breakpoints.XLARGE}px;
        margin: 0 auto;
    `};
`;

export function Grid({items = []}) {
    return (
        <StyledDiv>
            {items.map((item, index) =>
                <GridItem
                    key={index}
                    item={item}
                >
                </GridItem>
            )}
        </StyledDiv>
    )
}

export default Grid;