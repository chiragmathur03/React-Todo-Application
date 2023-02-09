import React, { useState } from 'react'

export const Addtodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    

    const submit = (e)=>{
        e.preventDefault();
        if (!title || !desc)
        {
            alert ("Title or Description cannot be Blank")
        }else{
            addTodo (title, desc);
            setTitle("");
            setDesc("");
        }
    }

  return (
    <div className='container my-3'>
        <h4>Add a Todo</h4>
        <form onSubmit={submit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className="mb-3">
            <label htmlFor="desc" className="form-label">Todo Description</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
        </div>
        {/* <div className="mb-3 form-check"> 
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
        </form>
    </div>
  )
}
