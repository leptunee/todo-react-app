import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({
    todos,
    onDelete,
    onToggleComplete,
    emptyState = (
        <div className="text-gray-500 text-center mt-6">
            No tasks displayed.
        </div>
    ),
}) {
    return (
        <div className="w-full max-w-md">
            {todos.length === 0 ? (
                emptyState
            ) : (
                <ul className="mt-4">
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
