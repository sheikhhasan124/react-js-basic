import React from 'react';
import ClickCounter from './clickCounter';
import HoverCounter from './hoverCounter';
import User from './User';


const App=()=>{
    return(
        <div>
           <ClickCounter />
           <HoverCounter />

           {/* here is used render prop ,,,user componet a ke render hobe taha user componet ar modde bola hoine ,,baire theke bola hoase */}
           <User render={(isLogedin)=> isLogedin? "hasan": 'not hasan'} />
        </div>
    )
}
export default App;