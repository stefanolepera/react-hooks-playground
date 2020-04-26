import React, {useState} from 'react';
import {MainWrapper, Button} from './Main.style';

function Main() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

    return (
        <MainWrapper>
            <h2>EX1_useState_basic</h2>
            <p>{`the light is ${toggle ? 'ON' : 'OFF'}`}</p>
            <Button onClick={handleToggle}>TOGGLE</Button>
        </MainWrapper>
    );
}

export default Main;
