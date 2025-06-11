import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../slices/userSlice'




const Home = () => {
   const dispatch = useDispatch()

  const [forminput, setformInput] = useState({
    name: "",
    age:"",
    email:"",
    contact:"",
  })

  const handlechange = (event)=>{
    const{name,value } = event.target
    
    setformInput((currInput)=>{
      return{
        ...currInput,
          [name]:value,
      }
    })
  }
   const addUser =(event) => {
    event.preventDefault();
     dispatch(setUsers(forminput));
   }
  
  return (
    <div>
        <form>
          <label>Name</label>
          <br /> 
          <input name='name' type='text' value={forminput.name} onChange={handlechange}/>
          <br/>
          <label>Age</label>
          <br /> 
          <input name='age' type='number' value={forminput.age} onChange={handlechange}/>
          <br/>
          <label>Email</label>
          <br /> 
          <input name='email' type='text'value={forminput.email} onChange={handlechange}/>
          <br/>
          <label>Contact</label>
          <br /> 
          <input name='contact' type='number'value={forminput.contact} onChange={handlechange}/>
          <br/>
          <button onClick={addUser} >Add</button>
        </form>
        
    </div>
  )
}

export default Home