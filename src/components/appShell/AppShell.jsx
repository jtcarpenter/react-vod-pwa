import React, {Children} from 'react';
import * as copy from 'constants/copy';
import {media} from 'helpers/styleHelper';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.PRIMARY};
    padding: .5rem 0;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    margin: 0;
    color: ${(props) => props.theme.PRIMARY_DARK};
    font-size: 1.5rem;
    ${media.SMALL`
        font-size: 1.5rem;
    `};
    ${media.MEDIUM`
        font-size: 2rem;
    `};
    ${media.LARGE`
        font-size: 2.5rem;
    `};
    ${media.XLARGE`
        font-size: 3rem;
    `};
`;

export function AppShell({children}) {
    return (
        <div>
            <StyledHeader>
                <StyledH1>
                    {copy.TITLE}
                </StyledH1>
            </StyledHeader>
            {Children.toArray(children)}
        </div>
    )
}

export default AppShell;