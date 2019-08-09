import React from 'react';
import { Main } from './components';
import styled from 'styled-components';

const MainWrapper = styled.div`
	text-align: center;
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

const App = () => {
  return (
    <MainWrapper>
        <Main />
    </MainWrapper>
  );
}

export default App;
