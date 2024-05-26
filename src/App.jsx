import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import FoodLists from './assets/FoodLists'
export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
      <div className="container">
          <Navbar
           darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
             />
          
          <FoodLists 
          darkMode={darkMode} 
          />
      </div>
  )
}
