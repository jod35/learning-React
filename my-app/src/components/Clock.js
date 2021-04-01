import React from 'react';

function Clock(){
    return(
        <div className="clock">
            <p>It is {new Date().toLocaleString()}</p>
        </div>
    )
}

export default Clock;