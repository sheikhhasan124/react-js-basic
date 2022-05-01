import React from 'react';
import { useGlobalContext } from './Contect';

const Son = () => {
    const {num,numPapa, setNumPapa}=useGlobalContext()
    return (
        <div style={{border:"1px solid black"}}>
            <p>num:{num}</p>
            <h2>son</h2>
            <button onClick={()=>setNumPapa(numPapa + 1)}>add</button>
        </div>
    );
};

export default Son;