import React, { PureComponent } from 'react';
import { MainWrapper } from './Main.style';

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            isTooSmall: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(_, prevState) {
        if (prevState.width !== this.state.width) {
            if (this.state.width < 300) {
                this.setState({ warning: true });
            } else {
                this.setState({ warning: false });
            }
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => this.setState({ width: window.innerWidth });

    render() {
        console.log('render!');
        return (
            <MainWrapper>
                <h2>EX5_useEffect_intermediate</h2>
                <p>{`the width is: ${this.state.width}`}</p>
                {this.state.warning && <p>It's too small!</p>}
            </MainWrapper>
        );
    }
}

export default Main;
