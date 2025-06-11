import React, {useState} from 'react'
import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT : "increment",
  DECREMENT : "decrement"
}

function reducerFn(state, action){
   switch(action.type){
    case ACTIONS.INCREMENT :
      return{ count: state.count + 1}
    case ACTIONS.DECREMENT :
      return{ count: state.count - 1}
    default :
      return state;  
   }
}

const App = () => {
  const [state, dispatch] = useReducer(reducerFn, { count:1 })
  const [count, setCount] = useState(1)
  

  const increment=()=>{
    //  setCount((curr) => curr+1)
    dispatch({type: ACTIONS.INCREMENT})
  }
  const decrement=()=>{
    // setCount((curr) => curr-1)
    dispatch({type: ACTIONS.DECREMENT})
  }

  // console.log(state)

    return (
    <div style={
     { display:"flex",
       alignItems:"center"
       
     }

    }>
     <button onClick={increment}>+</button>
     <h1>{state.count}</h1>
     <button onClick={decrement}>-</button>

    </div>
  )
}

export default App