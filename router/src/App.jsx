import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/navbar"
import User from "./components/User"
import Notfound from "./pages/Notfound"



function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/user/:username" element={<User/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
