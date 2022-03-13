import React, { useEffect, useReducer } from "react";

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'SUCCESS':
            return{
                loading:false,
                post:action.result,
                error:''
            }
        case 'ERROR':
            return{
                loading:false,
                post:action.result,
                error:'threr was a prblm to fetching'
            }
        default:
            return state;  
    }
}

const GetPost2 =()=>{
    const [state,dispatch] = useReducer(reducer,initialState)


   useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            dispatch({type:'SUCCESS', result:data})
        })
        .catch(()=>{
            dispatch({type: 'ERROR'})
        });
    },[])

    return(
        <>
         <h2>get post</h2>
        {state.loading? 'loading....': state.post.title}
        {state.error || null}
        </>
    )
}
export default GetPost2;