import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './components/Pet'
import data from './data'
import './assets/main.css'
import SearchParams from './SerachParams'

const App = () => {

    const renderItem = (items) => {
        return items.map(item => <Pet name={item.name} breed={item.breed} />);
    }

    return (
        <div className="app" id="app">
            <h1>Hello World</h1>
            <SearchParams />
            <p>Here is a list of Pets</p>
            <div className="pets">
                {renderItem(data)}
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));