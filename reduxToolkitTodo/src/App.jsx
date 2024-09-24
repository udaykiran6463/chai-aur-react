import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import Addtodo from './components/Addtodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = 'bg-[#3C444F] h-screen w-screen text-white'>
      <h1>Learn about redux toolkit</h1>
      <Addtodo />
      <Todos />
    </div>
  )
}

export default App
