import React, {useState} from 'react'

export default function Todos() {
    const [todos, setTodos] = useState('');
    const [id, setId] = useState(0);

    const todolist = todos.map(todos => <li key={todos.id}>{todos.task}{todos.deadline}</li>)

    return (
        <div>
            <ul>
                
            </ul>
            <button>New Task</button>  
        </div>
    )
}
