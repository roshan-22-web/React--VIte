//same as Useeffect bus only used in animating DOM
import React, {useState, useEffect, useLayoutEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  useLayoutEffect(()=>{
    console.log("count"+count);
   }, [count])

   console.log("rendered")
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((curr)=>curr+1)}>Add</button>
    </div>
  )
}

export default App