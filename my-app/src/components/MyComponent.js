import React from 'react';

function MyComponent(){
    const name="Ssali JOnathan"
    const sum=2+2

    const firstName="Ssali"
    const secondName="Jonathan"

    const formatNames=(f_name,s_name)=>{
        return f_name + ' ' + s_name
    }

    const element=<h1>Hello world</h1>

    return(
        <div className="container">
            <center>
                <h1>This is {name}</h1>
                <p>2+2={sum}</p>
                <p>My name is {formatNames(firstName,secondName)}</p>
                {element} 
            </center>
        </div>
    )   
}


export default MyComponent;