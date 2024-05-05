// import logo from './logo.svg';
import './App.css';
// import ModeToggle from './ModeToggle';
import Child from './Child';
import React, { useState } from 'react';

function App() {
  const date = new Date();
  const[word, setWord] = useState('Eat');

  function handleClick() {
    setWord('Drink');
  }
  
  return (
    <div>
      <Child message= {date.toLocaleTimeString()}/>
      <h1>{word} at Little Lemon!</h1>
      <button onClick={handleClick}>Click To Update.</button>
    </div>
  );
}

export default App;
