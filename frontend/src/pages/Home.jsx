import TaskList from "../components/TaskList";
export default function Home() {
  return (
    <div className="p-6 bg-black min-h-screen text-gray-100">
      <div className="max-w-7xl mx-auto">
        <TaskList />
      </div>
    </div>
  );
}
