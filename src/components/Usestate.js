import {useState} from 'react';

const Usestate = () => {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    console.log("render");

    // const increment = () => {
    //     for(let i = 0; i < 3; i++) {
    //         setCount(preVal => preVal + 1);
    //     }
    // }

    const addToList = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <>
            <h1>count{count}</h1>
            <button onClick={() => setCount(count + 1)}>click</button>
            <button onClick={() => setCount(preVal => preVal + 2)}>increment</button>
            <button onClick={addToList}>add to list</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id} >{item.value}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default Usestate;