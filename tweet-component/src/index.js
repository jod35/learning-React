import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Avatar(){
    return(
    //    <img src="/home/jona/coding/javascript/learning_react/mypic.jpeg" alt="Avatar"></img>
        <div className="avatar">
            <p>Avatar</p>
        </div>
    )
}


function Author(props){
    return (
        <div className="author">
            <h4>@{props.name}</h4>
        </div>
    )
}

function Time(){
    return (
        <div className="time">
           <small>5 hours ago</small>
        </div>
    )
}

function Message(){
    return (
        <div className="message">
          <p>Black Lives Matter</p>
        </div>
    )
}


function LikeButton(){
    let buttonLabel="Like";
    return(
        
        <button className="mybtn">
            {buttonLabel}
        </button>
    )
}

function RetweetButton(){
    let buttonLabel="Retweet";
    return(
        
        <button className="mybtn">
            {buttonLabel}
        </button>
    )
}
function OthersButton(){
    let buttonLabel="Others";
    return(
        
        <button className="mybtn">
            {buttonLabel}
        </button>
    )
}
function OtherDiv(){
    return(
        <div className="other-div">
            <div className="author-time">
                <Author name="Jonathan24"/>
                <Time/>
            </div>
            <Message/>
            <div className="buttons">
                <LikeButton/>
                <RetweetButton/>
                <OthersButton/>
            </div>
            
        
        </div>
        
    )
}



function Tweet(){
    return(
        <div className="tweet">
          
            <Avatar/>
            <OtherDiv/>
            

        </div>
    )
    }
ReactDOM.render(<Tweet/>,document.getElementById('root'));