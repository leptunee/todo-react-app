// components/ToDoFilter.jsx
function ToDoFilter({ currentFilter, onFilterChange }) {
  const filters = [
    { key: "all", label: "全部" },
    { key: "active", label: "未完成" },
    { key: "completed", label: "已完成" },
  ];

  return (
    <div className="flex justify-center gap-3 my-4">
      {filters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border shadow-sm backdrop-blur-md transition-all
            ${currentFilter === key
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white/50 dark:bg-white/10 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-white/20 hover:bg-white/70 dark:hover:bg-white/20"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default ToDoFilter;