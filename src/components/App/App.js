import React, { Component } from "react";

import c from './App.module.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={c.title}>My React App!</h1>
            </div>
        );
    }
}

export default App;