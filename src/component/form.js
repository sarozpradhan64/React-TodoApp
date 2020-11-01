import React from 'react'

//using {setInputText didnot require props.setInputText }
function Form({setInputText, todos, setTodos, inputText, setStatus}){
//write js code
//e for event
const inputTextHandler = (e) => {
    console.log(e.target.value);
    //passing input value using prop to app.js
    setInputText(e.target.value);
};

const submitTodoHandler = (e) => {
    e.preventDefault(); //to prevent browser reload while submmitting
    if (inputText==""){
        alert('PLEASE ENTER THE TASK!!!')
    }
   else{
    setTodos([
        ...todos, {
            text: inputText, completed: false, id: Math.random()*1000
        }
    ])
   }

setInputText(""); //reset the input after clicking add.

};

const statusHandler = (e) =>{
setStatus(e.target.value)

}
        return(
            <form> 
                <input value={inputText} onChange = {inputTextHandler}type ="text" className="todo-input" placeholder="New Task" />
                <button onClick = {submitTodoHandler} className = "todo-button" type = "submit">
                <i className = "fas fa-plus-square"> </i>

                </button>

                <div className="select">
                    <select onChange = {statusHandler} name="todos" className="filter-todo">
                        <option value="all"> All </option>
                        <option value = "completed"> Completed</option>
                        <option value ="uncompleted"> Uncompleted</option>
                        
                    </select>
                </div>
            </form>
        )
    }


export default Form
