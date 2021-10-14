import React, { PureComponent } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
            counter: 0,
        };
    }
    render(){
        return <h2>"Counter" will come up here</h2>;
    }
    ComponentDidMount(){
        setInterval(() => {
             const counter = this.state.counter;
             this.setState({
                 counter: counter +1,
             });
        }, 1000);
    }
}

export default Counter;
