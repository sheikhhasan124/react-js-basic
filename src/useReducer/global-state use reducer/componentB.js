import React, { useContext } from "react";
import { counterContex } from "./app";


const ComponentA =()=>{
  const countContext = useContext(counterContex)
    return(
        <>
          <p>Component A</p>
        <button onClick={()=>{countContext.countDispatch('increment')}}>increment</button>
        <button onClick={()=>{countContext.countDispatch('decrement')}}>decrement</button>
        </>
    )
}
export default ComponentA;