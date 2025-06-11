import {configureStore} from '@reduxjs/toolkit'
import reducerTodo from '../features/todo/createSlice'

export const  store = configureStore({
    reducer: reducerTodo
});