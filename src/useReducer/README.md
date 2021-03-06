# useReducer  

## use 1-5 is local state ar use  
### use -1  
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

### real use 2   
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

### real use 3    
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

### use 4  
```
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
```

### use 5  
```
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
       <h1>real4</h1> 
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

```

## global state start  


```
##app.js##

import React, { useReducer } from "react";
import ComponentA from "./componentB";

export const counterContex = React.createContext();

const initialValue = 0;
const reducer=(state,action)=>{
   switch(action){
       case 'increment':
           return state +1;
        case 'decrement':
            return state - 1;
         default:
             return state;      
   }
}

const App =()=>{
 
 const [count, dispatch] = useReducer(reducer,initialValue)

    return(
        <>
        <h1>global state</h1>
      <div>count:{count}</div>
      <counterContex.Provider value={{countDispatch: dispatch}}>
           <ComponentA />
      </counterContex.Provider>
   
        </>
    )
}
export default App;


## componentB ##

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

## componentA 

import ComponentB from './componentB.js'
 
const ComponentA=()=>{
    return(
        <>
        <ComponentB />
        </>
    )
}
export default ComponentA;
``` 

## server-data fetch in usereducer  


## in useState  
```
import { useEffect, useState} from "react";

const GetPost =()=>{
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState('')
    const [post, setPost]= useState({})


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        setLoading(false)
        setPost(data)
        setError('')
    })
    .catch(err=>{
      setLoading(false)
      setPost({})
      setError("ther is prblm")
    })
},[])

    return(
        <>
        <h2>get post</h2>
        {loading? 'loading....':post.title}
        {error? error:null}
        </>
    )
}
export default GetPost;
```

## in useReducer  
```
import React, { useEffect, useReducer } from "react";

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loading:false,
                post:action.result,
                error:''
            }
        case 'ERROR':
            return{
                loading:false,
                post:action.result,
                error:'threr was a prblm to fetching'
            }
        default:
            return state;  
    }
}

const GetPost2 =()=>{
    const [state,dispatch] = useReducer(reducer,initialState)


   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            dispatch({type:'SUCCESS', result:data})
        })
        .catch(()=>{
            dispatch({type: 'ERROR'})
        });
    },[])

    return(
        <>
         <h2>get post</h2>
        {state.loading? 'loading....': state.post.title}
        {state.error || null}
        </>
    )
}
export default GetPost2;
```