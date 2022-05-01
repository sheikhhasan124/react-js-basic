import React, { useReducer } from 'react';

const initialValue={
    counter:0
}
const reducer=(state,action)=>{
     switch(action.type){
         case 'inc':
             return {counter: state.counter + action.value}
         case 'dec': 
              return {counter:state.counter - action.value}    
          default:
              return state    
     }
}

const PracticeThree = () => {
    const [count,dispatch]=useReducer(reducer,initialValue)
    return (
        <div>
            <p>inc:{count.counter}</p>
            <button onClick={()=>dispatch({type:'inc',value:1})}>inc-by-1</button>
            <button onClick={()=>dispatch({type:'inc',value:5})}>inc-by-5</button>
            <p>dec:{count.counter}</p>
            <button onClick={()=>dispatch({type:'dec',value:1})}>dec-by-1</button>
            <button onClick={()=>dispatch({type:'dec',value:5})}>dec-by-5</button>
        </div>
    );
};

export default PracticeThree;