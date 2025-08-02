import React from 'react';

function Tasks({ todo }) {
    return (
        <div>
            {todo.map((item, index) => (
                <div key={index}>
                    <input type="checkbox" />
                    <label className='m-3'>{item}</label>
                </div>
            ))}
        </div>
    );
}

function ToDoList() {
    const todo = ["Learning Html", "Learning CSS", "Learning React", "Learning Javascript"];
    
    return (
        <div>
            <h3 className='font-bold'>My To-Do List is following:</h3>
            <Tasks todo={todo} />
        </div>
    );
}

export { ToDoList };