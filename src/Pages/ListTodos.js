import axios from 'axios';
import React, { useState, useEffect } from 'react';
import '../Css/ListTodo.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [selectedTodoId, setSelectedTodoId] = useState([]);

    // Fetch all todos from the backend
    useEffect(() => {
        const fetchTodos = () => {
        
                axios.get('http://localhost:8080/gettodos')
                .then(response=>{
                  setTodos(response.data);
                })
            .catch (error=>
                console.error('Error fetching todos:', error));
        };

        fetchTodos();
    }, []);

    // Handle selecting a todo
    const handleSelectTodo = (id) => {
        setSelectedTodoId(id)};
    
        
  

    // Handle deleting a todo
    const handleDeleteTodo = async (id) => {
        try {
            axios.get('http://localhost:8080/deletetodo')
            .then(response=>{
              alert(response.data);
            })
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Handle editing a todo
    const handleEditTodo = async(event) => {
       event.preventDefault();
      try{
        const Data3={
          id:selectedTodoId
        };

        const response=await axios.post('http://localhost:8080/fetchalltodos',Data3);
        console.log(response.data);
        if(response.data==='Todo id received'){
          window.location.href='/edittodo';
        }
        else{
          alert('error please check the api calls');
        }
        }
      catch(error){
        console.error('List todo error: ',error);
        alert('an unexpected error happend');
      }
    };

    return (
        <div className="todo-list-container">
            <h1>Todo List</h1>
            <form>
            {todos.length > 0 ? (
        todos.map(todo => (
          <div key={todo.id}>
            <input
              type="checkbox"
              id={todo.id}
              name={todo.Description} // Set name to prevent duplicate IDs
              value={todo.id}
              onClick={() => handleSelectTodo(todo.id)}
            />
            <label>{todo.description}</label>
          </div>
        ))
      ) : (
        <p>Loading todos...</p>
      )}
            </form>

            {/* Show options only when a todo is selected */}
            {selectedTodoId && (
                <div className="todo-actions">
                    <button onClick={handleEditTodo}>Edit Todo</button>
                    <button onClick={() => handleDeleteTodo(selectedTodoId)}>Delete Todo</button>
                </div>
            )}
        </div>
    );
};

export default TodoList;
