import React, { useReducer } from "react";

const initialValue={
    counter:0,
    counter2:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,counter: state.counter + action.value}
        case 'decrement': 
            return {...state,counter: state.counter - action.value}
        case 'increment2':
            return {...state,counter2: state.counter2 + action.value}
        case 'decrement2': 
            return {...state,counter2: state.counter2 - action.value}
        default:
             return state;
    }
}
const MoremoreRealUseReducer=()=>{
  const [count,dispatch] =  useReducer(reducer,initialValue)
    return(
    <>
       <h1>more more useReducer</h1> 
    <div>
    <p>{count.counter}</p>
       <button onClick={()=>{dispatch({type:'increment', value:1})}}>increment by 1</button>
     
       <button onClick={()=>{dispatch({type:'decrement', value:1})}}>decrement by 1</button>
    </div>
    <div>
    <p>{count.counter2}</p>
       <button onClick={()=>{dispatch({type:'increment2', value:1})}}>increment2 by 1</button>
     
       <button onClick={()=>{dispatch({type:'decrement2', value:1})}}>decrement2 by 1</button>
    </div>
    
     
    </>
    )
}
export default MoremoreRealUseReducer;