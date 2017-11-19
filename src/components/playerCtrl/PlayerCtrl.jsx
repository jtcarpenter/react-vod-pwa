import React from 'react';
import styled from 'styled-components';
import {media} from 'helpers/styleHelper';

export const PlayerCtrl = styled.button`
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-right: .5rem;
    padding: 0;
    display: inline-block;
    background-color: transparent;
    border-style: solid;
    border-width: 0;
    width: 2rem;
    height: 2rem;
    font-size: 2rem;
    ${media.SMALL`
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
    `};
    ${media.MEDIUM`
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
    `};
    ${media.LARGE`
        width: 3rem;
        height: 3rem;
        font-size: 3rem;
    `};
    ${media.XLARGE`
        width: 3.5rem;
        height: 3.5rem;
        font-size: 3.5rem;
    `};
    border-color: ${(props) => {
        return props.borderColor
            ? props.borderColor
            : props.theme.PRIMARY;
    }};
    border-radius: ${(props) => {
        return props.borderRadius
            ? props.borderRadius
            : 0;
    }};
    &:last-child {
        margin-right: 0;
    };
    &:focus {
        outline: none;
    };
    &:before {
        content: "${(props) => props.icon}";
    };
    &:hover {
        color: ${(props) => props.theme.PRIMARY_LIGHT};
        border-color: ${(props) => props.theme.PRIMARY_DARK};
    }
`;

export default PlayerCtrl;