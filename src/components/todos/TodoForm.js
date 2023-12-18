import React from 'react'
import Header from '../ui/Header'

const TodoForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <Header text={"Todo Form"} />
      <form className='row' onSubmit={handleSubmit}>
        <input type='text' className='form-control my-3' />
        <select className='form-select'>
          <option>Pending</option>
          <option>Completed</option>
        </select>
        <button type='submit' className=" col-1 btn btn-dark my-3">Add</button>
      </form>
    </div>
  )
}

export default TodoForm;