import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeComponent = () => {
    const noOfCake = useSelector(state => state.cake.numOfCakes)
    const dispatch =  useDispatch()
    return (
        <div>
            <h1>num of cake - {noOfCake}</h1>
            <button onClick={() => dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeComponent
