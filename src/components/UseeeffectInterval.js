import {useState, useEffect} from 'react';

const UseeffectInterval = () => {

    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(preVal => preVal + 1);
    }

    useEffect(() => {
        console.log("call useeffect");
        const interval = setInterval(tick, 1000);
        return () => {
            console.log("clear or unmount");
            clearInterval(interval);
        }
    },[]);

    return(
        <>
            <h1>{count}</h1>
        </>
    )
}

export default UseeffectInterval;