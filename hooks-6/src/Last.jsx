import React, { useContext } from 'react'
import { ThemeContext } from './App'

const Last = () => {

  const { theme } = useContext(ThemeContext)
  //console.log("contextValue", contextValue);
  

 const textSyle = {
  backgroundColor:theme === "light"?"white":"black",
  color:theme === "light"?"black":"white",
 }
  return (
    <div >
      <h1 style={textSyle }>Last comp</h1>
    </div>
  )
}

export default Last