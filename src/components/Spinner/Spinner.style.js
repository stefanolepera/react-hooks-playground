import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const StyledSpinner = styled.div`
    margin: 20px auto;
    border: 5px solid #ccc;
    border-top: 5px solid #333;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: ${spin} 1s linear infinite;
`;

