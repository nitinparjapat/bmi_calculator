import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[weight,setWeight]=useState(50);
  const[height,setHeight]=useState(5.7);
  const[bmi,setBmi]=useState(1);
  const[message,setMessage]=useState("You are underweight");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fire");
   const bmic=(e.target[0].value/((e.target[1].value*0.3048)**2)).toFixed(3);console.log(bmic);
   setBmi(bmic);
   if(bmic<18.5){
     setMessage("You are underweight");
   }
   else if(bmic>=18.5 && bmic<=24.9){
     setMessage("You are normal weight");
   }
   else if(bmic>=25 && bmic<=29.9){
     setMessage("You are overweight");
   }
   else{
     setMessage("You are obese");
   }
  }

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">Weight(Kg)</label><br/>
      <input type="text" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/><br/>
      <label htmlFor="">Height(Ft)</label><br/>
      <input type="text" value={height} onChange={(e)=>{setHeight(e.target.value)}} /><br/>
     <button type="submit">Submit</button>
     <button type="reset">Reset</button>
     </form>
     <h3>{bmi}</h3>
      <h3>{message}</h3>
    </>
  )
}

export default App
