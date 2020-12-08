import React, { useState, useCallback } from 'react'
import Button from './Button'
import Title from './Title'

const Useselector = () => {
    const [age, setAge] = useState(12);
    const [salery, setSalery] = useState(1200);

    const ageHandler = useCallback(() => {
        setAge(age + 1)
    }, [age])

    const saleryHandler = useCallback(() => {
        setSalery(salery + 1000)
    }, [salery])

    return (
        <div>
            <Title title="UseSelector Age"  age={age}/>
            <Button handleClick={ageHandler}>salery Button</Button>
            <Title title="UseSelector Salery" age={salery}/>
            <Button handleClick={saleryHandler}>salery Button</Button>
        </div>
    )
}

export default React.memo(Useselector)
