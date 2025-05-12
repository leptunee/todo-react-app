import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({
    todos,
    onDelete,
    onToggleComplete,
    emptyState = (
        <div className="text-gray-500 text-center mt-6 text-sm">
            没有任务，添加一个吧！
        </div>
    ),
}) {
    return (
        <div className="w-full max-w-md overflow-hidden">
            {todos.length === 0 ? (
                emptyState
            ) : (
                <ul className="mt-4 max-h-[70vh] overflow-y-auto pr-1 scrollbar-hide">
                    {todos.map((todo) => (
                        <ToDoItem
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onToggleComplete={onToggleComplete}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default React.memo(ToDoList);