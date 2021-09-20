import {useState} from 'react'
import Greeting from './components/Greeting.js'
import './App.css';
import Fun from './components/Fun.js';

function App() {

  const [magicNumber, setMagicNumber] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <h1>{magicNumber}</h1>}
      <Fun 
        magicNumber={magicNumber} 
        setMagicNumber={setMagicNumber}
        show={show}
        setShow={setShow}/>
      <Fun 
      magicNumber={magicNumber} 
      setMagicNumber={setMagicNumber}
      show={show}
        setShow={setShow}/>
      <Fun 
      magicNumber={magicNumber} 
      setMagicNumber={setMagicNumber} 
      amount={5}
      show={show}
        setShow={setShow}/>
      <Fun 
      magicNumber={magicNumber} 
      setMagicNumber={setMagicNumber} 
      amount={75}
      show={show}
        setShow={setShow}/>
      <Greeting name="Martin" age="21" gender="male"/>
    </div>
  );
}

export default App;
