function Done() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Completed Tasks</h2>
      <table className="min-w-full table-auto border text-black  border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">Todo Title</th>
            <th className="px-4 py-2 border">Completed on</th>
          
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border px-4 py-2">Dancing</td>
            <td className="border px-4 py-2">25-08-25</td>
           
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Singing</td>
            <td className="border px-4 py-2">2-08-25</td>
           
          </tr>
          <tr className="text-center">
            <td className="border px-4 py-2">Exercise</td>
            <td className="border px-4 py-2">5-08-25</td>
         
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Done };