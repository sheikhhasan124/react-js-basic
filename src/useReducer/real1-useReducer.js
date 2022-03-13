import React, { useReducer } from "react";

const initialValue={
    counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter: state.counter + 1}
        case 'decrement': 
            return {counter: state.counter - 1}
        default:
             return state;
    }
}
const RealUseReducer=()=>{
  const [count,dispatch] =  useReducer(reducer,initialValue)
    return(
    <>
       <h1>helllo</h1> 
       <p>{count.counter}</p>
       <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
       <button onClick={()=>{dispatch({type:'decrement'})}}>decrement</button>
    </>
    )
}
export default RealUseReducer;