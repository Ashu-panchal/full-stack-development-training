import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between px-10 py-4">
        

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-black/30 text-white flex items-center justify-center rounded-xl font-bold text-lg shadow">
            T
          </div>
          <span className="text-white font-semibold text-lg">Task Manager</span>
        </div>


        <div className="flex items-center space-x-8 bg-black/30 backdrop-blur-md rounded-lg px-6 py-2 shadow mt-[6px]">
  <Link
    to="/Add"
    className="text-white text-lg font-bold px-2 py-1 rounded-lg 
               transition-all duration-300 
               hover:text-blue-400 
               hover:scale-110 hover:px-9 hover:py-1"
  >
    Add
  </Link>
          <Link to="/Show"     className="text-white text-lg font-bold px-2 py-1 rounded-lg 
               transition-all duration-300 
               hover:text-blue-400 
               hover:scale-110 hover:px-9 hover:py-1">
            Show
          </Link>
          <Link to="/Done"     className="text-white text-lg font-bold px-2 py-1 rounded-lg 
               transition-all duration-300 
               hover:text-blue-400 
               hover:scale-110 hover:px-9 hover:py-1">
            Done
          </Link>
        </div>

      </nav>
    </header>
  );
}

export { Header };