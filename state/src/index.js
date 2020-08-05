import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './bootstrap.min.css';
import files from './files';

class File extends Component{
    handleClick(){
        this.props.onChoice(this.props.id);
    }
    render(){

        return(
            <div className='file'>
                <div className="filename">
                    <a href="#" onClick={this.handleClick}>{this.props.name}</a>
                </div>
                <div className="file-details">
                    <span className="commit-message">{this.props.commit}</span>
                    <span className="time">{this.props.time}</span>
                </div>
            </div>
        )
    }
}

class Repo extends Component{
    handleFileClick(fileId){
        console.log(fileId +' file has been clicked!');
    }
    render(){
        const fileComponents=files.map(
            (file)=>(
                <File
                   key={'file -' + file.id}
                   id={file.id}
                   name={file.filename}
                   time={file.time}
                   commit={file.commit_message}
                   onChoice={this.handleFileClick}
                
                />
            )
        )
        return(
            <div className="container list-group-item ">
                <nav className="repo-header">
                    <div className="repo-name">
                        <h1>My Site</h1>
                    </div>
                    <div className="repo-details">
                        <span className="pull-reqs"><a className="link" href="#">{this.props.pullreqs} Pull requests</a></span>
                        <span className="time">{this.props.time}</span>
                        <div className="commits">
                          <a href="#">  <b>{this.props.commits} commits</b></a>
                        </div>
                    </div>
                </nav>
                <div className="description container">
                    <p>{this.props.description} </p>
                </div>
                <div className="files list-group">
                    {fileComponents}
                </div>
            </div>
        )
    }
}


class Page extends Component{
    render(){
        return(
           <div className="page">
                <div className="nav-bar">
                    <div className="logo">
                        <h3>Github Lite</h3>
                    </div>
                    <div className="options">
                        <a href="#">Your Profile</a>
                        <a href="#">Your Repositories</a>
                    </div>
                </div>
                <div>
                <Repo

                    reponame="MySite"
                    time="6 days ago"
                    pullreqs={3} 
                    commits={90}
                    description="A simple front-end project."

                />
                </div>
              
           </div>
        )
    }
}

ReactDOM.render(
<Page/>
,document.getElementById('root'));