function Show(props) {
  let todoArr = props.todo;

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
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[800px] h-[400px] bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl mb-[170px] ml-[20px]">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white pt-[30px]">
          Assigned Tasks
        </h2>

        <hr className="border-t-1 border-white w-[90%] mx-auto mb-6" />

        {pendingTodos.length === 0 ? (
          <p className="text-center text-white pt-[60px]">🚫 No task assigned yet!</p>
        ) : (
          <table className="min-w-full text-gray-700 table-auto border border-black rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-left text-white">
                <th className="px-6 py-3 border-b">Todo Title</th>
                <th className="px-6 py-3 border-b">Due Date</th>
                <th className="px-6 py-3 border-b">Status</th>
                <th className="px-6 py-3 border-b text-center">Mark Done</th>
              </tr>
            </thead>

            <tbody>
              {pendingTodos.map((value) => (
                <tr
                  key={value.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-4 border-b bg-white">{value.todoTitle}</td>
                  <td className="px-6 py-4 border-b bg-white">{value.dueDate}</td>
                  <td className="px-6 py-4 border-b bg-white">{value.todoStatus}</td>
                  <td className="px-6 py-4 border-b text-center bg-white">
                    <button
                      onClick={(e) => handleClick(e, value.id)}
                      className="inline-flex items-center gap-2 px-3 py-1"
                    >
<input
  type="checkbox"
  className="
    appearance-none 
    w-5 h-7 
    border-1 border-black rounded 
    cursor-pointer 
    hover:bg-white/30 hover:before:content-['✔'] 
    hover:before:flex hover:before:items-center hover:before:justify-center hover:before:text-white 
    checked:bg-white checked:before:content-['✔'] checked:before:text-black
  "
/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export { Show };
