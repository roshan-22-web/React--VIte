import React,{useState} from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'

const App = () => {
   
  const[number,setNumber] = useState(0)
  const[dark,setDark] = useState(false)

  const doubleNum = useMemo(()=>{
    return slowFunction(number)
  }
  ,[number])

  const themeStyles = useMemo(()=>{
   return{
    backgroundColor: dark? "black" : "white",
    color: dark? "white" : "black",
   }
  },[dark])
    
  
  useEffect(()=>{
    console.log("Theme changed")
  },[themeStyles])


  return (
    <div>
      <input 
      type='number' 
      value={number}
      onChange={(e)=> setNumber(e.target.value)} 
      />
      <button onClick={()=>setDark((curr) => (!curr))}>Toggle button</button>
      <div style={themeStyles}>{doubleNum}</div>
    </div>
  )
}

export default App

function slowFunction(num){
  console.log("runnning slow");
  
  for(let i=0;i<10000000;i++){}
   return num*2
}