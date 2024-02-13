import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colore, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: colore }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-lg">
            <button className="outline-none px-4 py-1 rounded-xl text-white  shadow-lg"
              style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "pink" }} onClick={() => setColor("pink")}>Pink</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "brown" }} onClick={() => setColor("brown")}>Brown</button>

            <button className="outline-none px-4 py-1 rounded-xl text-black shadow-lg"
              style={{ backgroundColor: "white" }} onClick={() => setColor("white")}>White</button>

            <button className="outline-none px-4 py-1 rounded-xl text-black shadow-lg"
              style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "black" }} onClick={() => setColor("black")}>Black</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}>Olive</button>

            <button className="outline-none px-4 py-1 rounded-xl text-white shadow-lg"
              style={{ backgroundColor: "dark-violet" }} onClick={() => setColor("violet")}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
