import React, { useReducer, useState } from 'react';

const initialValue = 0
const initialValue1 = 5;
const reducer=(state, action)=>{
    switch(action){
        case 'inc':
            return state+1;
         case 'dec':
             return state -1;   
            default:
                return state;
    }
}

const PracticeOne = () => {
    const [num, setNum]=useState(0)
    // usereducer
 const [count, dispatch]=useReducer(reducer, initialValue)
 const [count1, dispatch1]=useReducer(reducer,initialValue1)
    return (
        <div>
            {/* useState */}
            <h3>useState</h3>
            <p>{num}</p>
            <button onClick={()=>setNum(num + 1)}>+</button>
            <button onClick={()=>setNum(num - 1)}>-</button>
            <h3>useReducer count initial </h3>
            <p>{count}</p>
             <button onClick={()=>dispatch('inc')}>+</button>
             <button onClick={()=>dispatch('dec')}>-</button>
             <h3>usereducer count1 initial 5</h3>
             <p>{count1}</p>
             <button onClick={()=>dispatch1('inc')}>+</button>
        </div>
    );
};

export default PracticeOne;