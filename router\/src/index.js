import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './components/foooter'
import './components/css/main.css'

import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </nav>
                <div className="main">
                    <Switch>
                        <Router path="/services">
                            <Services />
                        </Router>

                        <Route path="/contacts">
                            <Contacts />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
            <Footer />
        </Router>


    )
}

const Home = () => {
    return (
        <div className="home">
            <h1>HomePage</h1>
            <p>This is the homepage</p>
        </div>
    )
}

const About = () => {
    return (
        <div className="home">
            <h1>About Page</h1>
            <p>This is the about page</p>
        </div>
    )
}

const Contacts = () => {
    return (
        <div className="home">
            <h1>Contacts Page</h1>
            <p>This is the contact page</p>
        </div>
    )
}

const Services = () => {
    return (
        <div className="home">
            <h1>HomePage</h1>
            <p>lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));