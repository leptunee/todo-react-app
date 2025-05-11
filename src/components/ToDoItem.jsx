import React from "react";
import { HiTrash } from "react-icons/hi2";

function ToDoItem({ todo, onDelete, onToggleComplete }) {
    return (
        <li
            className="group flex justify-between items-center bg-white p-3 rounded shadow mb-2 
        border border-gray-200 transition-all duration-200 hover:shadow-md"
        >
            <span
                className={`flex-1 transition-all duration-300 ${todo.completed ? "line-through text-gray-400" : ""
                    }`}
            >
                {todo.text}
            </span>

            <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => onToggleComplete(todo.id)}
                        className="hidden"
                    />
                    <div
                        className={`w-5 h-5 border-2 rounded-md mr-3 flex items-center justify-center
              ${todo.completed
                                ? "bg-green-500 border-green-500"
                                : "bg-white border-gray-300"
                            }`}
                    >
                        {todo.completed && (
                            <svg
                                className="w-3 h-3 text-white fill-current"
                                viewBox="0 0 20 20"
                            >
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        )}
                    </div>
                </label>

                <button
                    onClick={() => onDelete(todo.id)}
                    className="text-gray-500 hover:text-red-700 ml-2 p-2 rounded-full hover:bg-red-50 transition-colors flex items-center"
                    aria-label="Delete"
                >
                    <HiTrash className="text-lg opacity-90 hover:opacity-100 transition-opacity" />
                </button>
            </div>
        </li>
    );
}

export default React.memo(ToDoItem);
