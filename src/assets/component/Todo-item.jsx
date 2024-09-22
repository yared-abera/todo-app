import React from 'react'

const TodoItem = ({todos,fetchSingleTodo}) => {
   
  
  
    return (
    <div className="card">
      <p>{todos.todo}</p>
     <button 
     className="button"
     onClick={()=>fetchSingleTodo(todos.id)} 
    
    >
        Details
        </button>
    </div>
  )
}

export default TodoItem
