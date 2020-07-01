import React from 'react';
import ReactDOM from 'react-dom';

/*usual fucntion
function Hello(props){
return <h1>Hello {props.name}, You are {props.age} years old.</h1>;
}
*/


/*arrow function
const Hello = (props)=>{
return <h1>Hello {props.name}, You are {props.age} years old.</h1>

}
*/


/*destructuring syntax*/
// const Hello =({name,age})=>{
//     return <h1 >Hello {name}, You are {age} years old.</h1>
// }


const Hello =(props)=>{
    const {name} =props;
    const {age}=props;

    return <h1>Hello {name}! You are {age} years old.</h1>
}

ReactDOM.render(<Hello name="Jonathan" age={33}/>,document.getElementById('root'));