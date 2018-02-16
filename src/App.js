import React, { Component } from 'react';
import Navbar from './components/navbar';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
