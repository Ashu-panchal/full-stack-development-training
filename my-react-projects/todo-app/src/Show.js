function Show(props) {
  let todoArr = props.todo;

  function handleClick(e, todoId) {
    todoArr = todoArr.filter(todo => todo.id !== todoId);
    props.setTodo(todoArr);
    alert('To-Do task completed');
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Todo List</h2>

      <table className="min-w-full text-gray-700 table-auto border border-gray-300 rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-6 py-3 border-b">Todo Title</th>
            <th className="px-6 py-3 border-b">Due Date</th>
            <th className="px-6 py-3 border-b text-center">Mark Done</th>
          </tr>
        </thead>
        <tbody>
          {todoArr.map((value, index) => (
            <tr key={value.id} className="hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 border-b">{value.todoTitle}</td>
              <td className="px-6 py-4 border-b">{value.dueDate}</td>
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
    </div>
  );
}

export { Show };