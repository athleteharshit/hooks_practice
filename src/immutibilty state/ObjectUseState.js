import React, {useState} from 'react'

const initState = {
    fname: "harshit",
    lname: "gupta"
}

const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () => {
        const updateName = {...initState}
        updateName.fname =  "pubg"
        updateName.lname = "mobile"
        setPerson(updateName)
    }
 
    console.log("object with use State");
    return (
        <div>
            <h1>ObjectUseState - {person.fname} {person.lname}</h1>
            <button onClick={changeName}>click and change name</button>
        </div>
    )
}

export default ObjectUseState
