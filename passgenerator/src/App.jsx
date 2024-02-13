// By - Anamay Dubey
// Date  - 13/02/24
import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  //function to generate random passwords with or without char and symbols
  const passwordGenerator = useCallback(()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(noAllowed){ str+="0123456789"}
    if(charAllowed){str+='~!@#$%&*()_+=-{}[]:"|<>?,./?'}

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,noAllowed,charAllowed,setPassword])

  //copy  to clipboard functionality
  const copyPassToClipboard = useCallback(()=> {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {passwordGenerator()},[noAllowed,charAllowed,length,passwordGenerator] )

  //use ref hook
  const passRef = useRef(null)

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
      <h1 className='text-4xl text-center text-white px-4 py-4 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-black' placeholder='password' readOnly ref={passRef}></input>
          <button type="button" className="text-white bg-gray-800 outline-cyan-600 px-3 py-0.5 shrink-0 dark:hover:bg-gray-700" onClick={copyPassToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=> {setLength(e.target.value)}}/>
          <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={noAllowed} onChange={() => {setNoAllowed((prev)=> !prev)}}/>
          <label >Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev)=> !prev)}}/>
          <label >Characters</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
