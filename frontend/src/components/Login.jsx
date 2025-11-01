import { useEffect, useState } from "react";
import { useApp } from "../context/ AppContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const { login } = useApp();

  // handle overFlow -
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) login(username);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden px-4">
      <form
        onSubmit={handleLogin}
        className="bg-gray-900/80 backdrop-blur-md border border-gray-700 p-6 sm:p-8 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn"
      >
        <h2 className="text-2xl sm:text-3xl mb-6 text-center font-semibold">
          <span className="text-purple-400">Task</span>
          <span className="text-blue-400 ml-1">Manager</span>
        </h2>
        <h3 className="text-lg sm:text-xl mb-4 text-center font-medium text-gray-200">
          Login
        </h3>
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-5"
        />
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}