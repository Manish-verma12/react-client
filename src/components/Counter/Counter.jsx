import React, { Component } from 'react';
import { propType } from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        const { initialCounter } = props;
        console.log("initialCounter", props);
        this.state = {
            counter: 0 + initialCounter,
        };
    }

    ComponentDidMount() {
        const { intervalValue } = this.props;
        console.log('intervalvalue', intervalValue);
        setInterval(() => {
            const counter = this.state;
            this.setState({
                counter: counter + 1,
            });
        }, 1000);
    }
    render() {
        const { counter } = this.state;
        console.log("counter value", counter);
        return <h2>{`Counter ${counter}`}</h2>;
    }
}

Counter.defaultProps = {
    initialCounter: 0,
    intervalValue: 1000,
};

Counter.propType = {
    initialCounter: propType.number,
    intervalValue: propType.number,
}

export default Counter;
