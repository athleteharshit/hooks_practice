import React from 'react'

const Title = ({title, age}) => {
    console.log("title component");
    return (
        <div>
            <h1>{title}</h1>
            <p>{age}</p>
        </div>
    )
}

export default React.memo(Title)
