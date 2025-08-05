function Show() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Todo List</h2>
        <table className="min-w-full text-black table-auto border-2 border-gray-300">
          <thead>
            <tr className="bg-gray-300 border">
              <th className="px-4 py-2 border">Todo Title</th>
              <th className="px-4 py-2 border">Due Date</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
             <tr className="text-center">
                <td className="border px-4 py-2">Singing</td>
                <td className="border px-4 py-2">26-08-25</td>
                <td className="border px-4 py-2"><input type="checkbox"/></td>
              </tr>
            <tr className="text-center">
                <td className="border px-4 py-2">Dancing</td>
                <td className="border px-4 py-2">2-08-25</td>
                <td className="border px-4 py-2"><input type="checkbox"/></td>
              </tr>
        <tr className="text-center">
                <td className="border px-4 py-2">Study</td>
                <td className="border px-4 py-2">6-08-25</td>
                <td className="border px-4 py-2"><input type="checkbox"/></td>
              </tr>
        <tr className="text-center">
                <td className="border px-4 py-2">Cooking</td>
                <td className="border px-4 py-2">3-08-25</td>
                <td className="border px-4 py-2"><input type="checkbox"/></td>
              </tr>
        
          </tbody>
        </table>
    </div>
  );
}

export { Show };