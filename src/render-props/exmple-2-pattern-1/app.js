import React from 'react';
import ClickCounter from './clickCounter';
import Counter from './counter';
import HoverCounter from './hoverCounter';



const App=()=>{
    return(
        <div>
         
          

         <Counter
           render={(count, incrementCount) => (
               <ClickCounter count={count} incrementCount ={incrementCount} />
           )}
         /> 
         <Counter
           render={(count, incrementCount) => (
               <HoverCounter count={count} incrementCount ={incrementCount} />
           )}
         /> 
        </div>
    )
}
export default App;