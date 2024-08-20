import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    "name":"uday kiran",
    "roll":"20071A6640"
  }
  const arr1 = [1,2,3,4,5]

  return (
    <div className='flex  flex-wrap'>
      <Card cardNumber="card1" info = {myObj} arr = {arr1} />
      <Card cardNumber="card2" info = {myObj} arr = {arr1}/>
      <Card cardNumber="card2" info = {myObj} arr = {arr1}/>
      <Card cardNumber="card2" info = {myObj} arr = {arr1}/>
      <Card cardNumber="card2" info = {myObj} arr = {arr1}/>
      <Card cardNumber="card2" info = {myObj} arr = {arr1}/>
    </div>
  )
}

export default App
