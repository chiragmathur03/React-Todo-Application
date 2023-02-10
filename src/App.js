import './App.css';
import Header from './Build_Components/Header';
// import { Todos } from './Build_Components/Todos';
import { Footer } from './Build_Components/Footer';
// import { Addtodo } from './Build_Components/Addtodo';
import { About } from './Build_Components/About';
import { Home } from './Build_Components/Home';
// import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  // let initTodo;
  // if (localStorage.getItem("todos") === null) {
  //   initTodo = [];
  // } else {
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // }

  // const onDelete = (todo) => {
  //   console.log("I'm on Delete of todo", todo);

  //   setTodos(todos.filter((e) => {
  //     return e !== todo;
  //   }));
  // }

  // const addTodo = (title, desc) => {
  //   console.log("I'm adding this todo", title, desc)
  //   let sno;
  //   if (todos.length === 0) {
  //     sno = 1;
  //   } else {
  //     sno = todos[todos.length - 1].sno + 1;
  //   }

  //   const myTodo = {
  //     sno: sno,
  //     title: title,
  //     desc: desc,
  //   }
  //   setTodos([...todos, myTodo]);
  //   console.log(myTodo);
  // }

  // const [todos, setTodos] = useState([
  //   {
  //     sno:1,
  //     title:"Shopping",
  //     desc:"Bottle, Cover, Send Quotation"
  //   },
  //   {
  //     sno:2,
  //     title:"Learn Web Apps",
  //     desc:"Full Stack Developement"
  //   },
  //   {
  //     sno:3,
  //     title:"Pay Bill",
  //     desc:"Pay Electricity Bill"
  //   }
  // ]);

  // const [todos, setTodos] = useState(initTodo);
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])


  return (
    <>
      {/* <Header title="Todo List" searchBar={true}/>
    <Addtodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/> */}
  <Router>
      <Header title="Todo List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      <Footer />
  </Router>
    </>
  );
}

export default App;
