import React, {useContext} from 'react';
import {userContext, channelContext} from '../App';

const ComponentA = () => {
    const name =  useContext(userContext);
    const channel =  useContext(channelContext);
    return (
        <div>
            <h1>{name} - {channel}</h1>
            {/* <userContext.Consumer>
                {
                    user => {
                        return <h1>hello s{user}</h1>
                    }
                }
            </userContext.Consumer> */}
        </div>
    )
}

export default ComponentA;
