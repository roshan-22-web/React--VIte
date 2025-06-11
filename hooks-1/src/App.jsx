import React,{useState} from 'react'

const App = () => {
  let[Num, setNum] = useState(100)
  const add = () =>{
     setNum((currvalue) =>{
        return currvalue-1
     })
  }

  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={add}>less</button>
    </div>
  )
}

export default App