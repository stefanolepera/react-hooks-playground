import React from 'react';
import { MainWrapper, Link } from './Main.style';

const Main = () => {
    return (
        <MainWrapper>
            <h2>React Hooks Playground</h2>
            <p>
                Please checkout the first branch{' '}
                <Link
                    href="https://github.com/stefanolepera/react-hooks-playground/tree/EX1_useState_basic"
                    target="_blank"
                >
                    <b>EX1_useState_basic</b>
                </Link>{' '}
                and solve the problem
            </p>
        </MainWrapper>
    );
};

export default Main;
