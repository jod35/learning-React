import React from 'react';
import ReactDOM from 'react-dom';


function SubmitButton(){
    const SubmitMessage="Submit";

    return (
    <button>{SubmitMessage}</button>
    );
}

/*Expressions are normally returned by the use of two curly braces {}*/


/*returning if statements*/
/*if statements in jsx are normally used by the ternary operator forexample:*/

function ValidIndicator(){
    const Valid =true;

    return(
    <span>{Valid ? 'It is indeed valid': 'It is invalid'}</span>
    )
}


function IsValidIndicator(){
    const Valid=false;
    return(
        <span>
            {Valid && 'It is indeed Valid'}
            {!Valid && 'It is Invalid'}
        </span>
    );
}
ReactDOM.render(<IsValidIndicator/>,document.querySelector('#root'));