import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display:'flex', gap:10}}>
        <Bai1></Bai1>
        <Bai2></Bai2>
        <Bai3></Bai3>
      </div>
    </>
  )
}

export default App
