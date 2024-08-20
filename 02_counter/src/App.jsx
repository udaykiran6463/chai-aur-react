import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [val,setValue] = useState(10);

  function decrement(e){
    e.preventDefault();
      setValue(val-1);
  }
  
  function increment(e){
    e.preventDefault();
      setValue((preVal)=>preVal+1);
      setValue((preVal)=>preVal+1);
      setValue((preVal)=>preVal+1);
      setValue((preVal)=>preVal+1);
  }

  return (
  <>
    <h1 className='heading'>chai aur react</h1>
    <div className="counter-container">
      <div className="counter-button minus" onClick={decrement}>-</div>
      <div className="counter-value">{val}</div>
      <div className="counter-button plus" onClick={increment}>+ </div>
    </div>
  </>

  )
}

export default App
