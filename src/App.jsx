import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddVeh from './components/AddVeh'
import ViewVeh from './components/ViewVeh'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddVeh/>
      <ViewVeh/>
    </>
  )
}

export default App
