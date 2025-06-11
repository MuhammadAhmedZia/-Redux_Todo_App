import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/createSlice'
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

function TodoItems({ todo }) {
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [newText, setNewText] = useState(todo.text)

    const updateTodoHandler = () => {
        if (newText.trim()) {
            dispatch(updateTodo({ id: todo.id, newText }))
            setIsEdit(false)
        }
    }

    return (
        <li className="bg-gray-100 flex items-center justify-between p-2 rounded-lg shadow-sm mb-2">
            {isEdit ? (
                <>
                    <input type="text" value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="flex-1 border border-gray-300 rounded px-2 py-1 mr-2"
                    />
                    <button onClick={updateTodoHandler}
                        className="bg-green-500 text-white px-2 py-1 rounded mr-1"
                    >
                        <FaSave/>
                    </button>
                    <button onClick={() => setIsEdit(false)}
                        className="bg-red-500 text-white px-2 py-1 rounded mr-1"
                    >
                        <MdCancel/>
                    </button>
                </>
            ) : (
                <>
                    <span className="flex-1 text-2xl">{todo.text}</span>
                    <div className="flex gap-2">
                        <button onClick={() => setIsEdit(true)}
                             className="text-blue-600 text-2xl hover:underline"
                        >
                            <MdEditSquare />
                        </button>
                        <button onClick={() => dispatch(removeTodo(todo.id))}
                             className="text-red-500 text-2xl hover:underline"
                        > 
                            <MdDelete/>
                        </button>
                    </div>



                </>
            )
            }
        </li>
    )
}

export default TodoItems