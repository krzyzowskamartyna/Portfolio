import React, { Component } from 'react';

import Start from './components/Start';
import Navbar from './components/Navbar';

import './css/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
        <Navbar />
      </div>
    );
  }
}

export default App;
