import React from 'react'
import { useSelector } from 'react-redux'
import TodoItems from './TodoItems'
function Todos() {

  const todos = useSelector(state => state.todos)
   if (!todos.length) return <p className="text-gray-500 text-center">No Todos Yet</p>

  return (

    <div className=''>
      <h1 className='font-extrabold text-center text-3xl  text-green-500 m-4'>TODOS LIST</h1>
      <ul className="list-none ">
        {todos.map((todo) => (
          <TodoItems key={todo.id} todo={todo} />
        ))}
      </ul>


    </div>
  )
}

export default Todos