import React, {useState} from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)

    console.log("render check");
    return (    
        <div>
            <h1>render - {count} </h1>
            <button onClick={() => setCount(c => c + 1)}>click render - {count}</button>
            <button onClick={() => setCount(0)}>count - 0</button>
            <button onClick={() => setCount(5)}> count - 5</button>
        </div>
    )
}

export default UseState
