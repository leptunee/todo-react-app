import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onDelete, onToggleComplete }) {
    return (
        <ul className="mt-4 w-full max-w-md">
            {todos.map((todo) => (
                <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggleComplete={onToggleComplete}
                />
            ))}
        </ul>
    );
}

export default React.memo(ToDoList);
