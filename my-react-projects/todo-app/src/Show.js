function Show(props) {
  let todoArr = props.todo;

  // ✅ Event handler to mark todo as completed
  function handleClick(e, todoId) {
    const updatedTodoArr = todoArr.map(todo =>
      todo.id === todoId
        ? { ...todo, todoStatus: "completed", completedDate: new Date() }
        : todo
    );

    props.setTodo(updatedTodoArr);
    alert('To-Do task marked as completed');
  }

  const pendingTodos = todoArr.filter(todo => todo.todoStatus !== "completed");

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Todo List</h2>

      {pendingTodos.length === 0 ? (
        <p className="text-center text-gray-500">🎉 No task assigned yet!</p>
      ) : (
        <table className="min-w-full text-gray-700 table-auto border border-gray-300 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-blue-500 text-left text-white">
              <th className="px-6 py-3 border-b">Todo Title</th>
              <th className="px-6 py-3 border-b">Due Date</th>
              <th className="px-6 py-3 border-b">status</th>
              <th className="px-6 py-3 border-b text-center">Mark Done</th>
            </tr>
          </thead>

          <tbody>
            {pendingTodos.map((value) => (
              <tr key={value.id} className="hover:bg-gray-100 transition-colors">
                <td className="px-6 py-4 border-b">{value.todoTitle}</td>
                <td className="px-6 py-4 border-b">{value.dueDate}</td>
                <td className="px-6 py-4 border-b">{value.todoStatus}</td>
                <td className="px-6 py-4 border-b text-center">
                  <button
                    onClick={(e) => handleClick(e, value.id)}
                    className="inline-flex items-center gap-2 px-3 py-1"
                  >
                    <input
                      type="checkbox"
                      className="accent-white w-4 h-4"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export { Show };
