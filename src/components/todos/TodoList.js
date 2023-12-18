import React from 'react'
import Header from '../ui/Header'
import Table from '../ui/Table'

const TodoList = () => {
  const todos = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
    { id: 4, title: "Task 4" },
    { id: 5, title: "Task 5" },
  ]
  return (
    <div>
      <Header text={"Todo List"} />
      <Table list={todos} />
    </div>
  )
}

export default TodoList;