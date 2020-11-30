import React, {useContext} from 'react';
import {CountContext} from '../App';

const ContextApi = () => {
    const countContext = useContext(CountContext);
    console.log(countContext);
    return (
        <div>
            ContextApi
            <hr/>
             {countContext.countState.data}
            <button onClick={() => countContext.countDispatch({type: 'incre'})}>incre</button>

        </div>
    )
}

export default ContextApi;
