import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';

// let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
        <div
          className="app"
        >
          Welcome to Osuplay

          <Footer />
        </div>
    );
  }

}



export default App;
