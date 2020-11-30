import {useState, useEffect} from 'react';

const Useeffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("logmouseposition");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        document.title = `you are clicked ${count} times`;
        console.log("call every render");
    }, [count]);

    useEffect(() => {
        console.log("addEventListener");
        window.addEventListener("mousemove", logMousePosition);

        return () => {
            console.log("unmount call");
            window.removeEventListener("mousemove", logMousePosition);
        }
    }, []);


    

    return(
        <>
            {/* {console.log("call")} */}
            <h1>x - {x} y - {y}</h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}>click{count}times</button>
        </>
    )
}

export default Useeffect;