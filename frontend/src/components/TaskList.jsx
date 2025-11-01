/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  fetchTasks,
  updateTaskStatus,
  deleteTask,
  editTask,
} from "../api/taskService";
import FilterBar from "./FilterBar";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // getting task
  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      toast.error("Failed to load tasks");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // change status
  const handleStatusChange = async (id, status) => {
    try {
      const data = await updateTaskStatus(id, status);
      toast.success(data?.message || "Task updated successfully!");
      loadTasks();
    } catch {
      toast.error("Failed to update task");
    }
  };

  // deleting the task
  const handleDelete = async (id) => {
    try {
      const data = await deleteTask(id);
      toast.success(data?.message || "Task deleted successfully!");
      loadTasks();
    } catch {
      toast.error("Failed to delete task");
    }
  };
  // Editing and Saving
  const handleSaveEdit = async () => {
    try {
      const data = await editTask(editingTask._id, {
        title: editTitle,
        description: editDescription,
      });
      toast.success(data?.message || "Task updated successfully!");
      setEditingTask(null);
      loadTasks();
    } catch {
      toast.error("Failed to save changes");
    }
  };

  const filtered =
    filter === "all" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <>
      <TaskForm onTaskAdded={loadTasks} />
      <FilterBar filter={filter} setFilter={setFilter} />

      {filtered.length === 0 ? (
        <div className="mt-16 text-center bg-white/10 backdrop-blur-md border border-indigo-400/30 text-indigo-200 py-6 px-8 rounded-xl shadow-xl w-fit mx-auto">
          <p className="text-lg font-medium">
            ✨ You don’t have any tasks yet — add one to get started!
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filtered.map((task) => (
            <div
              key={task._id}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {task.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{task.description}</p>
                <div className="flex justify-between items-center mb-5">
                  <span
                    className={`text-sm ${
                      task.status === "completed"
                        ? "text-green-400"
                        : "text-gray-400"
                    }`}
                  >
                    ● {task.status}
                  </span>
                  <span className="text-xs text-white">
                    {new Date(task.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex justify-between gap-2 mt-auto">
                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 text-white px-4 py-1.5 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      handleStatusChange(
                        task._id,
                        task.status === "pending" ? "completed" : "pending"
                      )
                    }
                    className={`px-4 py-1.5 rounded-lg text-white ${
                      task.status === "pending"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-gray-600 hover:bg-gray-700"
                    }`}
                  >
                    {task.status === "pending" ? "Mark Done" : "Undo"}
                  </button>
                  <button
                    onClick={() => {
                      setEditingTask(task);
                      setEditTitle(task.title);
                      setEditDescription(task.description);
                    }}
                    className="bg-blue-500 text-white px-4 py-1.5 rounded-lg hover:bg-blue-600"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {editingTask && (
        <>
          <div className="fixed inset-0 bg-black/70 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-xl w-96 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Edit Task
              </h2>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full border border-gray-700 bg-gray-800 text-white rounded p-2 mb-3"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="w-full border border-gray-700 bg-gray-800 text-white rounded p-2 mb-3"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setEditingTask(null)}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
