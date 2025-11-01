import { useState } from "react";
import { useApp } from "../context/ AppContext";
export default function Navbar() {
  const { user, logout } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="px-6 sm:px-10 py-3 sm:py-4 bg-gray-900 shadow-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-2xl sm:text-3xl">📝</span>
          <h1 className="text-lg sm:text-2xl font-semibold tracking-wide text-white">
            Task <span className="text-purple-500">Manager</span>
          </h1>
        </div>

        {user && (
          <>
            <div className="hidden sm:flex items-center gap-5">
              <span className="text-lg font-medium text-gray-200">
                Welcome,&nbsp;
                <span className="text-purple-400 font-semibold text-xl capitalize">
                  {user}
                </span>
              </span>
              <button
                onClick={logout}
                className="px-5 py-2 bg-red-500 text-white text-base font-semibold rounded-lg
                           hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-0.5
                           transition-all duration-300"
              >
                Logout
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </>
        )}
      </div>

      {user && isMenuOpen && (
        <div className="sm:hidden mt-4 pb-2 border-t border-gray-800 pt-4">
          <div className="flex justify-between items-center gap-3">
            <span className="text-sm font-medium text-gray-200">
              Welcome,&nbsp;
              <span className="text-purple-400 font-semibold text-base capitalize">
                {user}
              </span>
            </span>
            <button
              onClick={() => {
                logout();
                setIsMenuOpen(false);
              }}
              className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg
                         hover:bg-red-600 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
