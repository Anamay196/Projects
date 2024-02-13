import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// let counter = 1
function App() {
  
  let [counter,setCounter] = useState(15)
  const addValue = () =>{
    return setCounter(counter+1)
  }

  const decValue = () =>{
    if(counter>0)
    setCounter(counter-1)
  }

  const reset = () =>{
    if(counter!=0)
      setCounter(counter=0)
  }
  
  return (
    <>
  <div className="container-title">
  <h1>COUNTER</h1>
  </div>
  <div className="body-container">
  <h1>Counter Value: {counter}</h1>
  </div>
  <div className="button-container">
    <button id="btn21" onClick={addValue}>Add</button>
  </div>
  <div className="button-container">
    <button id="btn2" onClick={decValue}>Decrease</button>
  </div>
  <div className="button-container">
    <button id="btn3" onClick={reset}>Reset</button>
  </div>
  <p>By Anamay</p>
</>
  )
}

export default App
