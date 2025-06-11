import React,{useEffect, useState} from 'react'

const App = () => {

  const [first, setFirst] = useState(1)
  const [second, setSecond] = useState(100)

  const getData=()=>{
    console.log("Data recieved");
    
  }
  useEffect(()=>{
    getData()
  }, [])

  useEffect(()=>{
    console.log("First updated")
  },[first])
  return (
    <div>
      <h1>First: {first}</h1>
      <button onClick={()=>setFirst((curr)=>curr+1)}>Add First</button>
      <hr></hr>
      <h1>Second: {second}</h1>
      <button onClick={()=>setSecond((curr)=>curr+1)}>Add First</button>
     
      </div>
      
     
      
  )
}

export default App