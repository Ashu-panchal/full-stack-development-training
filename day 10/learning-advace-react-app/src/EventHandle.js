function handleClick(){
    alert("button clicked")
}

function handleFormSubmit() {
    alert("your form submitted");
}


function EventHandle(){
    return (
        <div>
            <button onClick={() => handleClick()}>click</button>

            <br /><br />

            <form onSubmit={() => handleFormSubmit()}>
                <label>Enter your name</label>
                <input type="string" required/> <br />

                <button>submit form</button>
            </form>
        </div>
    )
}

export {EventHandle}


// function handleClick() {
//   alert("button clicked");
// }

// function handleFormSubmit() {
//   alert("your form submitted");
// }

// function EventHandle() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
//         <button
//           onClick={handleClick}
//           className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Click
//         </button>

//         <br /><br />

//         <form
//           onSubmit={(e) => {
//             e.preventDefault(); 
//             handleFormSubmit();
//           }}
//           className="space-y-4"
//         >
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Enter your name
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">
//               Enter your Branch
//             </label>
//             <input
//               type="text"
//               required
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded hover:bg-green-600 transition"
//           >
//             Submit Form
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export { EventHandle };
