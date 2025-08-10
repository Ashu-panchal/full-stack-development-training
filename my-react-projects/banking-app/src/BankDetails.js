import React from "react";

function BankDetails() {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[500px] h-[500px] ml-[500]">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-[150]">
          Your Account Detail
        </h2>
        <table className="w-full border border-gray-300">
          <tbody>
            <tr>
              <td className="border p-4 font-semibold text-black">Name</td>
              <td className="border p-4 text-black">Ashu Panchal</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold text-black">Number</td>
              <td className="border p-4 text-black">982841XXX</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold text-black">Branch</td>
              <td className="border p-4 text-black">HDFC Panipat</td>
            </tr>
            <tr>
              <td className="border p-4 font-semibold text-black">Balance</td>
              <td className="border p-4 text-green-600 font-bold">₹1000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BankDetails;
