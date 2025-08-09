import React from "react";

function Login({ removeMargins }) {
  return (
<div
  className={`bg-white p-5 rounded-3xl shadow-lg text-black w-[400px] ${
    removeMargins ? "" : "mr-[300px] ml-[80px]"
  }`}
>
  <h2 className="text-2xl font-bold mb-9 text-center">Login</h2>

      <form className="space-y-4">
        <div>
          <input
            type="text"
            className="w-[300] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="number"
            className="w-[300] ml-8  px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Account No"
          />
        </div>

        <div>
          <input
            type="password"
            className="w-[300] ml-8 px-4 py-2 mb-8 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
        </div>

<div className="flex justify-center">
  <button
    type="submit"
    className="w-[200px] bg-red-600 text-white py-2 rounded-3xl hover:bg-blue-700 transition duration-300"
  >
    Login
  </button>
</div>

      </form>
    </div>
  );
}

export default Login;
