import React from 'react';
import ReactDOM from 'react-dom';

//component
// function HappyJona(){
//     return <h1>I am Jonathan who is happy all the way.</h1> //JSX
// }

/*
Alternatively,
function HappyJona(){
    return React.createElement(
        'h1',{},"I am a happy Jonathan!!!!"
    )
}
*/

/*We can also nest the function calls

function ManyDivs(){
    return React.createElement(
        'div',{},
        React.createElement(
            'h1',{},'This is a child of a div'
        )
    )
}*/


//The Exercise
function HelloWorld(){
    return React.createElement(
        'h1',{},'Hello World'
    )
}
ReactDOM.render(<HelloWorld/>,document.querySelector('#root')); 

//The react DOM renders this component in the div with the ID of root.

//The JSX is not HTML.
//It is JavaScript which represents function calls for creating real DOM elements.


/*The JSX is translated into React.createElement(
    [the element],{the props Object},[the children]

)*/