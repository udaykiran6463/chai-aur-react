import { useState } from 'react'
import './App.css'

function App() {
  const [val,setValue] = useState(10);

  function decrement(e){
    e.preventDefault();
    if(val > 0){
      setValue(val-1);
    }
  }
  
  function increment(e){
    e.preventDefault();
    if(val < 20){
      setValue(val+1)
    }
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
