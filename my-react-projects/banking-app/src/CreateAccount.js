import React, { useState } from "react";

function CreateAccount({ removeMargins }) {
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Please enter your name.");
    } else {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      {/* Form Container */}
      <div
        className={`bg-white p-5 rounded-3xl shadow-lg text-black w-[400px] ${
          removeMargins ? "" : "mr-[300px] ml-[80px]"
        } ${showPopup ? "blur-sm" : ""}`}
      >
        <h2 className="text-2xl font-bold mb-9 text-center">Create Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[300px] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
              placeholder="Name"
            />
          </div>

          {/* Mobile No with +91 prefix */}
          <div className="flex items-center ml-8 w-[300px] border border-blue-700 rounded-3xl focus-within:ring-2 focus-within:ring-green-500 overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out">
            <span className="px-3 bg-gray-200 text-gray-700 select-none">+91</span>
            <input
              type="tel"
              className="flex-1 px-4 py-2 outline-none"
              placeholder="Mobile No"
              maxLength="10"
              pattern="[0-9]*"
              inputMode="numeric"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          {/* Select Branch */}
          <div>
            <select
              className="w-[300px] ml-8 px-4 py-2 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
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
              className="w-[300px] ml-8 px-4 py-2 mb-8 border border-blue-700 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
              placeholder="Password"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[200px] bg-red-600 text-white py-2 rounded-3xl hover:bg-blue-700 transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-[350px]">
            <h2 className="text-xl font-bold mb-4">Account Created 🎉</h2>
            <p className="text-gray-700 mb-6">
              {name}, you have successfully created an account.
            </p>
            <button
              onClick={closePopup}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
