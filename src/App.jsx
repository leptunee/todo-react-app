// App.jsx
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newIsDark = !isDarkMode;
    html.classList.toggle("dark", newIsDark);
    setIsDarkMode(newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-cover bg-center bg-no-repeat transition-all duration-300 bg-[url('https://source.unsplash.com/random/1600x900/?nature,light')] dark:bg-[url('https://source.unsplash.com/random/1600x900/?nature,dark')]">
      <div className="w-full max-w-xl rounded-3xl p-8 bg-white/90 dark:bg-gray-900 shadow-2xl backdrop-blur-lg border border-white/30 dark:border-white/20">
        <button
          onClick={toggleTheme}
          className="absolute top-6 right-6 flex items-center gap-2 text-xs bg-black/80 dark:bg-white/10 text-white dark:text-gray-800 px-4 py-2 rounded-full shadow hover:scale-105 transition-all duration-300"
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-300" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
          {isDarkMode ? "亮色模式" : "暗色模式"}
        </button>

        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          ToDo List
        </h1>
        <ToDoInput
          onAdd={addTodo}
          inputClass="rounded-l-xl bg-white/90 dark:bg-gray-700 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-gray-100"
          buttonClass="bg-blue-600 hover:bg-blue-700 text-white rounded-r-xl"
        />
        <ToDoFilter currentFilter={filter} onFilterChange={setFilter} />
        <ToDoList
          todos={filteredTodos}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
