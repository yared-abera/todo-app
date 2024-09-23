import React from 'react'

const TodoItem = ({todos,fetchSingleTodo,renderTodoItemDetails}) => {
   
  
  
    return (
    <div className="card">
      <p>{todos.todo}</p>
     <button 
     className="button"
     onClick={()=>renderTodoItemDetails()} 
    
    >
        Details
        </button>
    </div>
  )
}

export default TodoItem
