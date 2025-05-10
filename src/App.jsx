import { useState } from 'react'
import ToDoInput from './components/ToDoInput';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // 添加新任务的函数
  const addTodo = (text) => {
    if (text.trim() === '') return;
    const newTodo = { id: Date.now(), text };
    setTodos([newTodo,...todos]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <ToDoInput onAdd={addTodo} />

      <ul className="mt-4 w-full max-w-md">
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className='bg-white p-3 rounded shadow mb-2 border border-gray-200'
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
