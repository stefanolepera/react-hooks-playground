import React, { Component } from 'react';
import { MainWrapper, Button } from './Main.style';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }

    switchToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    };

    render() {
        return (
            <MainWrapper>
                <h2>EX1_useState_basic</h2>
                <p>{`the light is ${this.state.toggle ? 'ON' : 'OFF'}`}</p>
                <Button onClick={this.switchToggle}>TOGGLE</Button>
            </MainWrapper>
        );
    }
}

export default Main;
