import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <nav className="flex items-center justify-between px-6 py-4">
        <h2 className="text-3xl font-extrabold text-white tracking-wide">
          My To-Do App
        </h2>

        <div className="space-x-4">
          <Link
            to="/Add"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Add
          </Link>

          <Link
            to="/Show"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
           Show
          </Link>

          <Link
            to="/Done"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            ✅ Done
          </Link>
        </div>
      </nav>
    </header>
  );
}

export { Header };
