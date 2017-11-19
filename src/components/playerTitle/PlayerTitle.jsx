import React from 'react';
import styled from 'styled-components';
import {media} from 'helpers/styleHelper';

export const PlayerTitle = styled.h1`
    margin-left: 0;
    display: inline-block;
    color: ${(props) => props.theme.PRIMARY_DARK};
    margin: 0 0 10px 0;
    padding: 0;
    height: auto;
    width: 100%;
    text-align: center;
    font-weight: normal;
    font-size: 1rem;
    ${media.SMALL`
        font-size: 1rem;
    `};
    ${media.MEDIUM`
        font-size: 1.5rem;
    `};
    ${media.LARGE`
        font-size: 2rem;
    `};
    ${media.XLARGE`
        font-size: 2.5rem;
    `};
`;

export default PlayerTitle;