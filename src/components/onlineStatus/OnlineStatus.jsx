import React from 'react';
import styled from 'styled-components';
import * as copy from 'constants/copy';

export const StyledDiv = styled.div`
    position: fixed;
    bottom: 10%;
    width: 60%;
    margin: 0 20%;
    background-color: rgba(256, 256, 256, .5);
    border-radius: 15px;
    display: ${(props) => {
        return props.onlineStatus
            ? 'none'
            : 'block';
    }};
`;

export const StyledP = styled.p`
    text-align: center;
    color: ${(props) => props.theme.PRIMARY_DARK};
    font-weight: bold;
`

export function OnlineStatus({onlineStatus}) {
    return (
        <StyledDiv onlineStatus={onlineStatus}>
            <StyledP>
                {copy.OFFLINE_STATUS_MESSAGE}
            </StyledP>
        </StyledDiv>
    );
}

export default OnlineStatus;