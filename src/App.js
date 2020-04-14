import React , { Component } from 'react';
import Form from './Form';

class App extends Component {

    render() { 
        return (
            <div className="results-box">
                <h1>Olympic Results Search </h1>

                <Form handleSubmit={this.handleSubmit} />

                <h1>Winners </h1>

            </div>
        );
    }
}

export default App;
