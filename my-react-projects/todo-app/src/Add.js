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

    // Create a new todo with unique ID
    const newTodo = {
      id: todo.length + 1,
      ...formData
    };

    // Add new todo to the list
    setTodo([...todo, newTodo]);

    // Clear the form
    setFormData({ todoTitle: "", dueDate: "", todoStatus: "" });

    // Redirect to Show page
    navigate("/Show");
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Add Todo</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="font-medium mb-1 text-black">Todo Title:</label>
          <input
            type="text"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            required
          />
        </div>

        <div>
          <label className="font-medium mb-1 text-black">Status:</label>
          <input
            type="text"
            name="todoStatus"
            value={formData.todoStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-md"
            placeholder="e.g., Pending"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export { Add };
