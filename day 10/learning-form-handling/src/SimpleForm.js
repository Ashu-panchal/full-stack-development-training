import { useState } from 'react';

function SimpleForm() {
    let [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form is submitted by " + name);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-sm"
            >
                <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">Enter Your Name</h2>
                
                <input 
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                />

                <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export { SimpleForm };