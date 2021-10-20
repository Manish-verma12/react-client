import React from 'react';
import {CustomForm,Counter, CounterV2} from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <customForm name="Manish" lastname="verma" location="App.js" />
        <customForm name="raj" lastname="verma" location="App.js" />
        <customForm name="jack" lastname="rose" location="App.js" />
        <Counter/>
        <Counter initialCounter={5} intervalValue={2000}/>
        <Counter initialCounter={10} intervalValue={3000}/>
        <CounterV2/>
        
      </header>
    </div>
  );
}

export default App;
