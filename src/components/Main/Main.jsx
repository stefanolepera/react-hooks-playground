import React, { Component } from 'react';
import { MainWrapper } from './Main.style';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        return (
            <MainWrapper>
                <h2>EX4_useEffect_basic</h2>
                <p>{`the data is: ${JSON.stringify(this.state.data)}`}</p>
            </MainWrapper>
        );
    }
}

export default Main;
