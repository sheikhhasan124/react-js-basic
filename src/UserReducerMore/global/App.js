import React, { useState } from 'react';
import ComA from './ComA';

const propContecxt = React.createContext()

const App = () => {
    const [num, setNum]=useState(0)
    return (
        <div>
            <p>{num}</p>
            <propContecxt.Provider value={[num, setNum]}>
                <ComA></ComA>
            </propContecxt.Provider>
            <h2>global</h2>
        </div>
    );
};

export default App;