import React, { useContext } from "react";
import { counterContex } from "./app";


const ComponentB =()=>{
  const countContext = useContext(counterContex)
    return(
        <>
          <p>Component B</p>
        <button onClick={()=>{countContext.countDispatch('increment')}}>increment</button>
        <button onClick={()=>{countContext.countDispatch('decrement')}}>decrement</button>
        </>
    )
}
export default ComponentB;