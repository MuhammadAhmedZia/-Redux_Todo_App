import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/createSlice'


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const HandlerAddTodo = (e) => {
        if (input.trim()) {
            e.preventDefault()
            dispatch(addTodo(input))
            setInput('')
        }

    }

    return (
        <div className='className="flex  gap-2 mb-4" '>
            <form action="" onSubmit={HandlerAddTodo} className='flex gap-2'>
                <input type="text" value={input}
                    placeholder='Add Todo...'
                    onChange={(e) => setInput(e.target.value)}
                     className="flex-1 border border-gray-300 rounded-lg  px-2 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button type='submit'
                    className="bg-purple-600 text-white px-2 md:px-4 py-2 rounded-lg hover:bg-purple-700"
                >
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default AddTodo