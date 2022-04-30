import React, { useReducer } from "react";

const initialValue= 0;
const initialValue2= 5;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement': 
            return state - 1
        default:
             return state;
    }
}
const RealUseReducer=()=>{
  const [count,dispatch] =  useReducer(reducer,initialValue)
  const [count2,dispatch2] =  useReducer(reducer,initialValue2)
    return(
    <>
       <h1>local usereducer four</h1> 
        <div>
        <p>{count}</p>
       <button onClick={()=>{dispatch('increment')}}>increment</button>
       <button onClick={()=>{dispatch('decrement')}}>decrement</button>
        </div>
        <div>
        <p>{count2}</p>
       <button onClick={()=>{dispatch2('increment')}}>increment</button>
       <button onClick={()=>{dispatch2('decrement')}}>decrement</button>
        </div>
    </>
    )
}
export default RealUseReducer;