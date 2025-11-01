export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap justify-center mb-8 gap-3 px-4">
      {["all", "pending", "completed"].map((s) => (
        <button
          key={s}
          onClick={() => setFilter(s)}
          className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold tracking-wide transition-all duration-300
            ${
              filter === s
                ? "bg-purple-500 text-white shadow-md border border-transparent"
                : "bg-gray-800 text-gray-300 border border-gray-700 hover:bg-purple-500 hover:text-white"
            }
            
            /* Desktop hover effects only */
            sm:hover:shadow-lg sm:hover:-translate-y-0.5 sm:active:scale-105`}
        >
          {s.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
