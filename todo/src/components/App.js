import React from 'react';

function App(){
    const name="Jonathan"
    const styles={
        color:"white",
        backgroundColor:"darkgray",
        padding:"20px"
    }

    const gender="Male"

    if (gender ==="Male"){
        styles.color="blue"
    }
    else if (gender === "Female"){
        styles.color="pink"
    }
    else{
        styles.color="red"
        styles.backgroundColor=""
    }
    return (
        <div>
            
            <p className="item" style={styles}>Eat {name}</p>

            <input type="checkbox"></input>
            <p>Eat Chocolate</p>

            <input type="checkbox"></input>
            <p>Eat Chocolate</p>
            <input type="checkbox"></input> 

            <p>Eat Chocolate</p>
            <input type="checkbox"></input>
        </div>
    )
}


export default App;