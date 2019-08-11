import React, { useState, useEffect } from 'react';
import { MainWrapper } from './Main.style';

const Main = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    return (
        <MainWrapper>
            <h2>EX4_useEffect_basic_solution</h2>
            <p>{`the data is: ${JSON.stringify(data)}`}</p>
        </MainWrapper>
    );
};

export default Main;
