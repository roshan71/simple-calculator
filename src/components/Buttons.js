import React from "react";
import style from "./Buttons.module.css"
const Buttons=(props)=>{
    
    const clickHandle=(e)=>{
        e.preventDefault();
        if(e.target.value==="AC"){
            props.equ("AC")
        }
        else if(e.target.value==="DEL"){
            props.equ("DEL")
        }
        else if(e.target.value==="."){
            props.equ(".")
        }
        else
        props.equ(e.target.value)
       
    }
   
    return(
        <div className={style['mainButton'+props.classn]}>
            <button type="button" value={props.value} onClick={clickHandle}>{props.value}</button>
        </div>
    );
};
export default Buttons;
