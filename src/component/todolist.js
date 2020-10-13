import React from 'react'
import Todo from './todo.js'

function Todolist({ todos, setTodos, filteredTodos }){
    console.log(todos);

    return(
<div className="todo-container">
    <ul className = "todo-list">
        { filteredTodos.map(todo =>(
            <Todo  setTodos = {setTodos} 
            text = { todo.text } 
            key= { todo.id }
            todo = {todo}
            todos = {todos}/>
        ))}
       
    </ul>
</div>
    )
}



export default Todolist