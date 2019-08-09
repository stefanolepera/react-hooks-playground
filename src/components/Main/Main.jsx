import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
`;

const Main = () => {
    return (
        <MainWrapper>
            <h2>React Hooks Playground</h2>
            <p>
                Please checkout the first branch <b>EX1_useState_basic</b> and
                solve the problem
            </p>
        </MainWrapper>
    );
};

export default Main;
