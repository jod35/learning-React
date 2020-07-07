import React from 'react';
import ReactDOM from 'react-dom';


// function SayName(props){
//     // const name="Ssali Jonathan Kiggundu";

//     return (
//     <h1>Hello {props.name}</h1>
//     )
// }

// function sayName(){
//     return (
//     <h1>Hello World</h1>
//     )
// }

// const SayName=({name})=>{
//     return(
//         <h1>Hello {name}</h1>
//     )
// }



const sayMyFullName=({firstname,secondname})=>{
    return (
        <h1>Hello {firstname} {secondname}</h1>
    )

}
ReactDOM.render(<sayMyFullName firstname="Jonathan" secondname="Ssali"/>,document.getElementById('root'));