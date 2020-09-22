import React from 'react';

const Form = ({setStatus,inputText,setInputText,todos,setTodos})=>{
    const inputHandler=(e)=>{
        setInputText(e.target.value)
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText, completed:false, id:Math.random()*1000 }
        ])
        setInputText('');
    }

    const statusHandler=(e)=>{
        setStatus(e.target.value)
    }

    return (
        <form>
            <input value={inputText} type="text" onChange={inputHandler} className="todo-input"></input>
            <button className="todo-button" onClick={submitHandler} type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>
    );
} 

export default Form;