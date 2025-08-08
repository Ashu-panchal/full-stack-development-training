function Done(props) {
  const todoArr = props.todo;

  // ✅ Filter only completed tasks
  const completedTodos = todoArr.filter(todo => todo.todoStatus === "completed");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Completed Tasks</h2>

      {completedTodos.length === 0 ? (
        <p className="text-center text-gray-500">🚫 No completed tasks yet.</p>
      ) : (
        <table className="min-w-full table-auto border text-black border-gray-300">
          <thead className="bg-blue-500 rounded-lg">
            <tr>
              <th className="px-4 py-2 border">Todo Title</th>
              <th className="px-4 py-2 border">Completed On</th>
            </tr>
          </thead>
          <tbody>
            {completedTodos.map(todo => (
              <tr key={todo.id} className="text-center">
                <td className="border px-4 py-2">{todo.todoTitle}</td>
                <td className="border px-4 py-2">
                  {todo.completedDate
                    ? new Date(todo.completedDate).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Done };
