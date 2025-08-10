import React, { useState } from "react";

function Pay({ onClose }) {
  const [toAccount, setToAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending money to:", toAccount, "Amount:", amount);
    // Add your transfer logic here
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-3xl shadow-md w-[500px] h-[500px] border rounded-3xl ml-[500px]">
        <h2 className="text-2xl font-bold text-center text-black mb-2">
          
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
{/* From Account */}
<div className="text-black bg-gray-100 rounded-3xl px-10 py-10">
  <p className="text-center pb-6">
    <span className="text-2xl font-bold text-gray-400">Transfer Funds</span>
  </p>
  <p>
    <span className="font-bold">Acc holder - </span> Ashu Panchal
  </p>
  <p>
    <span className="font-bold">Acc No - </span> 252375
  </p>
  <p>
    <span className="font-bold">Current balance - </span> 1000
  </p>
</div>


          {/* To Account */}
<div>
  <input
    type="text"
    placeholder="To Account"
    value={toAccount}
    onChange={(e) => setToAccount(e.target.value)}
    className="placeholder:pl-4 ml-6 w-[400px] border rounded-3xl p-2 text-gray-700 mb-4 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
  />
</div>


          {/* Amount */}
          <div>
            <input
              type="number"
              placeholder="How Much"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="ml-6 placeholder:pl-4 w-[400px] border rounded-3xl p-2 text-green-700 mb-[50] bg-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg hover:shadow-2xl transform hover:-translate-x-1 hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 ml-2">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-2 rounded-3xl hover:bg-green-700"
            >
              Send Money
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-black py-2 rounded-3xl hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Pay;
