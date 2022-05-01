import React, { useReducer } from 'react';

const initialValue = {
    counter1:0,
    counter2:0
}
const reducer=(state,action)=>{
      switch(action.type){
          case 'inc':
              return {...state,counter1:state.counter1 + action.value};
          case 'dec':
              return{...state, counter1:state.counter1 - action.value}   
          case 'inc2':
              return{...state, counter2:state.counter2 + action.value};
          case 'dec2':
              return{...state, counter2:state.counter2 - action.value}         
          default:
              return state;
      }
}

const PracticeTwo = () => {
    const [count, dispatch]=useReducer(reducer,initialValue)
    return (
        <div>
            <p>real usereducer </p>
            <p>counter-1:{count.counter1}</p>
            <button onClick={()=>dispatch({type:'inc',value:1})}>inc-1 by 1</button>
            <button onClick={()=>dispatch({type:'dec', value:1})}>dec-1 by 1</button>
            <p>couter-2:{count.counter2}</p>
            <button onClick={()=>dispatch({type:'inc2', value:1})}>inc-2 by 1</button>
            <button onClick={()=>dispatch({type:'dec2', value:1})}>dec-2 by 1</button>
        </div>
    );
};

export default PracticeTwo;