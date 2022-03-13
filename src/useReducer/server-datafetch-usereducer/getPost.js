import { useEffect, useState} from "react";

const GetPost =()=>{
    const [loading,setLoading]= useState(true)
    const [error,setError]= useState('')
    const [post, setPost]= useState({})


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        setLoading(false)
        setPost(data)
        setError('')
    })
    .catch(err=>{
      setLoading(false)
      setPost({})
      setError("ther is prblm")
    })
},[])

    return(
        <>
        <h2>get post</h2>
        {loading? 'loading....':post.title}
        {error? error:null}
        </>
    )
}
export default GetPost;