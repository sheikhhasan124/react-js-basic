import React, { useReducer } from "react";

const initialValue={
    counter:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {counter: state.counter + action.value}
        case 'decrement': 
            return {counter: state.counter - action.value}
        default:
             return state;
    }
}
const MoreRealUseReducer=()=>{
  const [count,dispatch] =  useReducer(reducer,initialValue)
    return(
    <>
       <h1>more useReducer</h1> 
       <p>{count.counter}</p>
       <button onClick={()=>{dispatch({type:'increment', value:1})}}>increment by 1</button>
       <button onClick={()=>{dispatch({type:'increment', value:5})}}>increment by 5</button>
       <button onClick={()=>{dispatch({type:'decrement', value:1})}}>decrement by 1</button>
       <button onClick={()=>{dispatch({type:'decrement', value:5})}}>decrement by 5</button>
    </>
    )
}
export default MoreRealUseReducer;