import React,{useEffect, useRef, useState}from 'react'

const App = () => {
  const[input,setInput] = useState("")
  
  const inputRef = useRef()

  console.log("getting rerendered");

  useEffect(() =>{
    inputRef.current = input
 },[input])

  const display =() =>{
    console.log(inputRef.current)
  }

  return (
    <div>
      <h1>Input</h1>
      <input
        type='text'
        value={input}
        onChange={(event)=> setInput(event.target.value)} 
        />
       <h3>My name is {input}</h3>
       <h3>My name is {inputRef.current}</h3>
       <button onClick={display}>show Input</button>
    </div>
   
  )
}

export default App