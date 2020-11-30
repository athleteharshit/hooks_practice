import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value};
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value};
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value};
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}


const Usereducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>firstCounter - {count.firstCounter} </h1>
            <h1>secondCounter - {count.secondCounter} </h1>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>increment 1</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement 1</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>decrement 5</button>
            <button onClick={() => dispatch({type: 'increment2', value: 10})}>increment2 10</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 10})}>decrement2 10</button>
            <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        </div>
    )
}

export default Usereducer;
