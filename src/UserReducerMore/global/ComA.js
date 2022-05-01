import React, { useContext } from 'react';
import propContecxt from './App'

const ComA = () => {
    const [num, setNum] = useContext(propContecxt)
    return (
        <div>
            <button onClick={()=>setNum(num + 1)}>add</button>
        </div>
    );
};

export default ComA;