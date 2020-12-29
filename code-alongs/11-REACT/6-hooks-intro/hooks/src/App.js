import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [ state, setState ] = useState(1) //this is a function that returns you an array of two things
  const [ count, setCount  ] = useState(1) 
  const handleClick = () => setCount(count + 1)

  return (
    <div className="App">
      <span>{count}</span>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
