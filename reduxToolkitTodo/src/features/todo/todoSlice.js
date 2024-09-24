import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"Hello-World"}]
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            const removeId = action.payload.id
            state.todos = state.todos.filter( (todoItem) => todoItem.id != removeId )
        },
        updateTodo:(state, action)=>{
            state.todos.map( (todo)=>{
                if(todo.id == action.payload.id){
                    todo.text = action.payload.text
                }
                return todo
            })
        },

    }
})



export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export const todoReducer =  todoSlice.reducer