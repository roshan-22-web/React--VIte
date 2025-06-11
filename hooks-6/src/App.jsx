import React, {createContext, useState} from 'react'
import Container from './container'

export const ThemeContext = createContext()


const App = () => {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={
      {theme}
    } >
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>App comp</h1>
      <Container />
    </ThemeContext.Provider>
  )
}

export default App