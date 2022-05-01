import React from 'react';
import { useGlobalContext } from './Contect';

const Father = () => {
    const {addNum,numPapa}= useGlobalContext()
    return (
        <div style={{border:"1px solid black"}}>
            <p>num:{numPapa}</p>
            <h2>father</h2>
            <button onClick={()=>addNum()}>add</button>
        </div>
    );
};

export default Father;