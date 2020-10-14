import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './component/form.js';
import Todolist from './component/todolist.js';
import Todo from './component/todo';

function App() {
//state
  const[ inputText, setInputText ] = useState("");
  //to store todos
  const[todos, setTodos] = useState([]);
//status
const[status, setStatus] = useState("all");
//filter
const[filteredTodos, setFilteredTodos] = useState([]);//1:6:21
//run once when the app start
useEffect(()=> {
  getLocalTodos();
},[]);

//useEffect
useEffect(() => {
  filterhandler(); //filter function from below
  saveLocalTodos();
 
},[todos, status]) //empty array refers to running hey for only once when component is first rendered .
  //every time todos and status is changed effect runs
//Functions

function filterhandler(){
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter((todo) => todo.completed === true));
      break;
       case 'uncompleted':
         setFilteredTodos(todos.filter((todo) => todo.completed === false));
         break;
         default:
           setFilteredTodos(todos);
           break;
  }
};


//save to local
 function saveLocalTodos(){

  localStorage.setItem('todos', JSON.stringify(todos))


 };

function getLocalTodos()
 {
  if(localStorage.getItem('todos') == null)
  {
    localStorage.setItem('todos', JSON.stringify([])); //json.stringify() converts the js object in to the json string, //empty array if todo is null
  }
  else{
    let local = JSON.parse(localStorage.getItem('todos'))
    setTodos(local);
  }
  

   };
  


  return (
    <div className="App">
      <header>
  <div> My todo List <br/>
  {/*   <p>
New Task {inputText}</p> */} 
</div>
      </header>
      <Form 
      inputText = {inputText}
      todos={todos} 
      setTodos = {setTodos} 
      setInputText ={setInputText}
      setStatus = {setStatus}
      
      />


      <Todolist 
     filteredTodos ={filteredTodos}
      setTodos = {setTodos} todos={todos} />
<p className="footer"> Built on React.js [srz]</p>
    </div>
  );
}


export default App;
//1:22 time
