import React, {useState, useMemo} from 'react'

const UseMemo = () => {
    const [counterOne, setCounterOne] = useState(1)
    const [counterTwo, setCounterTwo] = useState(2)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const inEven = useMemo(() => {
        let i = 0
        while(i < 200000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    return (
        <div>
            <button onClick={incrementOne}>counter one - {counterOne}</button>
            {inEven ? "even" : "odd"}
            <hr/>
            <button onClick={incrementTwo}>counter two - {counterTwo}</button>
        </div>
    )
}

export default UseMemo
