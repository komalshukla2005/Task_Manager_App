import { useState } from "react";
import { toast } from "react-toastify";
import { addTask } from "../api/taskService"; 

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Title is required!");
      return;
    }

    try {
      const data = await addTask({ title, description });
      toast.success(data?.message || "Task added successfully!");
      setTitle("");
      setDescription("");
      onTaskAdded?.(data.data);
    } catch (error) {
      const errMsg =
        error.response?.data?.message || "Failed to add task! Try again.";
      toast.error(errMsg);
      console.error("Error adding task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-xl shadow-lg mb-8 border border-gray-700"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">Add New Task</h2>

      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-3 border border-gray-700 bg-gray-800 text-white rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />

      <button
        type="submit"
        className="w-full sm:w-fit px-6 py-2.5 bg-purple-600 text-white font-semibold rounded-lg shadow-md
                   hover:bg-purple-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Add Task
      </button>
    </form>
  );
}
