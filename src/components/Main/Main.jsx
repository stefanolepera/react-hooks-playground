import React, { useState } from 'react';
import {
    MainWrapper,
    Button,
    ButtonsWrapper,
    List,
    ListItem
} from './Main.style';

const Main = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([Math.round(Math.random() * 100)]);

    const increaseCount = () => {
        //TODO it should increment the count after 1 second
    };

    const decreaseCount = () => {
        //TODO it should decrement the count after 1 second
    };

    const addItem = () => {
        //TODO it should add a new random number to the items
    };

    const removeItem = () => {
        //TODO it should remove the last item
    };

    return (
        <MainWrapper>
            <h2>EX3_useState_advanced</h2>
            <p>{`the current count is ${count}`}</p>
            <ButtonsWrapper>
                <Button onClick={increaseCount}>INCREASE</Button>
                <Button onClick={decreaseCount}>DECREASE</Button>
            </ButtonsWrapper>
            <p>add and remove items from the list</p>
            <ButtonsWrapper>
                <Button onClick={addItem}>ADD</Button>
                <Button onClick={removeItem}>REMOVE</Button>
            </ButtonsWrapper>
            <List>
                {items.map((item, index) => (
                    <ListItem key={index}>{`item value: ${item}`}</ListItem>
                ))}
            </List>
        </MainWrapper>
    );
};

export default Main;
