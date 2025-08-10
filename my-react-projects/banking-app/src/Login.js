import React from "react";

function Login({ removeMargins, onLoginSuccess }) {
  return (
    <div
      className={`bg-white p-5 rounded-3xl shadow-lg text-black w-[400px] ${
        removeMargins ? "" : "mr-[300px] ml-[80px]"
      }`}
    >
      <h2 className="text-2xl font-bold mb-9 text-center">Login</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (onLoginSuccess) onLoginSuccess(); // ✅ trigger header change
        }}
      >
        <div>
          <input
            type="text"
            className="w-[300] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="number"
            className="w-[300] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out mt-[10]"
            placeholder="Account No"
          />
        </div>

        <div>
          <input
            type="password"
            className="w-[300] ml-8 px-4 py-2 mb-8 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out mt-[10]"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-[200px] bg-red-600 text-white py-2 rounded-3xl hover:bg-green-700 transition duration-300 mb-[30]"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
