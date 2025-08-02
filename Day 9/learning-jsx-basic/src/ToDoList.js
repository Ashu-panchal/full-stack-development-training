// function ToDoList() {
//   let todo = ["learning html", "learning css", "learning javascript"];
//   return (
//     <div>
//       {todo.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }

// export { ToDoList };


function ToDoList() {
  let todo = ["learning html", "learning css", "learning javascript"];

  return (
    <div>
      <h2>My To-Do List</h2>
      <ul>
        {todo.map((item, index) => (
          <li
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ToDoList };
