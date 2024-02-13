import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Hello, Anamay</h1>
      <Card heading="Anamay" btnText="Click Me →"/>
      <Card heading="Pradeep" btnText="View  Profile →"/>
    </>
  )
}

export default App
