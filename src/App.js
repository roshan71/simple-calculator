import Display from './components/Display';
import './App.css';
import React ,{useState} from "react";
import Calc from './components/Calc';
function App() {
  const [equ,setEqu]=useState("")
  const setEquation=(e)=>{
    setEqu(e)
    //console.log(equ)
  }
  return (
    <div className='allmain'>
    <div className="main">
     <h1>Simple CalC</h1>
     <div className='mainCalc'>
     <div className='displayContainer'>
    
     </div>
     <div className='calcContainer'>
     <Display equ={equ}/>
      <Calc getEquation={setEquation}/>
     </div>
    </div>
    </div>
    </div>
  );
}

export default App;
