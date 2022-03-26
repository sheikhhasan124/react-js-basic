import React, { useState } from 'react';

import Todos from './todos';



const App=()=>{
    const [todos,setTodos] = useState(['todo1','todo2'])
    const [count,setCount] = useState(0)
    return(
        <>
        
        <Todos todos={todos} />
        <br />
        <p>{count}</p>
        <button onClick={()=>{setCount(count + 1)}}>increment</button>
      
        </>
    )
}
export default App;