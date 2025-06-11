import React,{useState}from 'react'
import "./App.css"
import { v4 as uuid} from 'uuid';

const App = () => {

  const [users, setUsers] = useState([])

  const [buttonstate, setButtonstate] = useState("add")

  const [userinfo, setUserinfo] = useState({
    id:uuid(),
    name:"",
    age:"",
    email:"",
    phone:""
  })

  const handlechange=(e) =>{
     const{name, value} = (e).target
     setUserinfo((currinfo)=>{
      return{
        ...currinfo,
        [name] : value,
      }
     })
 }

 const addData =() =>{
  setUsers((currUsers)=>[...currUsers, userinfo])
  setUserinfo({
    id:uuid(),
    name:"",
    age:"",
    email:"",
    phone:""
  })
 }
 
 const deleteData =(id) =>{
   setUsers((currUsers)=>{
    return currUsers.filter((user)=>{
      return user.id !== id;
    })
   })}
 
const startEditing =(user)=>{
   setUserinfo(user)
   setButtonstate("edit")
}
const cancelEditing =()=>{
   setUserinfo({
    id:uuid(),
    name:"",
    age:"",
    email:"",
    phone:""
   })
   setButtonstate("add")
}

const upadteEditing =()=>{
  setUsers((currUsers)=>{
    return currUsers.map((user)=>{
      if(user.id===userinfo.id){
        return userinfo
      }
       return user;
    })
  })
  cancelEditing()
}

  return (
    <div className='container'>
      <div className='form'>
        <input 
        type='text'
        placeholder='Enter your name' 
        value={userinfo.name} 
        name='name'
        onChange={handlechange}/>
        
        <br />
        <input 
        type='number' 
        placeholder='Enter your age' 
        name='age' 
        value={userinfo.age}
        onChange={handlechange} />
        <br />
        <input 
        type='email' 
        placeholder='Enter your email' 
        name='email'
        value={userinfo.email}
        onChange={handlechange}/>
        <br />
        <input 
        type='number' 
        placeholder='Enter your phone-no' 
        name='phone' 
        value={userinfo.phone}
        onChange={handlechange}/>
        <br />
        {
          buttonstate === "add" ? (<button onClick={addData}>Add</button> )
          :( 
            <div className='button-container'>
              <button onClick={upadteEditing}>Update</button>
              <button onClick={cancelEditing}>Cancel</button>
            </div>
          )
        }
      </div>

      <div className='dataTable'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index)=>{
              return <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={()=>startEditing(user)}>Edit</button>
                  <button onClick={()=>deleteData(user.id)}>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
 }


export default App