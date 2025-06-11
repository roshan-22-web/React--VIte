import React from 'react'
import { useQuery } from 'react-query'

const Test1 = () => {
    const {isLoading, data, error} = useQuery("githubData",apiCall)

 function apiCall (){
     return fetch("https://api.github.com/repos/roshan-22-web/Roshan").then(
        (res) => res.json()
     )
 }   
 if(isLoading){
    return <h1>Loading..</h1>
    
 }
 if(error){
    return <h2>An error occured: {error}</h2>
 }
 console.log(data);
 
  return (
    <div>
       <h1>Repo name:{data.name}</h1> 
       <h3>Repo forks:{data.forks}</h3> 
       <h3>Repo strangers:{data.stargazers_count}</h3> 
       <h3>Repo watchers:{data.watchers_count}</h3> 
    </div>
  )
}

export default Test1