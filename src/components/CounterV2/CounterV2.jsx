import React, { useState, useEffect} from 'react';
import { propType } from 'prop-types';

const CounterV2 = (props)=> {
    const { initialCounter, initialValue } = props;
    const [counter, setCounter] = useState(initialCounter);
    const [stateValue, setStateValue] = useState(0);

    useEffect(() => {
     console.log('useeffect called');
     const intervalVariable = setInterval(() =>{

        setCounter((counterv2) => counterv2 + 1);
        setStateValue(1);
     }, intervalValue);
     return () =>{
         console.log('return statement of useeffect');
         clearInterval(intervalVariable);
     };
    }, []);

    console.log('setvalue', statevalue);
    return <h2>{`counter from functional component' ${counter}`}</h2>;



    
CounterV2.defaultProps = {

        initialCounter: 0,
        intervalValue: 1000,
    };
    
    CounterV2.propType = {
        initialCounter: propType.number,
        intervalValue: propType.number,
    };


export  default CounterV2;

// class CounterV2 extends Component {
//     constructor(props) {
//         super(props);
//         const { initialCounter } = props;
//         console.log("initialCounter", props);
//         this.state = {
//             counter: 0 + initialCounter,
//         };
//     }

//     ComponentDidMount() {
//         const { intervalValue } = this.props;
//         console.log('intervalvalue', intervalValue);
//         setInterval(() => {
//             const counter = this.state;
//             this.setState({
//                 counter: counter + 1,
//             });
//         }, 1000);
//     }
//     render() {
//         const { counter } = this.state;
//         console.log("counter value", counter);
//         return <h2>{`Counter ${counter}`}</h2>;
//     }
// }

// CounterV2.defaultProps = {
//     initialCounter: 0,
//     intervalValue: 1000,
// };

// CounterV2.propType = {
//     initialCounter: propType.number,
//     intervalValue: propType.number,
// }

// export default CounterV2;
