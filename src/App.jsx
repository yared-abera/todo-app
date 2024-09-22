import { useState,useEffect } from "react";
import  classes from './style.module.css';
import TodoItem from "./assets/component/Todo-item";
import './assets/styles/todo-item.css';


function App() {
  const [loading,setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error,setError] =useState(null);
  const [details,setDetails]=useState([]);
 
 
  async function fetchTodoList(){
   
  try{
  setLoading(true);
    const response= await fetch('https://dummyjson.com/todos');
    const result = await  response.json();
    console.log(result);
    if(result?.todos && result?.todos.length>0)
    {
       setTodos(result?.todos);
       setLoading(false);
       setError('');

    }
    else{
      setTodos([]);
      setLoading(false);
      setError('');
      
    }

  }catch(e)
  {
    console.log(e);
    setError("some error occured");
  }

 }
 
  useEffect(()=>{
   fetchTodoList();
  }
  ,[]);





  async function fetchSingleTodo(getCurrentId) {
    
    console.log(getCurrentId);
    try {

    const response= await fetch();
    const details=await response.json();
     
    if(details&&details.length>0){
       setDetails(details);

    }else{
      setDetails([]);
    }
  
  } catch (error) {
      console.log(error)
    }   
  }


  return (
   <> 
    <div>
      <h1>TODO-APP</h1> 
       <div className="card-container">
         {todos.map((todos)=>{
        return <TodoItem todos={todos} fetchSingleTodo={fetchSingleTodo}/>
         })
         }
        </div>
    </div>

    </>
  )
}

export default App
