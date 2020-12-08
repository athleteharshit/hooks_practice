import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

const HooksIceCream = () => {
    const noOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h1>num of ice cream - {noOfIceCream} </h1>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyIceCream(number))}>buy ice {number} cream</button>
        </div>
    )
}

export default HooksIceCream
