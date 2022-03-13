import React, { useReducer } from "react";


const initialValue = 0;
const reducer=(state,action)=>{
  switch(action){
      case 'increment':
          return state + 1;
      case 'decrement' :
          return state - 1;
      default :
          return state;        
  }
}

const SimpleUseReducer=()=>{
 const [count, dispatch]  = useReducer(reducer,initialValue)

return(
    <>
    
  <p>{count}</p>
  <button onClick={()=>{dispatch('increment')}}>increment</button>
  <button onClick={()=>{dispatch('decrement')}}>decrement</button>
    
    </>
)
}
export default SimpleUseReducer;