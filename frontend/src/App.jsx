import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./pages/Home";
// import { useApp } from "./context/AppContext";
import { useApp } from "./context/ AppContext";

function App() {
  const { user } = useApp();

  return (
    <div className="min-h-screen bg-gray-100 transition-colors">
      <Navbar />
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
