import React, { Component } from 'react';
import './App.css';
import Avengers from './avengersData';
import AvengersList from './components/AvengersList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Avengers: Avengers
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Avengers: by Pedro Montesinos.</h1>
        </header>
        <AvengersList avengersData={this.state.Avengers} />
      </div>
    );
  }
}

export default App;
