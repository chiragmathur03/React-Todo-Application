
import { Addtodo } from './Addtodo';
import { Todos } from './Todos';
import React, { useEffect, useState } from 'react';

export const Home = () => {

    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    } else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }
  
    const onDelete = (todo) => {
      console.log("I'm on Delete of todo", todo);
  
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
    }
  
    const addTodo = (title, desc) => {
      console.log("I'm adding this todo", title, desc)
      let sno;
      if (todos.length === 0) {
        sno = 1;
      } else {
        sno = todos[todos.length - 1].sno + 1;
      }
  
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
      console.log(myTodo);
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

  return (
    <>
     <Addtodo addTodo={addTodo}/>
     <Todos todos = {todos} onDelete={onDelete}/> 
    </>
   
  )
}
