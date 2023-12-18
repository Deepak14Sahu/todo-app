import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const index = () => {
  return (
    <div className='container my-3 col-8'>
      <TodoForm />
      <TodoList />
    </div>
  )
}

export default index;