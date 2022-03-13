# useReducer  

### use  
```
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
```

### real use 1  
```
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

```

### real use 2  
```
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

```