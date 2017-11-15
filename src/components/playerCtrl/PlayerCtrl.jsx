import React from 'react';
import styled from 'styled-components';

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
    font-size: 3.5rem;
    margin-right: .5rem;
    width: 3.6rem;
    height: 3.5rem;
    padding: 0;
    display: inline-block;
    background-color: transparent;
    border-style: solid;
    border-width: 0;
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