import React, { Component } from 'react';
import { MainWrapper } from './Main.style';
import fetchData from '../../services/APIService';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        fetchData().then(response => this.setState({ data: response.data }));
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
