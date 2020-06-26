// Import necessary libraries
import React from 'react';
import ReactDom from 'react-dom'; 



function HelloWorld(){
    return <h1>Hello World</h1> //create a component
};


ReactDom.render(
    <HelloWorld/>,
    document.querySelector('#root')  //render it in the virtual DOM
);


/* ReactDom.render takes two args:
    1. What to render 
    2. Where to render it

*/
