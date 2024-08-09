
import { useState } from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(0)

// let counter = 10

const addValue = () => {
  // counter = counter + 1  
  if (counter < 200) {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
};
const removeValue = () => { 
  if (counter > 0) {
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
    setCounter(prevCounter => prevCounter - 1)
  }
};

  return (
    <>
     <h1>Tap is Funny</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick ={addValue}>Add value: +5</button>
     <br />
     <button onClick ={removeValue}>Remove value: -3</button>
     <p>Count: {counter}</p>
    </>
  )
}

export default App
