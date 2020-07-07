import React from 'react';
import './main.css';
import ReactDOM from 'react-dom';




const Avatar=({gravatar})=>{
    return(
        <div className="avatar">
            <p>{gravatar}</p>
        </div>
    )
}

const NameArea=({name})=>{
    return (
        <div className="name-are">
            <p>{name}</p>
        </div>
    )
}

const Time=({time})=>{
    return(
        <div className="time">
            <p>{time}</p>
        </div>
    )
}



const TweetMessage=({message})=>{
    return(
        <div className="message">
            <p>{message}</p>
        </div>
    )
}

const LikeButton=({count})=>{
    return(
        <a className="like-btn">
           {count? count:null} Like
        </a>
    );
}

function getRetweetCount({count}){
    if (count>0){
        return( 
        <span className="retweet-count">
            {count}
        </span>)
    }
    else{
        return null;
    }


}

const RetweetButton=({count})=>{
    return(
        <a className="retweet-btn">
           {getRetweetCount(count)} Retweet 
        </a>
    );
}

const CommentButton=({count})=>{
    return(
        <a className="comment-btn">
           {count}  Comment
        </a>
    );
}





const Tweet =({tweet})=>{
  return(
    <div className="tweet">
        <div className="upper">
            <Avatar gravatar={tweet.gravatar}/>
            <div className="time-name">
                <NameArea name={tweet.name}/>
                <Time time={tweet.timestamp}/>
            </div>
        </div>
            <div className="tweet-message">
                <TweetMessage message={tweet.message}/>
            </div>
            <div className="btns">
                <LikeButton count={tweet.likes}/>
                <RetweetButton count={tweet.retweets}/>
                <CommentButton count={tweet.comments}/>
            </div>
        </div>
  )
}

const TestTweet={
    "name":"Ssali Jonathan",
    'message':"Black Lives Matter",
    "gravatar":"xyz",
    "likes":0,
    "retweets":2,
    "comments":4,
    "timestamp":"2018-09-09 21:34:34"
}
ReactDOM.render(<Tweet tweet={TestTweet}/>,document.getElementById('root'));