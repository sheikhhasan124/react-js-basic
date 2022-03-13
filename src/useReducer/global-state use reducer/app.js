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