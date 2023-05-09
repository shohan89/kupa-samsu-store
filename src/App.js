import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllGuns from './components/AllGuns/AllGuns';
import { useState } from 'react';

function App() {
  const [ count, setCount ] = useState(0);
  const increaseCount = () => { setCount( count + 1 ) };

  return (
    <div className="App">
      <Navbar count={ count }></Navbar>
      <AllGuns increaseCount={ increaseCount }></AllGuns>
    </div>
  );
}

export default App;
