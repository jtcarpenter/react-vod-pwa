import React from 'react';
import styled from 'styled-components';

export const PlayerTitle = styled.h1`
    margin-left: 0;
    display: inline-block;
    font-size: 2.5rem;
    color: ${(props) => props.theme.PRIMARY_DARK};
    margin: 0 0 10px 0;
    padding: 0;
    height: auto;
    width: 100%;
    text-align: center;
    font-weight: normal;
`;

export default PlayerTitle;