import React from 'react';

function ToDoFilter({ currentFilter, onFilterChange }) {
    return (
        <div className="flex gap-2 my-4">
            {['all', 'active', 'completed'].map((type) => (
                <button
                    key={type}
                    onClick={() => onFilterChange(type)}
                    className={`px-4 py-2 rounded-full border transition-colors 
        ${currentFilter === type
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200'
                        }`}
                >
                    {{
                        all: 'All',
                        active: 'Active',
                        completed: 'Completed'
                    }[type]}
                </button>
            ))}
        </div>
    );
}

export default ToDoFilter;