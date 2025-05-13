// components/ToDoItem.jsx
import { HiTrash } from "react-icons/hi2";

function ToDoItem({ todo, onDelete, onToggleComplete }) {
    return (
        <li className={`flex justify-between items-center px-4 py-3 mb-3 rounded-xl border border-white/30 dark:border-white/20 bg-white/40 dark:bg-white/10 shadow-sm backdrop-blur-md hover:shadow-md transition-all`}>
            <div className="flex items-center gap-3">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleComplete(todo.id)}
                        className="hidden"
                    />
                    <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors duration-300
            ${todo.completed 
  ? 'bg-green-500 border-green-500' 
  : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'}`}>
                        {todo.completed && (
                            <svg className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        )}
                    </div>
                </label>
                <span className={`text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'}`}>{todo.text}</span>
            </div>

            <button
                onClick={() => onDelete(todo.id)}
                className="text-gray-500 hover:text-red-600 p-2 rounded-full hover:bg-red-50 transition-colors"
                aria-label="删除任务"
            >
                <HiTrash className="text-lg opacity-90 hover:opacity-100 transition-opacity" />
            </button>
        </li>
    );
}

export default ToDoItem;