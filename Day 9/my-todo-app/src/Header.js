function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-400 to-purple-600 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
        
        {/* Logo / Title */}
        <div className="flex items-center gap-3">
          <span className="text-4xl">📝</span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">My To-Do App</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6 text-lg font-medium">
          <a href="/Home" className="hover:underline hover:text-purple-100 transition">Home</a>
          <a href="/About" className="hover:underline hover:text-purple-100 transition">About</a>
        </div>

        {/* Search bar */}
        <form className="flex w-full md:w-auto items-center gap-2">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full md:w-64 px-3 py-2 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-purple-100 transition"
          >
            Search
          </button>
        </form>

      </nav>
    </header>
  );
}

export { Header };
