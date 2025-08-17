import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ todo, setTodo }) {
  const [formData, setFormData] = useState({
    todoTitle: "",
    dueDate: "",
    todoStatus: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: todo.length + 1,
      ...formData
    };

    setTodo([...todo, newTodo]);
    setFormData({ todoTitle: "", dueDate: "", todoStatus: "" });
    navigate("/Show");
  }

  return (
    <div>
      <div className="max-w-md w-full bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl p-9 mb-[160px] ml-[635px]">
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Add Todo
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div className="max-w-sm mx-auto">
            <label className="block font-medium mb-2 text-white">Todo Title</label>
            <input
              type="text"
              name="todoTitle"
              value={formData.todoTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-white/30 bg-white/60 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:blue-red-700 transform transition duration-300 hover:scale-105"
              placeholder="Enter todo title"
              required
            />
          </div>

          <div className="max-w-sm mx-auto">
            <label className="block font-medium mb-2 text-white">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-white/30 bg-white/60 text-gray-800 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 transform transition duration-300 hover:scale-105"
              required
            />
          </div>

          <div className="max-w-sm mx-auto">
            <label className="block font-medium mb-2 text-white">Status</label>
            <input
              type="text"
              name="todoStatus"
              value={formData.todoStatus}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-full border border-white/30 bg-white/60 text-gray-800 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-700 transform transition duration-300 hover:scale-105 mb-6"
              placeholder="e.g., Pending"
            />
          </div>

          <button
            type="submit"
            className="w-[200px] bg-blue-600 text-white py-2 mx-[90px] rounded-3xl hover:scale-105 hover:bg-blue-800 transform transition duration-300 "
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export { Add };