import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur shadow-lg">
      <nav className="flex items-center justify-between px-10 py-4">
        

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white text-blue-600 flex items-center justify-center rounded-full font-bold text-lg shadow">
            A
          </div>
          <span className="text-blue-600 font-semibold text-lg">Task Manager</span>
        </div>


        <div className="flex items-center space-x-8 bg-white rounded-lg px-6 py-2 shadow">
          <Link to="/Add" className="text-black hover:text-red-600 text-lg font-bold">
            Add
          </Link>
          <Link to="/Show" className="text-black hover:text-blue-600 text-lg font-bold">
            Show
          </Link>
          <Link to="/Done" className="text-black hover:text-blue-600 text-lg font-bold">
            Done
          </Link>
        </div>

      </nav>
    </header>
  );
}

export { Header };