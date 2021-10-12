//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import CustomForm from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <customForm name="Manish" lastname="verma" location="App.js" />
        <customForm name="raj" lastname="verma" location="App.js" />
        <customForm name="jack" lastname="rose" location="App.js" />
        <p>
          Edit
          <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
