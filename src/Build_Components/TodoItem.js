import React from 'react'

export const TodoItem = ({todo, onDelete  }) => {
  return (
    <> 
    <div>     
    <h5 className='my-3'>{todo.title}</h5>
    <p>{todo.desc}</p>
      {/* Funtion call and function pass  */}
      <button className="btn btn-sm btn-danger" onClick={()=> {onDelete(todo)}}>Delete</button>  
      {/* button.btn.btn-danger */}
    </div>
     <hr/>
     </>
  )
}
  