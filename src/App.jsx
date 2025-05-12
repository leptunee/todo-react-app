import { useMemo, useState } from "react";
import { useEffect } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import "./App.css";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  const [todos, setTodos] = useState([]);

  // 本地存储
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // 添加新任务的函数
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  // 删除任务的函数
  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((todo) => todo.id !== idToDelete));
  };

  // 完成任务的函数
  const toggleComplete = (idToToggle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 筛选器以及筛选逻辑
  const [filter, setFilter] = useState("all"); // all, active, completed
  const filteredTodos = useMemo(() =>
    todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return  todo.completed;
      default:
        return true;
    }
  }),
  [todos, filter]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">ToDo List</h1>
      <ToDoInput onAdd={addTodo} />
      <ToDoFilter 
        currentFilter={filter}
        onFilterChange={setFilter}
      />
      <ToDoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
