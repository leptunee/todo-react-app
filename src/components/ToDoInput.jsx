import { useState } from "react";

function ToDoInput({ onAdd }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(inputValue);
        setInputValue("");// 清空输入框
    };

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-sm">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 p-2 rounded-1 border border-gray-300"
                placeholder="Enter a new task"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
            >
                Add
            </button>
        </form>
    );
} 

export default ToDoInput;