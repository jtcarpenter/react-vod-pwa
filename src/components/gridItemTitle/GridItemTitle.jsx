import React from 'react';
import styled from 'styled-components';
import {media} from 'helpers/styleHelper';

export const GridItemTitle = styled.h2`
    text-align: center;
    color: ${(props) => props.theme.PRIMARY};
    margin: 15px 10px;
    font-size: 1.1rem;
    ${media.SMALL`
        margin: 10px;
        font-size: 1rem;
    `};
    ${media.MEDIUM`
        margin: 10px;
        font-size: 1.1rem;
    `};
    ${media.LARGE`
        margin: 10px;
        font-size: 1.1rem;
    `};
    ${media.XLARGE`
        margin: 10px;
        font-size: 1.3rem;
    `};
`;

export default GridItemTitle;