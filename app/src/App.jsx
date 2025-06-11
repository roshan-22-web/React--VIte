import React, { useState } from 'react';
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
   
  async function apicall() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  }
   
  return (
    <div>
      <h1>User Data</h1>
      <button onClick={apicall}>Fetch Users</button>
      
      {users.length > 0 && (
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;