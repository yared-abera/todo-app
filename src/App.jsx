import { useState,useEffect } from "react";
import  classes from './style.module.css';

 

function App() {
  const [loading,setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error,setError] =useState(null);
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
  return (
   <> 
    <div>
      <h1>TODO-APP</h1> 
      <ul>
         {todos.map((todos)=>{
         return <li id={classes.headerTitle}  key={todos.id}>{todos.todo}</li>
         })
         }
       </ul>
    </div>
     
       
   
    </>
  )
}

export default App
