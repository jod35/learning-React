import React from 'react';
import ReactDOM from 'react-dom';



// function MyThing(){
//     return(
        // <div className="book">
        //     <div className="title">
        //         The title
        //     </div>
           
        //     <div className="author">
        //         The Author
        //     </div>
        //     {''}
        //     <ul className="stats">
        //         <li className="stats">
        //             5 stars
        //         </li>
        //         <li className='isbn' >
        //         12-345678-910
        //         </li>
        //     </ul>
        // </div>

        // <div>
        //     First Line
        //     {''}
        //     Second Line
        //         {''}
        //     New Lines
        // </div>



    // );

    // function Greeting(){
    //     let username='root';
    //     // let username=null;
    //     // let username= undefined;
    //     // let username=false;


    //     return(
    //         <h1>
    //         {username ? 'User is logged In' : 'Invalid Login'}
    //         </h1>
    //     )

    // }
    
    function Table(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ssali Jonathan</td>
                        <td>Male</td>
                    </tr>
                </tbody>
            </table>
        )
    }


ReactDOM.render(<Table/>,document.querySelector('#root'));