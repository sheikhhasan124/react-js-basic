import React from "react";

const Card2=(props)=>{

return(
    
        <>
        <div className="card2">
            <h2>{props.name}</h2>
            <p>{props.job}</p>
        </div>
        </>
    )
}
export default Card2;



//card one not dynamic
/* const CardOne=({head,body,desc})=>{
    return(
        <>
        <div className="card">
            <h1 className="head">{head}</h1>
            <h3>{body}</h3>
            <p>{desc}</p>
        </div>
        </>
    )
}
export default CardOne; */