import React from "react";

function Login() {
  return (
    <div className="bg-white p-5 rounded-3xl shadow-lg text-black w-[400px] mr-[300px] ml-[890px]">
      <h2 className="text-2xl font-bold mb-9 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email ID</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="@gmail.com"
          />
        </div>

    <div>
          <label className="block mb-1 font-medium">Bank Name</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Bank Name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Account No</label>
          <input
            type="integer"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="-----"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

