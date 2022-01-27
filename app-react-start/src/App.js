// import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';



/*
import PersonList from './Components/PersonList';
class App extends Component {
  render() {
    return (
      <div className = "App">
        <header className = "App-header">
          <img src = {logo} className = "app-logo" alt = "logo" />
          <h1 className = "App-title"> Welcome to React </h1>
        </header>
          <PersonList/>
      </div>
    )}}
*/


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HELLO AND GOOD MONRING EVERYONE!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
   
    </div>
  );
}

export default App;
