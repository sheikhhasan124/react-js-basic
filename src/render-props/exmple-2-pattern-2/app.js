import React from 'react';
import ClickCounter from './clickCounter';
import Counter from './counter';
import HoverCounter from './hoverCounter';



const App=()=>{
    return(
        <div>
         
          

         <Counter>
           { (count, incrementCount) => (
               <ClickCounter count={count} incrementCount ={incrementCount} />
           )}
         </Counter>


         <Counter>
           {(count, incrementCount) => (
               <HoverCounter count={count} incrementCount ={incrementCount} />
           )}
           </Counter> 
        </div>
    )
}
export default App;