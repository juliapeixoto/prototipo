import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Teste from './components/Teste';

class App extends Component{
  render(){
    return(
      <>
      <Teste/>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
      </>
    );
  }
}

export default App;
