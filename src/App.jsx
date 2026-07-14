import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVeh from './components/AddVeh'
import ViewVeh from './components/ViewVeh'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>

      <Route path="/" element={<AddVeh/>}/>
      <Route path="/view" element={<ViewVeh/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
