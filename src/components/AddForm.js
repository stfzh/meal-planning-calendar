import React, { useState } from 'react';




const AddForm = () => {

  const [todos, setTodos] = useState('yo');

  const handleChange = (event) => {
    // event.preventDefault();
    setTodos(event.target.value);
    console.log(todos);
  }

  return (
    <>
      <form onSubmit={handleChange}>
        <input 
        type='text'
        placeholder='enter stuff'
        />
        {/* <button type='submit'>add</button> */}
        <input type='submit' value='Submit' />
      </form>
      <div>
        {todos}
      </div>
    </>
  )
}

export default AddForm;