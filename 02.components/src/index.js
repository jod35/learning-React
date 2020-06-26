import React from 'react';
import ReactDom from 'react-dom';


/*
function Hello(){
    return(
        <span>Hello</span>
    );
}

function World(){
    return(
        <span>World</span>
    );
}

function HelloWorld(){
    return(
        <div>
            <Hello/> <World/> !
        </div>
    )
}
*/


/*

An example using React.Fragment
function NamedCells(){
    return (                      
        <React.Fragment>
            <td>Ssali Jonathan</td>
            <td>Kiggundu</td>
        </React.Fragment>
    )
}
*/

/*An Example using empty tags*/

function NamedCells(){
    return (
        <>
        <td>Ssali Jonathan</td>
        <td>Jonathan</td>
        </>
    );
}


ReactDom.render(<NamedCells/>,document.querySelector('#root'));




/*Rendering Nested JSX Components often requires us to wrap the in either a div or
a span
However it changes the DOM structure.*/


//React.Frgrament comes in to wrap them without an enclosing DOM element


//React.Fragment can be replaced by empty tags