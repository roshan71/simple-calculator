import React, { useState } from "react";
import Buttons from "./Buttons";
import style from "./Calc.module.css";
const Calc = (props) => {
  const [equation, setButton] = useState("");
  const [temp, setTemp] = useState("");
  const [temp1, setTemp1] = useState("");
 const [count,setCount]=useState(0);
  const setEquation = (e) => {
   
    if (e === "=") {
      // if it's an equal sign, use the eval module
      // to evaluate the question ,convert the answer
      // (in number) to String
      if (temp !== "") {
        let tof=temp+equation
        let cal=calcu(tof);
        setTemp(cal);
        console.log("inn 2 "+tof);
        setTemp1("")
       // console.log("call returm"+cal);
        setTemp((temp)=>cal+e)
        setButton((equation)=>cal)
      }
    } else if (e === "AC") {
      setButton("");
      setTemp("");
      setTemp1("")
     setCount(0);
    } else if (e === "DEL") {
      let change = equation.slice(0, -1);
     
      setButton((equation) => change);
      setTemp1(change)
     
    } else {
    //  console.log(temp)
      if (e !== "+" && e !== "-" && e !== "*" &&e !== "/" && e !== "%") 
     {
     
      setButton((equation)=>temp1+e);
      setTemp1((temp1)=>temp1+e);
     }
     else{
       if(count===0){
         
         setTemp(temp1+e);
    //     console.log(temp)
         setButton((equation)=>equation);
         setTemp1("");
       //  console.log("In 1st "+temp);
         setCount(1);
       }
       else{
         console.log("in 2 t1 "+temp);
         console.log("at"+temp.charAt(temp.length-1))
         console.log("sl "+temp.slice(0,-1))
         let tof=temp+temp1;
         console.log(tof)
         if(tof.charAt(tof.length-1)==="+"||tof.charAt(tof.length-1)==="-"||tof.charAt(tof.length-1)==="*"||tof.charAt(tof.length-1)==="/"){
           tof=temp.slice(0,-1)+"+0";
           let change=temp.slice(0,-1)
           setTemp(change)
          
         }
         console.log("xi "+tof)
       let cal=calcu(tof);
          setTemp(cal);
          //console.log("inn 2 "+temp);
          setTemp1("")
        //  console.log("call returm"+cal);
          setTemp((temp)=>cal+e)
          setButton((equation)=>cal)
        }
      
       }
     }
    
  };

  const calcu=(t1)=>{
    if (t1 !== "") {
      console.log(t1)
      let ans = "";
      try {
        ans = eval(t1);
      } catch (err) {
        setButton("Math Error");
      }
      if (ans === "") return "Math Error";
      // update answer in our state.
      else return ans;
    }
  }

  props.getEquation(equation);
  return (
    <div>
      <div className={style.line_one}>
        <Buttons value="AC" equ={setEquation} classn="special" />
        <Buttons value="DEL" equ={setEquation} classn="special" />
        <Buttons value="%" equ={setEquation} classn="special" />
        <Buttons value="/" equ={setEquation} classn="special" />
      </div>
      <div className={style.line_one}>
        <Buttons value="7" equ={setEquation} classn="number" />
        <Buttons value="8" equ={setEquation} classn="number" />
        <Buttons value="9" equ={setEquation} classn="number" />
        <Buttons value="*" equ={setEquation} classn="special" />
      </div>
      <div className={style.line_one}>
        <Buttons value="4" equ={setEquation} classn="number" />
        <Buttons value="5" equ={setEquation} classn="number" />
        <Buttons value="6" equ={setEquation} classn="number" />
        <Buttons value="-" equ={setEquation} classn="special" />
      </div>
      <div className={style.line_one}>
        <Buttons value="1" equ={setEquation} classn="number" />
        <Buttons value="2" equ={setEquation} classn="number" />
        <Buttons value="3" equ={setEquation} classn="number" />
        <Buttons value="+" equ={setEquation} classn="special" />
      </div>
      <div className={style.line_one}>
        <Buttons value="." equ={setEquation} classn="number" />
        <Buttons value="0" equ={setEquation} classn="number" />

        <Buttons value="=" equ={setEquation} classn="specialequal" />
      </div>
    </div>
  );
};
export default Calc;
