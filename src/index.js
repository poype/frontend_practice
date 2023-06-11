import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class HelloWorld extends React.Component {

    render() {
        return (
            <h1 className="box1">Hello World, Start React</h1>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HelloWorld/>)