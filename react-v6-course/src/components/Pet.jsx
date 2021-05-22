import React from 'react'

const Pet = (props) => {
    return (
        <div className="pet">
            <h1>{props.name}</h1>
            <p>{props.breed}</p>
        </div>
    )
}

export default Pet