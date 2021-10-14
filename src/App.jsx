import React from 'react';
import {CustomForm,Counter} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <customForm name="Manish" lastname="verma" location="App.js" />
        <customForm name="raj" lastname="verma" location="App.js" />
        <customForm name="jack" lastname="rose" location="App.js" />
        <Counter/>
        <p>
          Edit
          <code>src/App.js</code> 
          and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
