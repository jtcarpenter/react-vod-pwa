import {css} from 'styled-components';

export const breakpoints = {
    SMALL: 420,
    MEDIUM: 720,
    LARGE: 900,
    XLARGE: 1080
}

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
    const emSize = breakpoints[label] / 16
    accumulator[label] = (...args) => css`
        @media (min-width: ${emSize}em) {
            ${css(...args)}
        }
    `
    return accumulator
}, {});