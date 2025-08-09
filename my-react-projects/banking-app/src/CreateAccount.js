import React from "react";

function CreateAccount({ removeMargins }) {
  return (
    <div
      className={`bg-white p-5 rounded-3xl shadow-lg text-black w-[400px] ${
        removeMargins ? "" : "mr-[300px] ml-[80px]"
      }`}
    >
      <h2 className="text-2xl font-bold mb-9 text-center">Create Account</h2>

      <form className="space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            className="w-[300px] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name"
          />
        </div>

        {/* Mobile No with +91 prefix */}
<div className="flex items-center ml-8 w-[300px] border border-blue-700 rounded-3xl focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
  <span className="px-3 bg-gray-200 text-gray-700 select-none">+91</span>
  <input
    type="tel"
    className="flex-1 px-4 py-2 outline-none"
    placeholder="Mobile No"
    maxLength="10"
    pattern="[0-9]*"
    inputMode="numeric"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, ""); // remove non-digits
    }}
  />
</div>

        {/* Select Branch */}
        <div>
          <select
            className="w-[300px] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue=""
          >
            <option value="" disabled>
              Select Branch
            </option>
            <option value="panipat">Panipat</option>
            <option value="sonipat">Sonipat</option>
            <option value="karnal">Karnal</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            className="w-[300px] ml-8 px-4 py-2 mb-8 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password"
          />
        </div>

        {/* Submit Button */}
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

export default CreateAccount;
