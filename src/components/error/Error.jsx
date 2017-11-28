import React from 'react';
import styled from 'styled-components';
import {media} from 'helpers/styleHelper';

const StyledDiv = styled.div`
    color: ${(props) => props.theme.ERROR_COLOUR};
    text-align: center;
    margin-top: 1rem;
    font-size: 1.25rem;
    ${media.SMALL`
        font-size: 1.5rem;
    `};
    ${media.MEDIUM`
        font-size: 2.5rem;
    `};
    ${media.LARGE`
        font-size: 3rem;
    `};
    ${media.XLARGE`
        font-size: 5rem;
    `};
`;

export function Error({errorMessage}) {

    return (
        <StyledDiv>
            {errorMessage}
        </StyledDiv>
    );
}

export default Error;