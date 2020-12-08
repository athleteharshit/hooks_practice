import React, {useReducer} from 'react'

const initialState = 12;
 
const reducer = (state, action) => {
    switch(action) {
        case "incre": return state + 1;
        case "decre": return state - 1;
        case 'reset': return initialState;
        default: return state;
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    console.log("useReducer");
    return (
        <div>
            <button onClick={() => dispatch('incre')}>incre {count}</button>
            <button onClick={() => dispatch('decre')}>decre{count}</button>
            <button onClick={() => dispatch('reset')}>reset{count}</button>
        </div>
    )
}

export default UseReducer
