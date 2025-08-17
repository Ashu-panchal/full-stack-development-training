function Done(props) {
  const todoArr = props.todo;

  const completedTodos = todoArr.filter(todo => todo.todoStatus === "completed");

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[800px] h-[300px] bg-white/30 backdrop-blur-md rounded-3xl shadow-2xl mb-[170px] ml-[20px]">
        <h2 className="text-2xl font-black mt-[20px] mb-6 text-center text-white">
          Completed Tasks
        </h2>

        <hr className="border-t-1 border-white w-[90%] mx-auto mb-9" />

        {completedTodos.length === 0 ? (
          <p className="text-center text-white mt-[80px]">🚫 No completed tasks yet.</p>
        ) : (
          <table className="min-w-full text-black">
            <thead className="bg-blue-500 rounded-lg">
              <tr>
                <th className="px-4 py-2  text-white">Todo Title</th>
                <th className="px-4 py-2 text-white">Completed On</th>
              </tr>
            </thead>
            <tbody>
              {completedTodos.map(todo => (
                <tr key={todo.id} className="text-center">
                  <td className="border px-4 py-2 bg-white">{todo.todoTitle}</td>
                  <td className="border px-4 py-2 bg-white">
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
    </div>
  );
}

export { Done };
