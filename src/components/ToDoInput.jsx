// components/ToDoInput.jsx
import { useState } from "react";

function ToDoInput({ onAdd, inputClass = '', buttonClass = '' }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-xl mb-4 px-4 sm:px-0">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="输入任务..."
                className={`flex-1 w-full px-4 py-2 text-sm outline-none rounded-l-xl bg-white/60 dark:bg-white/20 border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition-all ${inputClass}`}
            />
            <button
                type="submit"
                className={`px-5 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white rounded-r-xl shadow transition-all ${buttonClass}`}
            >
                添加
            </button>
        </form>
    );
}

export default ToDoInput;
