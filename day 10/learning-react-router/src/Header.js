import { Link } from 'react-router-dom'; // ✅ Correct import

function Header() {
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center px-8 py-4 shadow-md">
      {/* Home Link */}
      <Link to="/home">
        <div className="text-2xl font-extrabold tracking-wide hover:text-blue-400 transition-all duration-300">
          Home
        </div>
      </Link>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link
          to="/profile"
          className="relative inline-block font-medium px-3 py-1 rounded transition-all duration-300 ease-in-out
                     hover:text-blue-300 hover:underline underline-offset-4
                     hover:scale-110 hover:shadow-lg hover:bg-white/30"
        >
          Profile
        </Link>

        <Link
          to="/friends"
          className="relative inline-block font-medium px-3 py-1 rounded transition-all duration-300 ease-in-out
                     hover:text-blue-300 hover:underline underline-offset-4
                     hover:scale-110 hover:shadow-lg hover:bg-white/10"
        >
          Friends
        </Link>
      </nav>
    </header>
  );
}

export default Header;
