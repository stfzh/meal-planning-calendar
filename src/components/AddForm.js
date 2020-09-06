import React, { useState } from 'react';


const AddForm = () => {

  const [todos, setTodos] = useState(['hi', 'hello']);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setTodos(event.target.value);
    console.log(todos)

  }

  const handleChange = (event) => {
    setTodos(event.target.value);
    // let list = todos;
    // setTodos(list.concat(event.target.value));
    // console.log(event.target.name);
    // console.log(event.target.value);

  }

  let newTodo = todos
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, event.target.value]);
  }

  return (
    <>
      <form onSubmit={addTodo}>
        <input 
        type='text'
        onChange={handleChange}
        placeholder='enter stuff'
        />

        <input type='submit' value='Add' />
      </form>
      <div>
      {/* {todos.map(item => <li>{item}</li>)} */}
      {todos}
      </div>
    </>
  )
}

export default AddForm;