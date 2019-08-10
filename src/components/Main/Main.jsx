import React, { Component } from 'react';
import { MainWrapper, Button, List, ListItem } from './Main.style';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Joe',
            lastName: 'Smith',
            age: 38
        };
    }

    changeName = () => {
        this.setState({
            firstName: 'Steve'
        });
    };

    render() {
        return (
            <MainWrapper>
                <h2>EX2_useState_intermediate</h2>
                <p>my credentials are:</p>
                <List>
                    {Object.keys(this.state).map(credential => (
                        <ListItem>
                            {`${credential}: ${this.state[credential]}`}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.changeName}>CHANGE NAME</Button>
            </MainWrapper>
        );
    }
}

export default Main;
