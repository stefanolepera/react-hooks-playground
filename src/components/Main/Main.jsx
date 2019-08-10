import React, { useState } from 'react';
import { MainWrapper, Button, List, ListItem } from './Main.style';

const Main = () => {
    const [credentials, setCredentials] = useState({
        firstName: 'Joe',
        lastName: 'Smith',
        age: 38
    });

    const changeName = () => {
        setCredentials(prevState => ({
            ...prevState,
            firstName: 'Steve'
        }));
    };

    return (
        <MainWrapper>
            <h2>EX2_useState_intermediate_solution</h2>
            <p>my credentials are:</p>
            <List>
                {Object.keys(credentials).map(credential => (
                    <ListItem>
                        {`${credential}: ${credentials[credential]}`}
                    </ListItem>
                ))}
            </List>
            <Button onClick={changeName}>CHANGE NAME</Button>
        </MainWrapper>
    );
};

export default Main;
