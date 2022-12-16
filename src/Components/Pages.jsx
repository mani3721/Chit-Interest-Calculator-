
import React from "react";
import { useState } from "react";


import FormData from "./Array1";
import FormData2 from "./Array2";


function Pages(){

const[button, setButton] =useState(false)

  const handleChange=()=>{

    setButton(true)

    console.log(button);
  }

   const handleClick=()=>{
       setButton(false)

       console.log(button);
  }

    return(
      <div>
        <div className="TopBtn">
        <button className="TopBtn1" onClick={handleClick}>Auctioned Amount& Interest</button>
        <button  className="TopBtn2"onClick={handleChange}>Bonus & Interest</button>
        </div>
         {
          button ? (<div><FormData2/></div>):(<div className="Container"><FormData/></div>)
         }

      </div>
         
    
    )
}

export default Pages