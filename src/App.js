import React, { useState } from 'react'
import './App.css'
import Result from './Result'
const secretNum=Math.floor(Math.random() * 10)+1

function App() {
  const [term,setTerm]=useState("")
  const HandleChange =(e)=>{
      e.preventDefault();
      setTerm(e.target.value)
  }
  return (
    <div className='container'>
      <div className="header">
        <label htmlFor='term'>Guess The number between 1 to 10(answer:{secretNum})</label>
      </div>
      <input type="text" name="term" id="" className="term" placeholder='Enter the Number' onChange={HandleChange}/>
      <Result secretnumber={secretNum} term={term}/>
      
    </div>
  )
}

export default App

