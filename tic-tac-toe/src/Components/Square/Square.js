import React from "react";
import "../../App.css";

const Square = ({value, onclick}) => {
    let styleValue = value ===  "X" ? "styleX" : "styleO";

  return(
    <button className= {`${"square"} ${styleValue}`} onClick={onclick}>{value}</button> 
  )  
} 

export default Square;