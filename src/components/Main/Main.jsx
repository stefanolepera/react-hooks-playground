import React, { useState, useEffect } from 'react';
import { MainWrapper } from './Main.style';

const Main = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const title = width < 300 ? "It's too small!" : "It's ok";
        document.title = title;
        return () => (document.title = '');
    }, [width]);

    return (
        <MainWrapper>
            <h2>EX5_useEffect_intermediate_solution</h2>
            <p>{`the width is: ${width}`}</p>
        </MainWrapper>
    );
};

export default Main;
