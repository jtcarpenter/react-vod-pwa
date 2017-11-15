import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import GridItemThumb from 'components/gridItemThumb/GridItemThumb.jsx'
import GridItemTitle from 'components/gridItemTitle/GridItemTitle.jsx';
import {media} from 'helpers/styleHelper';

export const StyledLink = styled(Link)`
    width: 100%;
    border: 1px solid ${(props) => props.theme.DIVIDER};
    border-radius: 5px;
    box-sizing: border-box;
    text-decoration: none;
    position: relative;
    height: 200px;
    &:hover {
        border: 7px solid ${(props) => props.theme.PRIMARY};
    };
    ${media.SMALL`
        height: 175px;
    `};
    ${media.MEDIUM`
        height: 200px;
    `};
    ${media.LARGE`
        height: 200px;
    `};
    ${media.XLARGE`
        height: 220px;
    `};
`;

export function GridItem({item}) {
    return (
        <StyledLink to={`/player/${item.id}`}>
            <div id={`item-${item.id}`}>
                <GridItemTitle>
                    {item.title}
                </GridItemTitle>
                <GridItemThumb
                    src={item.thumb}
                />
            </div>
        </StyledLink>
    )
}

export default GridItem;