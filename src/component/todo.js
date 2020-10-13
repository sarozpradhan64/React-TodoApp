import React from 'react'

function Todo({ text, todo, todos , setTodos}){
//event for delete button
//45 minutes ma pugixa
const deleteHandler = () => {
setTodos(todos.filter((el) => el.id !== todo.id));//el.id  means?
};


const completeHandler =() =>
{
  setTodos(todos.map((item =>{
    if(item.id === todo.id){
      return{
      ...item, completed : !item.completed, //means to modify the completed into opposite of the item.completed
    };
  
  }
  return item;
}
)
  )
);
};

return(

  <div className=
  "todo">

    <li className={`todo-item  ${todo.completed ? "completed" : ""}`}> 
{ text }</li> 

<button onClick ={completeHandler} className="complete-btn" >
  <i className="fas fa-check"> 
 </i></button>
   <button onClick = {deleteHandler} className="trash-btn">
     <i className="fas fa-trash">   </i>
     </button> </div>
);
};

export default Todo
