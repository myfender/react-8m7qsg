import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Pippo'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Proviamo a editare il file in real time :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
