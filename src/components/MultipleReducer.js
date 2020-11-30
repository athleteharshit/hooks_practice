import React, {useReducer} from 'react';

const initialState = {
    count: 1
}

const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.value}
        case 'decrement' : 
        return {count: state.count - action.value}
        case 'reset' : 
        return initialState;
        default:
            return state;
    }
}

const MultipleReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>count == {count.count}</h1>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>increment</button>
            <button onClick={() => dispatch({type: 'reset', value: 0})}>increment</button>
            <h1>countTwo == {countTwo.count}</h1>
            <button onClick={() => dispatchTwo({type: 'increment', value: 3})}>increment</button>
            <button onClick={() => dispatchTwo({type: 'decrement', value: 3})}>increment</button>
            <button onClick={() => dispatchTwo({type: 'reset', value: 0})}>increment</button>
        </div>
    )
}

export default MultipleReducer;
