import React from "react";

function Header({ onLoginClick, onCreateAccountClick }) {
  return (
    <header>
      <nav className="flex justify-between px-9 py-8 bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shaodow-3xl">
        {/* Left side - Logo */}
        <div
          className="text-5xl font-black cursor-pointer"
          onClick={() => window.location.reload()} // 🔄 Reload page
        >
          <span className="text-blue-900">Post-</span>
          <span className="text-blue-400">Pay</span>
        </div>

        {/* Right side - Buttons */}
        <div className="space-x-6">
          <button
            className="text-lg px-6 py-3 border border-black text-black rounded hover:bg-blue-600 hover:text-white hover:border-white transition duration-300"
            onClick={onCreateAccountClick} 
          >
            Create Account
          </button>
          <button
            className="text-lg px-6 py-3 border border-black text-black rounded hover:bg-blue-600 hover:text-white hover:border-white transition duration-300"
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
