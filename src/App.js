import React, { useState,useEffect } from 'react';
import './App.css';
import Form from './component/form';
import TodoList from './component/TodoList';

function App() {
  useEffect(()=>{
    getLocalStorage();
  },[])

  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //useEffect
  useEffect(()=>{
    filterHandler();
    saveLocaltodos();
  },[todos,status])

  //functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'incompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default: setFilteredTodos(todos)
    }
  }

  const saveLocaltodos=()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getLocalStorage=()=>{
    if(localStorage.getItem("todos")==null)
      localStorage.setItem("todos",JSON.stringify([]))
    else{
      let todoLocal=JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        todos={todos}
        setInputText={setInputText}
        setTodos={setTodos}
        />
      <TodoList 
        filteredTodos={filteredTodos}
        todos={todos} 
        setTodos={setTodos} 
      />
    </div>
  );
}

export default App;
