import React from "react";

const Card=({head,body,desc})=>{
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
export default Card;