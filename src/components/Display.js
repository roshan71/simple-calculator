import React from "react";
import style from "./Display.module.css";

const Display=(props)=>{
    return(
        <div className={style.mainDisplay}>
        <input value= {props.equ}></input>
        </div>
    );
};

export default Display;