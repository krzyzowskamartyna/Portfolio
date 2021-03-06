import React, { Component } from 'react';

import Start from './components/Start';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
