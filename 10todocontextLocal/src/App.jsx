import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItem from './components/TodoItem/TodoItem'


function App() {

    const [todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        setTodos((prev) => {
            return [{ id: Date.now(), todo: newTodo, completed: false }, ...prev]
        })
    }
    const updateTodo = (id, newTodo) => {
        setTodos((prev) => (
            prev.map((prevTodo) => {
                if (prevTodo.id === id) {
                    return { ...prevTodo, todo: newTodo }
                }
                else {
                    return prevTodo
                }
            })
        ))
    }
    const deleteTodo = (delId) => {
        setTodos((prev) => (
            prev.filter((eachItem) => eachItem.id != delId)
        ))
    }
    const toggleComplete = (completeId) => {
        setTodos((prev) => (
            prev.map((eachTodo) => {
                if (eachTodo.id === completeId) {
                    return { ...eachTodo, completed: !eachTodo.completed }
                }
                else {
                    return eachTodo
                }
            })
        ))
    }


    useEffect(() => {
        const todosLocal = localStorage.getItem("todos");
        console.log(todosLocal);
    
        if (todosLocal) { // Check if todosLocal is not null
            try {
                const parsedTodos = JSON.parse(todosLocal);
                if (Array.isArray(parsedTodos) && parsedTodos.length > 0) {
                    setTodos(parsedTodos);
                }
            } catch (error) {
                console.error("Failed to parse todos from localStorage:", error);
            }
        }
    }, []);
    
    


    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


    return (
        <TodoContextProvider value={{ todos, setTodos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                                <TodoItem todo = {todo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default App
