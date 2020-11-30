import {useState} from 'react';
import Useeffect from './Useeffect';

const UseeffectCleanup = () => {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <button onClick={() => setDisplay(!display)}>toggler</button>
            {display && <Useeffect/>}
        </>
    )
}

export default UseeffectCleanup;