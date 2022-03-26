

const Todos=({todos})=>{
    console.log('render')
    return(

        <>
        <h2>my todos</h2>
        {todos.map((todo,index)=>{
            return <div key={index}><p>{todo}</p>
            
            </div>
        })}
        </>
    )
}
export default Todos;