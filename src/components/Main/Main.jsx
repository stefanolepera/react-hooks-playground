import React, { Component } from 'react';
import { MainWrapper } from './Main.style';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        document.title = this.getTitle();
    }

    componentDidUpdate(_, prevState) {
        if (prevState.width !== this.state.width) {
            document.title = this.getTitle();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        document.title = '';
    }

    handleResize = () => this.setState({ width: window.innerWidth });

    getTitle = () => (this.state.width < 300 ? "It's too small!" : "It's ok");

    render() {
        return (
            <MainWrapper>
                <h2>EX5_useEffect_intermediate</h2>
                <p>{`the width is: ${this.state.width}`}</p>
            </MainWrapper>
        );
    }
}

export default Main;
